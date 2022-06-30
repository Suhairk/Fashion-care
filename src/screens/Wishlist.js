import React from 'react'
import { useSelector } from 'react-redux'
import WishlistComponent from '../components/WishlistComponent'
import '../components/compStyles/WishlistComponent.css'

function Wishlist() {
  const state = useSelector((state)=>state.WishlistItemReducer)
  //console.log("wishlist", state)
  
  return (
    <div className='wish-list-components'>
       <table className="table">
    <thead>
    <tr>
      <th scope="col">Sl.No</th>
      <th scope ="col">Image</th>
      <th scope="col">Item Name</th>
      <th scope="col">Stoke</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  </table>
      {/* <WishlistComponent products={state}/> */}
      {state && state.map((itr, id)=>{
        return (
          
          <WishlistComponent key={id} products = {itr}></WishlistComponent>
        ) 
      })}
        
    </div>
  )
}

export default Wishlist