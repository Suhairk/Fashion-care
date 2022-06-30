import React, {  useContext, useEffect } from 'react'
import {Button, Card} from 'react-bootstrap'
import '../components/compStyles/ProductList.css'
import {Rating} from 'react-simple-star-rating'
import { Link } from 'react-router-dom'
import {ProductContext} from '../constents/ProductContext'
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
import {addWishlist, deletewishlist} from '../redux/actions/ProductActions'
import { useDispatch } from 'react-redux'
function ProductList({products}) {


    const {rating, setRating,adwishlist,setadwishlist} = useContext(ProductContext)
    const dispatch = useDispatch()
    useEffect(()=>{
      //console.log(ratings*10)
      setRating(products?.rating?.rate*10)
    },[products?.rating?.rate,setRating])


  const addWishlistProduct = (payload)=>{
      dispatch(addWishlist(payload))
      setadwishlist(!adwishlist)
  }
  const deleteWishlistProduct = (payload)=>{
    dispatch(deletewishlist(payload))
    setadwishlist(!adwishlist)
  }

 // console.log(adwishlist)
  //console.log(products)
  return (
    <div className='product-list h-100'>  
        <Card className='pb-2 h-100 ' style={{ display:"flex"}}>
          <Link  to= {`/details/${products?.id}`}>
          <Card.Img variant="top" src={products?.image} className="embed-responsive-item mt-2"/>
          </Link>
        <Card.Body>
        <div className='wishlist-body' >
        <Card.Title style = {{textAlign:"justify"}}>
          {products?.title.substring(0,20)}
        </Card.Title>
        
      {adwishlist ? 
        <Button variant ="outline-light" onClick={()=>
          {
            setadwishlist(false);  console.log(products?.id,"removed")
          }
         
          }>
          <AiFillHeart size={22} style={{color:"red", marginRight:"auto", cursor:"pointer"}} />
          </Button>
        :
        <Button variant ="outline-light"  onClick={()=>
          {
            setadwishlist(true);console.log(products?.id,"added")
          }
          }>
         <AiOutlineHeart size={22} style={{color:"red", marginRight:"auto", cursor:"pointer"}} />
        </Button>
        }
     
        </div>

        <Card.Subtitle style={{color:"blue"}} className="mb-1">{products?.category}</Card.Subtitle>
        
        <div className='rating mb-1'>
          <Rating ratingValue={rating}
          initialValue = {0}
          size={20}
          readonly={true}
          allowHover={true}
          ></Rating>
          <Card.Subtitle style={{ fontSize:"15px",marginTop:"15px"}} className="mx-2 ">
            {products?.rating?.rate&& products?.rating?.rate}({products?.rating?.vote})</Card.Subtitle> 
          </div>

        <Card.Text>
          {""}
        </Card.Text>
        
        <div className='footer-card'>
          <Card.Subtitle style={{ fontSize:"5px", color:"black", marginRight:"15px"}}><h2>$.{products?.price.toFixed(2)} 
          <del className='offer'>$.{(products?.price*1.30).toFixed(2)}</del></h2></Card.Subtitle>
          <div className='footer-buttons'>
            <Link to= {`/details/${products?.id}`}>
            <Button variant="outline-success" className='mt-2 mx-auto'>Buy Now</Button>
            </Link>
            <Link to ="/wishlist">
              <Button variant="outline-info" className='mt-2 mx-3' onClick={()=>addWishlistProduct(products)}>
                Add to Wishlist
            </Button>
              </Link>
              
            </div>
          
          
        </div>
        </Card.Body>
    </Card>

    </div>
  
  )
}

export default ProductList



// {adwishlist ?
//   <Button variant ="outline-dark"  onClick={()=>
//     {deleteWishlistProduct(products)}}>
//    <AiFillHeart size={22} style={{color:"red", marginRight:"auto", cursor:"pointer"}} />
//     </Button>
//   :
//   <Button variant ="outline-dark"  onClick={()=>
//     {addWishlistProduct(products)}}>
//    <AiOutlineHeart size={22} style={{color:"red", marginRight:"auto", cursor:"pointer"}} />
//   </Button>
//   }