import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Products = ({id,text,text1,img1,category1,category2,category3,text3,price1,price2,AddtoCart,showDetails}) => {

 const [isShown, setisShown] = useState(false)
  return (
      <div className="Plist"  onMouseEnter={()=>setisShown(true)} onMouseLeave={()=>setisShown(false)}>
        <ul className="ovalandimg">
        {text3!=="" && <li className="Oval" >
             {text3}
           </li>}

           <Link to="1"><img className="image" src={img1} alt="img not found" onClick={showDetails}/></Link>
  
        </ul>
        <ul className="secondlist">
        {isShown===true && <li  onClick={AddtoCart} className="rectangle">{text}</li>}
        
        <li className="board-text">{text1}</li>
        <li className="board-text2">{category1},{category2},{category3}</li>
        <ul className="last-box">
        <li className="rectangle2">{price1}</li>
        <li className="price">{price2}</li></ul>
        
        </ul>
        
          
             

      </div>
  )
}

export default Products