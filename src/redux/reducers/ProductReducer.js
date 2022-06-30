
import {SETPRODUCTLIST,
        MENSPRODUCTSCATEGORIES,
        WOMENSPRODUCTSCATEGORIES,
        JWELERYPRODUCTSCATEGORIES,
        ELECTRONICSPRODUCTSCATEGORIES,
        DETAILSPRODUCTS,
        UPDATEDPRODUCTS,
        ADDITEWISHLIST,
        DELETEITEMWISHLIST
} from  '../../constents/ProductConstants'

import { combineReducers } from 'redux'


const ProductReducer = (state = [] , action)=>{
        switch (action.type) {
            case SETPRODUCTLIST:
                return action.payload
                    // ...state,
                    // products:action.payload
            default:
                return state
        }
}

const MensCategoriesReducer = (state = [], action)=>{
    switch (action.type) {
        case MENSPRODUCTSCATEGORIES:
            return action.payload
                // ...state,
        default:
            return state
    }
}
const WomensCategoriesReducer = (state = [], action)=>{
    switch (action.type) {
        case WOMENSPRODUCTSCATEGORIES:
            return action.payload
                // ...state,
        default:
            return state
    }
}
const JweleryCategoriesReducer = (state = [], action)=>{
    switch (action.type) {
        case JWELERYPRODUCTSCATEGORIES:
            return action.payload
                // ...state,
        default:
            return state
    }
}
const ElectronicsCategoriesReducer = (state = [], action)=>{
    switch (action.type) {
        case ELECTRONICSPRODUCTSCATEGORIES:
            return action.payload
                // ...state,
        default:
            return state
    }
}
const DetailsProductReducer = (state = [], action)=>{
    switch (action.type) {
        case DETAILSPRODUCTS:
            return action.payload
                // ...state,
        default:
            return state
    }
}

const UpdatedProductReducer = (state = [], action)=>{
    switch (action.type) {
        case UPDATEDPRODUCTS:
            return action.payload
                // ...state,
        default:
            return state
    }
}

const WishlistItemReducer = (state = [], action)=>{
    const product = action.payload
    switch (action.type) {
        case ADDITEWISHLIST:
            //chek existence
            const exist = state.find((itr)=>itr.id === product.id)
            if(exist){
                return state.map((itr)=>itr.id === product.id ? {...itr , qty: itr.qty + 1}: itr)
            }else{
                const product = action.payload
                return [
                    ...state , {
                        ...product,
                        qty:1
                    }
                ]
            }  
            case DELETEITEMWISHLIST:
            //chek existence
            const exist1 = state.find((itr)=>itr.id === product.id)
            if(exist1.qty === 1){
            return state.filter((itr)=>itr.id !==exist1.id)
                
            }else{
                return state.map((itr)=>itr.id === product.id ? {...itr , qty: itr.qty - 1}: itr)
            }  
        default:
           return state
    }
}


const allProductReducer = combineReducers({
    products:ProductReducer,
    mensCategory:MensCategoriesReducer,
    womensCategory:WomensCategoriesReducer,
    jweleryCategory:JweleryCategoriesReducer,
    electronicsCategory:ElectronicsCategoriesReducer,
    detailsProduct:DetailsProductReducer,
    UpdatedProductReducer:UpdatedProductReducer,
    WishlistItemReducer:WishlistItemReducer

})

export {allProductReducer}