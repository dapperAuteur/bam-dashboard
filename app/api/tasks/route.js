import Task from "../../(models)/Task";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const taskData = body.taskData;
    console.log('body :>> ', body);
    console.log('taskData :>> ', taskData);

    if (!taskData?.task_name) {
      return NextResponse.json({
        message: "task_name is required."
      },{
        status: 400
      });
    }

    const duplicate = await Task.findOne({ task_name: taskData?.task_name }).
      lean()
      .exec();

    if (duplicate) {
      return NextResponse.json({
        message: "Duplicate Task"
      },
      {
        status: 409
      })
    }

    const newTask = await Task.create(taskData);
    console.log('newTask :>> ', newTask);
    return NextResponse.json({
      data: newTask,
    },{
      message: "Task created."
    },{
      status: 201
    })
  } catch (err) {
    console.log('POST task err :>> ', err);
    return NextResponse.json({
      message: `Error Post task ${err.message}`
    },{
      status: 500,
    })
  }
}

export async function GET() {
  try {
    const tasks = await Task.find();
    console.log('tasks :>> ', tasks);
    
    return NextResponse.json({
      tasks: tasks
    },{
      status: 200
    })
  } catch (err) {
    console.log('GET tasks err :>> ', err);
    return NextResponse.json({
      error: 'An error occurred while fetching the tasks'
    },{
      status: 500
    })
  }
}