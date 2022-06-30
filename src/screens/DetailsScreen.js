import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getProductList} from '../services/ProductList'
import {detailsProducts} from '../redux/actions/ProductActions'
import { useDispatch, useSelector } from 'react-redux'
import ProuctDetails from '../components/ProuctDetails'
import {ProductContext} from '../constents/ProductContext'
import LoaderUI from '../components/LoaderUI'
function DetailsScreen() {
  const {loading,setloading} = useContext(ProductContext) 
  const {userId} = useParams()  // we get userId so fetch data matching with userid
  //console.log(userId)
  const productDetailsAre = useSelector((state)=>state.detailsProduct)
  //console.log(productDetailsAre)
  //console.log(typeof(productDetailsAre))
  //console.log(productDetailsAre?.rating?.rate)
 
  const dispatch = useDispatch()
  useEffect(()=>{
      getProductList().then((res)=>{
        setloading(true)
        const sameProduct = res.data.find((itr)=>itr.id === parseInt(userId));
        //console.log(sameProduct)
        dispatch(detailsProducts(sameProduct))
        setloading(false)
      })
  },[dispatch,userId,setloading])
// here is no array so no need map function.
  return (
    <div className='details-page'>
        {loading ? <LoaderUI/> : 
          <ProuctDetails
          products = {productDetailsAre} key = {productDetailsAre.toString()}
          />
  }
    </div>
  )
}

export default DetailsScreen