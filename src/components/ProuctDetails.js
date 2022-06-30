import React, {useContext, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import '../components/compStyles/ProuctDetails.css'
import {ProductContext} from '../constents/ProductContext'
import {} from '../redux/actions/ProductActions'

function ProuctDetails({
    products
}) 
    {
    const {rating, setRating} = useContext(ProductContext)  //context
    useEffect(()=>{
      //console.log(ratings*10)
      setRating(products?.rating?.rate*10)
    },[setRating,products?.rating?.rate])
    return (
    <div className='product-details-page'>
  
    <div className="container">
    <div className="card">
        <div className="card-body">
                {/* <h3 className="card-title">{title}</h3>
                <h6 className="card-subtitle">{category}</h6> */}
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-6">
                    <div className="white-box text-center">
                        <img src= {products?.image} className="img-responsive img-size" alt="imagefile"/>
                    </div>
                </div>
    
                <div className="col-lg-7 col-md-7 col-sm-6">
                <h3 className="card-title">{products?.title}</h3>
                <h6 className="card-subtitle">{products?.category}</h6>
                    <h4 className="box-title mt-5">Product description</h4>
                    <p>{products?.description}</p>
                    <div className='rating mb-2'>
                <Rating ratingValue={rating}
                initialValue = {0}
                size={20}
                readonly={true}
                fillColorArray={["#F71818","#F55A12","#EEB40D","#A8E914","#13E919"]}
                allowHover={true}
                ></Rating>
                <Card.Subtitle style={{ fontSize:"15px"}} className="mx-2 ">
                    {products?.rating?.rate && products?.rating?.rate}({products?.rating?.vote})</Card.Subtitle> 
                </div>
                    <h2 className="mt-5">
                        ${products?.price}<small className="text-success"></small>
                        <del className='offer'>$.{(products?.price*1.30).toFixed(2)}</del>
                    </h2>
                    <div className='footer-buttons'>
                    <Link to= {`/cart/${products?.id}`}>
                    <Button variant="outline-success" className='mt-2 mx-auto'>Add to cart</Button>
                    </Link>
                    <Link to ="">
                    <Button variant="outline-info" className='mt-2 mx-3'>Add to Wishlist</Button>
                    </Link>
                     </div>
                    <Button variant="primary" className='mt-2' style={{width:"255px"}}>Buy Now</Button>
                </div>
            </div>
        </div>
    </div>
</div>
    
</div>
  )
}

export default ProuctDetails