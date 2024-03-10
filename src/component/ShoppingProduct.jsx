import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, fetchProduct } from '../reducer/ShopReducer'
import { useNavigate } from 'react-router-dom'

const ShoppingProduct = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [addedItems, setAddedItems] = useState([]);
  const product=useSelector((state)=>state.shopRedcuer.shopData)
  const cart=useSelector((state)=>state.shopRedcuer.cart)

  useEffect(()=>{
    dispatch(fetchProduct())
  },[dispatch])

  const handleAddToCart = (item) => {
    dispatch(addtoCart(item));
    setAddedItems([...addedItems, item.id]);
  };

  return (
    <div>
        <div className='headers'>
          <button className='cart-btn' onClick={()=>navigate("/cart")}>{`Cart${" "}(${cart.length})`}</button>
        </div>
        {
          product?.map((item)=>{
            return (
              <div className='product-item' key={item.id}>
                <img style={{height:"150px", width:"150px",marginBottom:"-2px"}} src={item.image} alt="" />
                <h4>{item.title}</h4>
                <h4>$ {item.price}</h4>
                <div className='btn-group'>
                  <button className='addcart-btn' onClick={()=>handleAddToCart(item)}>{addedItems.includes(item.id) ? "Great Choice": "Add to Cart"}</button>
                  <button className='addcart-btn'>Buy Now</button>
                </div>
              </div>
            )
          })
        }
    </div>
  )
}

export default ShoppingProduct

// //
// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addtoCart, fetchProduct } from '../reducer/ShopReducer'
// import { useNavigate } from 'react-router-dom'

// const ShoppingProduct = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const product = useSelector((state) => state.shopRedcuer.shopData);
//   const [addedItems, setAddedItems] = useState([]);

//   useEffect(() => {
//     dispatch(fetchProduct());
//   }, [dispatch]);

//   const handleAddToCart = (item) => {
//     dispatch(addtoCart(item));
//     setAddedItems([...addedItems, item.id]);
//   };

//   return (
//     <div>
//       <button className='cart-btn' onClick={() => navigate("/cart")}>Cart</button>
//       <h3 className='name-shop'>Shopify</h3>
//       {
//         product?.map((item) => {
//           return (
//             <div className='product-item' key={item.id}>
//               <img style={{ height: "150px", width: "150px" }} src={item.image} alt="" />
//               <h4>{item.title}</h4>
//               <h4>$ {item.price}</h4>
//               <button className='addcart-btn' onClick={() => handleAddToCart(item)}>
//                 {addedItems.includes(item.id) ? "Added" : "Add to Cart"}
//               </button>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default ShoppingProduct;

//