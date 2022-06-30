
import {BASE_PRODUCT_URL} from '../services/BASIC_URL'
import {END_POINTS} from '../UTILS/URL'

const getProductList = async () => {
        try {
               const data =  await BASE_PRODUCT_URL.get(END_POINTS.PRODUCT_LIST)
               return data
        } catch (error) {
                return error
        }
}
        
const getMensCategories = async ()=>{
        try {
                const data = await BASE_PRODUCT_URL.get(END_POINTS.MENS_CATEGORY)
                return data
        } catch (error) {
                return error
        }
}

const getWomensCategories = async ()=>{
        try {
                const data = await BASE_PRODUCT_URL.get(END_POINTS.WOMENS_CATEGORY)
                return data
        } catch (error) {
                return error
        }
}
const getJeweleryCategories = async ()=>{
        try {
                const data = await BASE_PRODUCT_URL.get(END_POINTS.JEWELERY)
                return data
        } catch (error) {
                return error
        }
}

const getElectronicsCategories = async ()=>{
        try {
                const data = await BASE_PRODUCT_URL.get(END_POINTS.ELECTRONICS)
                return data
        } catch (error) {
                return error
        }
}


export {getProductList,getMensCategories,getWomensCategories,getJeweleryCategories,getElectronicsCategories}