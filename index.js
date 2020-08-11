document.getElementById('action').addEventListener('click', () => {
  const userApi = 'https://randomuser.me/api/'

  // call user API
  // store random first name in a variable firstUser
  // call user API again, after you finish calling first one
  // store random first name in variable secondUser
  // console log `${firstUser} and ${secondUser} are friends`

  const fetchCall = async () => {
    const fetchedApi = await fetch(userApi)
    const fetchedJson = await fetchedApi.json()

    const firstUser = fetchedJson.results[0].name.first

    const fetchedApi2 = await fetch(userApi)
    const fetchedJson2 = await fetchedApi2.json()

    const secondUser = fetchedJson2.results[0].name.first

    console.log(`${firstUser} and ${secondUser} are friends`)
  }

  fetchCall()
})
