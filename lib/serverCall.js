export function fetcher(query) {
  // console.log(query);
  // return fetch('http://localhost:3001/api/graphql', { // local server from finance-dashboard app
  return fetch('https://code-word-list.witus.online/api/graphql', { // production server from finance-dashboard app
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => {
      // console.log('json :>> ', json);
      return json.data
    })
}