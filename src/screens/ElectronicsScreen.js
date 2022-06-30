import React, { useContext, useEffect } from 'react'
import ProductList from '../components/ProductList'
import Spinners from '../components/Spinners'
import {useSelector , useDispatch} from 'react-redux'
import {getElectronicsCategories} from '../services/ProductList'
import {electronicsProducts} from '../redux/actions/ProductActions'
import {} from '../redux/actions/ProductActions'
import { Row, Col } from "react-bootstrap";
import {ProductContext} from '../constents/ProductContext'
import LoaderUI from '../components/LoaderUI'

function ElectronicsScreen() {
    const { loading,setloading} = useContext(ProductContext)
    const electronicsProductAre = useSelector((state)=>state.electronicsCategory)
    //console.log(womensCategory)
     
    const dispatch = useDispatch()

    useEffect(()=>{
        setloading(true)
        getElectronicsCategories().then((res)=>{
            //console.log(res.data)
            dispatch(electronicsProducts(res.data))
            setloading(false)
        })
          },[dispatch,setloading])

  return (
    <div className='women-screen'>
        <h1 style={{color:"#585757", textAlign:"center", padding:"10px"}}>ELECTRONICS</h1>
       {loading ? <LoaderUI/>:
    <div className='card-style'>
      <Row className='gy-3'>
      { electronicsProductAre &&
         electronicsProductAre.map((itr,id)=>{
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

export default ElectronicsScreen