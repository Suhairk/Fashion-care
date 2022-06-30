
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

const allProducts = (payload)=>{
    return{
            type:SETPRODUCTLIST,
            payload:payload
    }
}

const mensProducts =(payload)=>{
    return{
        type:MENSPRODUCTSCATEGORIES,
        payload:payload
    }
}
const womenProducts =(payload)=>{
    return{
        type:WOMENSPRODUCTSCATEGORIES,
        payload:payload
    }
}
const jewelerProducts =(payload)=>{
    return{
        type:JWELERYPRODUCTSCATEGORIES,
        payload:payload
    }
}
const electronicsProducts =(payload)=>{
    return{
        type:ELECTRONICSPRODUCTSCATEGORIES,
        payload:payload
    }
}
const detailsProducts =(payload)=>{
    return{
        type:DETAILSPRODUCTS,
        payload:payload
    }
}
const updatedProducts =(payload)=>{
    return{
        type:UPDATEDPRODUCTS,
        payload:payload
    }
}

const addWishlist = (payload)=>{
    return{
        type:ADDITEWISHLIST,
        payload:payload
    }
}
const deletewishlist = (payload)=>{
    return{
        type:DELETEITEMWISHLIST,
        payload:payload
    }
}

export{allProducts,
    mensProducts,
    womenProducts,
    jewelerProducts,
    electronicsProducts,
    detailsProducts,
    updatedProducts,
    addWishlist,
    deletewishlist
}