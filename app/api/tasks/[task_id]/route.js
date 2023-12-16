import Task from "@/app/(models)/Task";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
  try {

    const { task_id } = params;

    console.log('task_id :>> ', task_id);

    const task = await Task.findById(task_id);

    console.log('task :>> ', task);
    return NextResponse.json({
      task: task },{
        message: "Task found"
      },{
        status: 201
      }
      );
  } catch (err) {
    console.log('POST task err :>> ', err);
    return NextResponse.json({
      message: `Error Post task ${err.message}`
    },{
      status: 500,
    })
  }
}

export async function PATCH(req, {params}) {
  try {

    const { task_id } = params;

    console.log('task_id :>> ', task_id);
    const body = await req.json();
    const taskData = body.taskData;
    // console.log('body :>> ', body);
    // console.log('taskData :>> ', taskData);

    const updatedTask = await Task.findByIdAndUpdate(task_id, taskData, {
      new: true, // Return the new document version not the old one.
      runValidators: true,
    });

    console.log('updatedTask :>> ', updatedTask);
    return NextResponse.json({
      updatedTask: updatedTask },{
        message: "Task Updated"
      },{
        status: 201
      }
      );
  } catch (err) {
    console.log('POST task err :>> ', err);
    return NextResponse.json({
      message: `Error Post task ${err.message}`
    },{
      status: 500,
    })
  }
}

export async function DELETE(req, {params}) {
  try {

    const { task_id } = params;

    console.log('task_id :>> ', task_id);

    const deletedTask = await Task.findByIdAndDelete(task_id, {
      new: true, // Return the new document version not the old one.
      runValidators: true,
    });

    console.log('deletedTask :>> ', deletedTask);
    return NextResponse.json({
      deletedTask: deletedTask },{
        message: "Task Deleted"
      },{
        status: 201
      }
      );
  } catch (err) {
    console.log('POST task err :>> ', err);
    return NextResponse.json({
      message: `Error Post task ${err.message}`
    },{
      status: 500,
    })
  }
}