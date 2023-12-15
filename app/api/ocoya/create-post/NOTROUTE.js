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
    console.log('body :>> ', body);
    // const bodyStringify = JSON.stringify(body.formData)
    // console.log('bodyStringify.length :>> ', bodyStringify.length);
    const res = await fetch('https://app.ocoya.com/api/_public/v1/schedules', {
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.OCOYA_X_API_Key,
        },
      method: 'POST',
      body: JSON.stringify(body)
    })
    console.log('res :>> ', res);
    console.log("running");
    if (!res.ok) {
      return new NextResponse("Failed to create post", { status: res.status});
    }
    const json = await res.json();
    console.log('newOcoyaPost json :>> ', json);
    return new NextResponse(JSON.stringify({
      newOcoyaPost: "json",
      status: 200
    }));

  } catch (err) {
    console.log('newOcoyaPost POST err.message :>> ', err.message);
    return new NextResponse({message: `Error while creating newOcoyaPost ${err}`}, { status: 500 })
  }
}