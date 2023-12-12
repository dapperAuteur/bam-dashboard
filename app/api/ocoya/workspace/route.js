import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://app.ocoya.com/api/_public/v1/workspace', {
      headers: {
        'Access-Control-Allow-Origin': 'https://ocoya-api.witus.online/, https://app.ocoya.com,http://localhost:3000/',
        'Content-type': 'application/json',
        'X-API-Key': process.env.OCOYA_X_API_Key,
        'Accept': 'application/json'
      },
      redirect: 'follow'
    });
    if (!res.ok) {
      return new NextResponse("Error while fetching workspace data", { status: res.status });
    }
    const json = await res.json();
    return new NextResponse(JSON.stringify({
      workspace: json,
      status: 200,
    }));
  } catch (err) {
    console.log('err fetching data :>> ', err);
    return new NextResponse("Error while workspace fetching data", { status: 500 })
  }
}