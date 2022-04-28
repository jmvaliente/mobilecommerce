import { CACHE_DURATION } from '../constants/index'

export const hourCache = () => Number(new Date().getTime()) < CACHE_DURATION + Number(window.sessionStorage.getItem('date'))

export const existCache = () => window.sessionStorage.getItem('data') && hourCache()

export const existCacheMobile = (id) => window.sessionStorage.getItem(id) && hourCache()
