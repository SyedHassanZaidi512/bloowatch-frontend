import React from 'react'
import { useState,useEffect } from 'react'
import b1 from '../assets/Board1.png'
import Products from './Products'
import "./styles/Boards.css"
import Text from './Text'
import Board from "../assets/Board1.png"
import Suite from "../assets/Swim.png"
import Suite2 from "../assets/womens.png"
const Boards = ({showDetail,AddtoCart1,num,setNum,Increment,Decrement}) => {
    // console.log("showdetailinboards",showDetail)
    
    const[img1,setImg1]=useState("")
 

    
  return (
    <>
    <ul className="body2">
        <li>
            <ul className="tunder">
                <ul className="boards">
                <li onClick={()=>setImg1(showDetail.image1)}><img src={showDetail.image1} alt=""/></li>
                <li onClick={()=>setImg1(showDetail.image2)}><img src={showDetail.image2} alt=""/></li>
                <li onClick={()=>setImg1(showDetail.image3)}><img src={showDetail.image3} alt=""/></li>
                <li onClick={()=>setImg1(showDetail.image4)}><img src={showDetail.image4} alt=""/></li>
              

                </ul>
                
                <ul className="board2">
                     <li><img src={img1!==""?img1:showDetail.image} alt=""/></li>
                 </ul>
        
                 <ul className="details">
                    <li className="heading">{showDetail.name}</li>
                    <li>
                        <ul className="rectangles">
                            <li className="rctangle1">
                                {showDetail.price}
                             </li>
                             <li className="rctangle2">
                                {showDetail.price}
                             </li>
                        
                         </ul>
                    </li>
        
                    <li className="lite">Causae iudicat vitu perata mea ei, cum posse im pedit molestie ne, atqui viris simi lique ei vel. Per te illud an imal, vix ea sint con sul a pella tur iris itegre.
                         
                    </li>
                    
                    <li>
                        <ul className="row3">
                            <li>{num?num:showDetail.quantity}</li>
                            <li className="row"> 
                                <li onClick={Increment}>&and;</li>
                                <li>&mdash;</li>
                                <li onClick={Decrement}>&or;</li>
                             </li>
                            <li type="" className="rctangle3" onClick={()=>AddtoCart1(showDetail.id)}>ADD TO CART</li>
        
                         </ul>
        
        
                     </li>
        
                    <li>
                        <ul className="tunderlist">
                         <li className="bold">SKU</li>
                         <li className="lite">:003</li>
                         
                         </ul>
                     </li> 
        
                     <li>
                        <ul className="tunderlist">
                         <li className="bold">CATEGORIES</li>
                         {/* <li className="lite">:{showDetail.category[0]},{showDetail.category[1]},{showDetail.category[2]}</li> */}
                         
                         </ul>
                     </li> 
                     
                     <li>
                        <ul className="tunderlist">
                         <li className="bold">TAGS</li>
                         <li className="lite">:board,surf,suriging</li>
                         </ul>
                     </li> 
        
        
        
                </ul>
            </ul>
        </li>
        <li>
            <ul className="textcomponent">  
              <Text/>
            </ul>
            </li>
            <li>
                <ul className="plist">
                 <li><Products img1={Board} text3="Sale" text="Add to Cart"text1="LIGITWAVE BOARD" category1="Equipment" category2= "Board" price1="$150.000" price2="$150.000"/></li>
                 <li><Products img1={Suite} text="Add to Cart" text1="Scuba Diving Wetsuite" text3="Sale" category1="Equipment" category2="Board" price1="$150.000" price2="$150.000"/></li>
                 <li><Products img1={Suite2} text="Add to Cart" text1="Women's Wetsuite Pro" category1="Equipment" category2="Scubadiving" text3=""  price1="$150.000" price2="$150.000" /></li>
               </ul>
            </li>
      

    </ul>


    </>
  )
}

export default Boards