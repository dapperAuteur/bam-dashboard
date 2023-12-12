export async function GET() {
  const res = await fetch('https://app.ocoya.com/api/_public/v1/social-profiles', {
    headers: {
      'Access-Control-Allow-Origin': 'https://ocoya-api.witus.online/, https://app.ocoya.com,http://localhost:3000/',
      // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      // 'Access-Control-Allow-Headers': 'Content-Type',
      'Content-type': 'application/json',
      'X-API-Key': process.env.OCOYA_X_API_Key,
      'Accept': 'application/json'
    },
    redirect: 'follow'
  })
  .then((res) => res.json())
    .then((json) => {
      console.log('json :>> ', json);
      return json.data
    })
}