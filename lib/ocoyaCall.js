export function fetcher(query) {
  // console.log('query :>> ', query);
  return fetch(`https://app.ocoya.com/api/_public/v1/${query}`, {
    method: 'GET', // `${method}`
    headers: {
      'Access-Control-Allow-Origin': 'https://ocoya-api.witus.online/, https://app.ocoya.com,http://localhost:3000/',
      // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      // 'Access-Control-Allow-Headers': 'Content-Type',
      'Content-type': 'application/json',
      'X-API-Key': process.env.OCOYA_X_API_Key,
      'Accept': 'application/json'
    },
    redirect: 'follow'
    // body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log('json :>> ', json);
      return json.data
    })
}