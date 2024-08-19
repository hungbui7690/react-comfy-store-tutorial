/*
  Axios Custom Instance
  - Ecommerce API: https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi

  1. create utils/index.js
    -> setup custom axios instance
    -> figure out the base url


*/

import axios from 'axios'

const productionUrl = 'https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
  baseURL: productionUrl,
})
