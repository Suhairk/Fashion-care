import React, { useContext, useEffect } from 'react'
import ProductList from '../components/ProductList'
import {useSelector , useDispatch} from 'react-redux'
import {getMensCategories} from '../services/ProductList'
import {mensProducts} from '../redux/actions/ProductActions'
import { Row, Col } from "react-bootstrap";
import {ProductContext} from '../constents/ProductContext'
import LoaderUI from '../components/LoaderUI'

function MensScreen() {
    const { loading,setloading} = useContext(ProductContext)
    const mensProductAre = useSelector((state)=>state.mensCategory)
    //console.log(mensProductAre)
     
    const dispatch = useDispatch()

    useEffect(()=>{
      setloading(true)
        getMensCategories().then((res)=>{
            //console.log(res.data)
            dispatch(mensProducts(res.data))
            setloading(false)
        })
    },[dispatch,setloading])

  return (
    <div className='mens-screen'>
          <h1 style={{color:"#585757", textAlign:"center", padding:"10px"}}>MENS COLLECTIONS</h1>
       {loading ? <LoaderUI/>:
    <div className='card-style'>
      <Row className='gy-3'>
      { mensProductAre &&
         mensProductAre.map((itr,id)=>{
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

export default MensScreen