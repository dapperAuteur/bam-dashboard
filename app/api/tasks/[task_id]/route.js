import Task from "@/app/(models)/Task";
import { NextResponse } from "next/server";

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