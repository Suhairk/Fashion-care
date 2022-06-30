import {BASE_URL} from '../UTILS/URL'

const axios = require('axios').default


const BASE_PRODUCT_URL = axios.create({
    baseURL:BASE_URL
})

export {BASE_PRODUCT_URL}