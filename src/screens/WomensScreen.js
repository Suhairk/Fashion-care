import React, { useContext, useEffect } from 'react'
import ProductList from '../components/ProductList'
import {useSelector , useDispatch} from 'react-redux'
import {getWomensCategories} from '../services/ProductList'
import {womenProducts} from '../redux/actions/ProductActions'
import {} from '../redux/actions/ProductActions'
import { Row, Col } from "react-bootstrap";
import {ProductContext} from '../constents/ProductContext'
import LoaderUI from '../components/LoaderUI'


function WomenScreen() {
  const { loading,setloading} = useContext(ProductContext)
    const womenProductAre = useSelector((state)=>state.womensCategory)
    //console.log(womensCategory)
     
    const dispatch = useDispatch()

    useEffect(()=>{
      setloading(true)
        getWomensCategories().then((res)=>{
            //console.log(res.data)
            dispatch(womenProducts(res.data))
            setloading(false)
        })
    },[dispatch,setloading])

  return (
    <div className='women-screen'>
        <h1 style={{color:"#585757", textAlign:"center", padding:"10px"}}>WOMENS COLLECTIONS</h1>
       {loading ? <LoaderUI/>:
    <div className='card-style'>
      <Row className='gy-3'>
      { womenProductAre &&
         womenProductAre.map((itr,id)=>{
           return (
            <Col  sm={12} md={6} lg={4} xl={3} className="">
             <ProductList key={id}  products = {itr}/>
            </Col>
           )
         })
       }
       </Row>
      </div>
    }
    </div>
  )
}

export default WomenScreen