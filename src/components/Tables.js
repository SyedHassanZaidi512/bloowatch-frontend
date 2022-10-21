import React from 'react'
import { useState,useEffect,Link } from 'react'
import "./styles/Table.css"

import Table1 from './Table1'
function Tables({Carts}) {
    console.log(Carts,"carts in tables")
  return (
    <>
        <ul className="Table1">
    
        <li> 
                <ul className="row1 bold ab">
                   <li></li>
                   <li>PRODUCT</li> 
                   <li>PRICE</li> 
                   <li>QUANTITY</li> 
                   <li>SUBTOTAL</li> 
                </ul>
             </li>
             
               {Carts.map((list)=>(<Table1 key={list.id} img1={list.image}   price1={list.price}name={list.name}   />))}
            
    
            <li className="row2 ab">  
                           </li>
             <li className="btn">
            
            <li className="rctangle">APPLY COUPON</li>
            <li className="rctangled">UPDATE CART</li>   
             
            </li>   
 
 
             
        </ul>
    </>
  )
}

export default Tables