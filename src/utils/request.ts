import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: '/api/v0/',
  timeout: 1000
})

request.interceptors.request.use(
  function(config) {
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    return Promise.reject(error)
  }
)

const get = (url: string, params: any, options: AxiosRequestConfig) =>
  request.get(url, { params: params, ...options })

const post = (url: string, params: any, options: AxiosRequestConfig) =>
  request.post(url, params, options)

const fetch = { get, post }
export default fetch
