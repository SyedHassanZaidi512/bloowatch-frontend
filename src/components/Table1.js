import React from 'react'
import "./styles/Table.css"
import { Link } from 'react-router-dom'
function Table1({Carts,name,img1,price1,DeleteTask,showDetail,num,myId,setNum,quantity,Increment,Decrement,ToUpdate}) {
let sum=0;
  // console.log(name,"Carts in table 1")
// console.log("num in table1",num)
  // const Increment=()=>
  // {
  //     setNum1(num1+1)
  //     console.log(num1)
  
  // }
  // const Decrement =()=>
  // {
  //     if(num1!==1)
  //     {
  //         setNum1(num1-1)
          
  //     }
      
  // }
  return (
      
    <>  
    
         <ul className="Table1" >
             
              <li>  <ul className="row1 bold ab">
                   <li></li>
                   <li>PRODUCT</li> 
                   <li>PRICE</li> 
                   <li>QUANTITY</li> 
                   <li>SUBTOTAL</li> 
                </ul>
                </li>
             
             
                 {Carts.map((cart)=>(<li className="row2 ab">
                   <Link to=""><li onClick={()=>DeleteTask(cart.id)}>&#10005;</li></Link>
                   <li>
                       <ul className="el">
                       <li className="small"><img src={cart.image} alt=""/></li>
                           <li>{cart.name }</li>
                          
                         </ul>
                     </li> 
                   <li>{cart.price }</li> 
                   <li>
                       
                        
                           <li className="c3 bold">
                             {cart.quantity} 
                                {console.quantity}
                                <li className="row bold">
                                   <li onClick={()=>Increment(cart.id) }>&and;</li>
                                   <li>&#9866;</li>
                                  <li onClick={()=>Decrement(cart.id)}>&or;</li>
                                </li>  
                            </li>
        
                        
                 </li> 
                    
                 <li>{cart.price* cart.quantity }</li> 
                
               </li>))}

               <ul className="Table2">
 
                 <li className="t2text"><h2>CART TOTAL</h2></li>
                 
                 <table className="table2">
                       
                 <tr className="ab2">
                   
                   <th>SUBTOTAL</th>
                   {Carts.map((cart)=>{sum += cart.price* cart.quantity })}
                   <td>{sum}</td>
                 
                 </tr>
                <br/>
                   
 
                 <tr  >
                   <th rowSpan="2">SHOPPING</th>  
                   <td>Enter your address to view shipping options.</td> 
                   
                 </tr>  
                 <tr className="ab2">
                 <td className="bold ">Calculate Shipping</td>
                 </tr>
                 <br/>
                 
                 <tr className="">
                   <th>TOTAL</th>
                   <td>{sum }</td>
                 </tr>
                      
                                
                  </table>
 
                  <li className="box">PROCEED TO CHECKOUT</li>
 
             </ul>
     
              
             
          
        </ul>
     
          
        
    </>
         
     
  )
}

export default Table1