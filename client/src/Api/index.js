import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' })
// const API = axios.create({ baseURL: 'https://e-pharmacy-by-triggermindscape.herokuapp.com' })

API.interceptors.request.use(req => {
  const token = JSON.parse(localStorage.getItem('profile'))?.token;
  if (token) {
    req.headers.Authorization = `bearer ${token}`
  }
  return req
})

//auth
export const createUserApi = formData => API.post(`/auth/signup`, formData)
export const loginUserApi = formData => API.post(`/auth/login`, formData)

//vendor auth
export const createVendorApi = formData => API.post(`/vendor/auth/signup`, formData)
export const loginVendorApi = formData => API.post(`/vendor/auth/login`, formData)

//vendor auth
export const getAllShopApi = () => API.get(`/shop/get/all`)
export const getSingleShopApi = vendorId => API.get(`/shop/get/${vendorId}`)

