import React,{} from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../components/compStyles/WishlistComponent.css'
import { AiOutlineClose } from "react-icons/ai";


function WishlistComponent({products}) {
  const state = useSelector((state)=>state.WishlistItemReducer)
  
  console.log(state)
    var Slnum = []
    for(let num = 0 ; num < state.length ; num++){
      
    }
    
  
  
  //console.log("in wishlistcomppinens",products)
  return (
    <div className='wish-list-components'>
     <table className="table table-hover">
    <tbody>
    <tr>
    <th scope="row">{Slnum[1]}</th>
      <td><img src={products?.image} alt="fashioncore" className='img-size-wishlits'/></td>
      <td><p className='title-wishlist'>{products?.title.substring(0,20)}</p></td>
      <td>Yes</td>
      {/* <td>{products?.qty}</td> */}
      <td>
        <div className='table-button'>
          <Link to ="">
          <Button variant="outline-success" className=' mt-2 '>Buy Now</Button>
          </Link>
          <AiOutlineClose size={30} style= {{
            marginTop:"10px",
            color:"black",
           marginLeft:"15px",
           cursor:"pointer"
          }}/>
        </div>
      </td>
    </tr>
  </tbody>
</table>
      
      </div>

  )
}

export default WishlistComponent