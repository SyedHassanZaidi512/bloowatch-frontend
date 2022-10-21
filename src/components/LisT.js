import React from 'react'
import { useState,useEffect} from 'react'
import "./styles/List.css"
import Products from './Products'
import Search from './Search'


function LisT({setCarts,Carts,showDetails}) 
{
    const [Cart,setCart]=useState([])
    const [sCategory, setsCategory] = useState("")
    const [sEarch, setsEarch] = useState("")
    const [myId,setmyId]=useState("")
    const [clas1,setClas1]=useState(false)
    const [clas2,setClas2]=useState(false)
    const [clas3,setClas3]=useState(false)
    const [clas4,setClas4]=useState(false)
    const [clas5,setClas5]=useState(false)
    const [clas6,setClas6]=useState(false)
    const [clas7,setClas7]=useState(false)
    //SEARCH by name
    const handleOnchange=(event)=>
    {
         
         setsEarch(event.target.value)
         console.log(sEarch)
    
        
    }


    //SEARCH by category

    const handleOnClick=(event)=>
    {       
             console.log(event.target.outerText)
             setsCategory(event.target.outerText)
             event.target.outerText==="Boards"? setClas1(true):setClas1(false)
             event.target.outerText==="Canoening"? setClas2(true):setClas2(false)
             event.target.outerText==="Equipment"? setClas3(true):setClas3(false)
             event.target.outerText==="Padding"? setClas4(true):setClas4(false)
             event.target.outerText==="Rental"? setClas5(true):setClas5(false)
             event.target.outerText==="Scubadiving"? setClas6(true):setClas6(false)
             event.target.outerText==="Surfing"? setClas7(true):setClas7(false)

             console.log(clas2,"in list.js")
            

    }

    
    //this is to work searching  without page refreshing\

    useEffect(() => {
      
      setsCategory("")
    }, [sEarch])
    useEffect(() => {
      
        setsEarch("")
      }, [sCategory])
      
    //Adding to Cart
    const AddtoCart=async(id)=>
    {
        console.log(id,"is id")
        setmyId(id)

         const cartData= await fetchCarttoAdd(id)
         console.log("cartData",cartData)
         
         
        
       
        
          
         UpdateCart(cartData)
    }
    //get data to be added in cart
    const fetchCarttoAdd =async(id)=>
    {   console.log(id,"myId is")
        const res=await fetch(`http://localhost:5000/Plist/${id}`)
        const toAdd=await res.json()
        console.log("fetchCarttoAdd",toAdd)
        return toAdd

    }
    

    //sending data into cart list
    const UpdateCart=async(cartData)=>
     {   
       //console.log("newCart in updatecart",cartData)
       
        const res=await fetch (`http://localhost:5000/Cart`,{'method':'POST',headers:{'Content-type':'application/json',},body:JSON.stringify(cartData),})
        const data=await res.json()
        // console.log(data,"this is updated cart")
         setCart([...Cart,data])
         

    }
    // console.log(Cart,"Cart Array")
  
    const [Categories, setCategories]=useState(["All", "Boards", "Canoenig", "Equipment", "Paddling", "Rental", "Scubadiving", "Surfing"])
   
    const [Plist, setPlist] = useState([])
    useEffect(() => {
      
      const getProducts=async()=>
      {
        const ProductfromServer= await fetchlists()
        setPlist(ProductfromServer)
        // console.log(ProductfromServer)
      }
        getProducts()
    }, [])
    
  //getting data from server
    const fetchlists=async() =>
    {
      const res= await fetch("http://localhost:5000/Plist")
      const data=await res.json()
      
      return data
    }
//data of Cart list from server
    const fetchCart=async()=>
    {
        const res= await fetch("http://localhost:5000/Cart")
      const data=await res.json()
      
      return data
    }
   
    useEffect(() => {
      
      const getProducts=async()=>
      {
        const ProductfromServer= await fetchCart()
        setCart(ProductfromServer)
        // console.log(ProductfromServer)
      }
        getProducts()
    }, [])

    // console.log("cart length in list.js",Cart.length)
    setCarts(Cart)
   
 
  return (
    <>

         <ul className="List1">
             <li className="results">Showing 1-9 of 21 results
                 <ul className="Products">
                 {Plist.filter((list)=>{
                    if(sEarch ==="" && sCategory==="")
                    {   
                        // console.log("no search")
                         return list
                    }
                    //SEARCH by name
                    else if(list.name.toLocaleLowerCase().includes(sEarch.toLocaleLowerCase()) && sCategory==="")
                    {
                        // console.log("search by name")
                           return list
                    }
                    //SEARCH by category
                    else if(list.category.includes(sCategory) && sCategory!=="")
                    {
                        // console.log("search category")
                        // console.log(list.category.includes(sCategory),"foud data")
                             return list
                             
                    }
                   

                 }).map((list)=>(
                  <li>
                   {console.log("list",list)}
                    <Products 
                      data={list}
                      key={list.id} 
                      img1={list.image} 
                      text3={list.saleItem?"Sale":""} 
                      text="ADD TO CART" 
                      text1={list.name} 
                      category1={list.category[0]} 
                      category2={list.category[1]}  
                      price1={list.price}
                      price2={list.priceBeforeSale} 
                      handleOnchange={handleOnchange} 
                      AddtoCart={()=>AddtoCart(list.id)} 
                      showDetails={()=>showDetails(list.id)} 
                     />
                  </li>))}
                 </ul>
             </li>
             <li>Default Sorting
                 <ul className="Search">
                     <Search handleOnchange={handleOnchange} handleOnClick={handleOnClick} clas1={clas1} clas2={clas2} clas3={clas3} clas4={clas4} clas5={clas5} clas6={clas6} clas7={clas7}/>
                  </ul>
             </li>
         </ul>
    </>
  )
}

export default LisT