import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeToCart } from '../reducer/ShopReducer'

const Cart = () => {
    const cart=useSelector((state)=>state.shopRedcuer.cart)
    const [totalPrice,setTotalPrice]=useState(0)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        let sum=0
        for(let i of cart){
            sum+=i.price
        }
        setTotalPrice(sum.toFixed(2))
    },[cart])

  return (
    <div>
        <button className='home-btn' onClick={()=>navigate("/shop")}>Home</button>
        {cart.length>0?(<>total:{totalPrice}</>):""}
        <h3 className='name-shop'>Cart</h3>
        {
            cart.map((item,index)=>{
                return (
                    <div className='cart-Item' key={item.id}>
                        <img style={{height:"150px", width:"150px"}} src={item.image} alt="" />
                        <h4>{item.title}</h4>
                        <h4>{item.price}</h4>
                        <button className='remove-btn' onClick={()=>dispatch(removeToCart(item.id))}>X</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Cart