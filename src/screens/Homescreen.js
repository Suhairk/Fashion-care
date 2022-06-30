import React, { useContext, useEffect } from 'react'
import CarousalProduct from '../components/CarousalProduct'
import '../screens/ScreenStyle/Homescreen.css'
import ProductList from '../components/ProductList'
import { Row, Col } from "react-bootstrap";
import {useSelector , useDispatch} from 'react-redux'
import {getProductList} from '../services/ProductList'
import {allProducts} from '../redux/actions/ProductActions'
import {ProductContext} from '../constents/ProductContext'
import LoaderUI from '../components/LoaderUI'


function Homescreen() {

  const { loading,setloading} = useContext(ProductContext)

  const dispatch = useDispatch()
  const state = useSelector((state)=>state.products)

  //console.log("states are", value)
 
  //console.log("value", state)

  useEffect(()=>{
      setloading(true)
      getProductList().then((res)=>{
      //for render all data
      dispatch(allProducts(res.data))
      setloading(false)
      
      })
  },[dispatch,setloading])

  // const filterProduct = (cat)=>{ 
  //   const updatedList = value.filter((x)=>x.category === cat);
  //   dispatch(allProducts(updatedList))  
  // }  

  //add wishlist
    return (
      <div className='home-container'>
      {loading? <LoaderUI/>: <CarousalProduct/>}
      <h1 style={{color:"#585757", textAlign:"center", padding:"10px"}}>TODAY'S DEALS</h1>

      <div className='card-style loader-ui-all'>
      {loading ? <LoaderUI/>:
      <Row className='gy-3 loader-all class'>
      { state &&
         state.map((itr,id)=>{
           return (
            <Col  sm={12} md={6} lg={4} xl={3} className="">
              <ProductList key={id} products = {itr} />
            </Col>
           )
         })
       }
       </Row>
       }
      </div>
      </div>
    
  )
}

export default Homescreen