import React from 'react'
import { useState,Link } from 'react'
import Thunder from "../assets/Board1.png"
import star from "../assets/star1.svg"
import stars from "../assets/star.png"
import man from "../assets/man.png"

function Search({handleOnchange,handleOnClick,clas1,clas2,clas3,clas4,clas5,clas6,clas7}) {
  console.log(clas2,"clas2 in search")

  return (
    <>   
    <ul className="Search">
        
        <li>SEARCH
        <li><input className="form" type="text" placeholder="Search for a product" onChange={handleOnchange} /></li>
       
        </li>
        
        <li>PRICE<li><input className="form" type="range" placeholder="Search for a product"/></li>
        <li className="catogeries">PRICE:$80___$180</li>
        </li>
        
        <li>CATOGERIES
            <ul className="catogeries" >
              
                <li  value="Boards" className={clas1?"categeries1":"" } onClick={handleOnClick}  >Boards</li>
                <li  data-value="Canoening" className={clas2?"categeries1":"" } onClick={handleOnClick}>Canoening</li>
                <li  value="Equipment" className={clas3?"categeries1":"" } onClick={handleOnClick}>Equipment</li>
                <li   value="Padding" className={clas4?"categeries1":"" } onClick={handleOnClick}>Padding</li>
                <li value="Rental"  className={clas5?"categeries1":"" } onClick={handleOnClick}>Rental</li>
                <li  value="Scubadiving" className={clas6?"categeries1":"" } onClick={handleOnClick}>Scubadiving</li>
                <li value="Surfing" className={clas7?"categeries1":"" } onClick={handleOnClick}>Surfing</li>
            </ul>



        </li>
        <li>RELATED PRODUCTS </li>
        <ul className="thunderboard">
             <li className="rproduct"><img  src={Thunder} alt=""/></li>
            <li>
              <ul className="thunder">
                <li>THUNDER BOARD  </li>
                <ul className="thunderboard">
                <li><img src={star} alt=""/> </li>
                <li><img src={star} alt=""/> </li>
                <li><img src={star} alt=""/> </li>
                <li><img src={star} alt=""/> </li>
                <li><img src={stars} alt=""/> </li>

                  </ul>
              
              
              
              
              </ul>
              </li>               
      
        </ul>
        <ul className="thunderboard">
             <li className="rproduct"><img  src={Thunder} alt=""/></li>
            <li>
              <ul className="thunder">
                <li>SHORT SURFBOARD FOAM   </li>
                <ul className="thunderboard">
                <li><img src={star} alt=""/> </li>
                <li><img src={star} alt=""/> </li>
                <li><img src={star} alt=""/> </li>
                <li><img src={star} alt=""/> </li>
                <li><img src={stars} alt=""/> </li>

                  </ul>
              
              
              
              
              </ul>
              </li>               
      
        </ul>



        <ul className="thunderboard">
             <li className="rproduct"><img  src={Thunder} alt=""/></li>
            <li>
              <ul className="thunder">
                <li>MADMAX BOARD </li>
                <ul className="thunderboard">
                <li><img src={star} alt=""/> </li>
                <li><img src={star} alt=""/> </li>
                <li><img src={star} alt=""/> </li>
                <li><img src={star} alt=""/> </li>
                <li><img src={stars} alt=""/> </li>

                  </ul>
              
              
              
              
              </ul>
              </li>               
      
        </ul>


        <ul className="man">
             <li><img  src={man} alt=""/></li>
                       
      
        </ul>
        
    </ul>
    </>
  )
}

export default Search