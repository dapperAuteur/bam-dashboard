import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body) {
      return NextResponse.json(
        { message: "Body is required." },
        { status: 400 }
      )
    }
    const res = await fetch('https://app.ocoya.com/api/_public/v1/schedules', {
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.OCOYA_X_API_Key_LOCAL,
        },
      method: 'POST',
      body: JSON.stringify(body)
    })
    console.log('res :>> ', res);
    if (!res.ok) {
      console.log('res :>> ', res);
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return NextResponse.json(
      { message: "Hello World." },
      { status: 201 });
  } catch (err) {
    return NextResponse.json({
      message: `It's Not Working as expected. Err: >> ${err.message}`
    }, {status: 500}) 
  }
}