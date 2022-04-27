import { URL_API } from '../constants/index'
import { existCache, existCacheMobile } from './cacheUtils'

export const getMobileList = async () => {
  if (existCache()) {
    const cache = window.sessionStorage.getItem('data')
    return JSON.parse(cache)
  } else {
    // eslint-disable-next-line
    const data = await fetch(`${URL_API}/api/product`)
      .then(response => response.json())
      .then(data => data)
    window.sessionStorage.setItem('data', JSON.stringify(data))
    window.sessionStorage.setItem('date', new Date().getTime())
    return data
  }
}

export const getMobileDetail = async (id) => {
  if (existCacheMobile(id)) {
    const cache = window.sessionStorage.getItem(id)
    return JSON.parse(cache)
  } else {
    // eslint-disable-next-line
    const data = await fetch(`${URL_API}/api/product/${id}`)
      .then(response => response.json())
      .then(data => data)
    window.sessionStorage.setItem(id, JSON.stringify(data))
    return data
  }
}

export const addCartMobile = async (dataMobile) => {
  // eslint-disable-next-line
  const data = await fetch(`${URL_API}/api/cart`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataMobile)
  })
    .then(response => response.json())
    .then(data => {
      const itemsStorage = JSON.parse(window.sessionStorage.getItem('cart')) || []
      window.sessionStorage.setItem('cart', JSON.stringify([...itemsStorage, dataMobile]))
      return data
    })
    .catch(error => Error(error))
  return data
}
