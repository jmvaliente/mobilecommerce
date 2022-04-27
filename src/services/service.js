const URL_API = 'https://front-test-api.herokuapp.com'

export const getMobileList = async () => {
  const data = await fetch(`${URL_API}/api/product`)
    .then(response => response.json())
    .then(data => data)
  return data
}

export const getMobileDetail = async (id) => {
  const data = await fetch(`${URL_API}/api/product/${id}`)
    .then(response => response.json())
    .then(data => data)
  return data
}

export const addCartMobile = async (dataMobile) => {
  const data = await fetch(`${URL_API}/api/cart`, {
    method: 'POST',
    body: dataMobile
  })
    .then(response => response.json())
    .then(data => data)
  return data
}
