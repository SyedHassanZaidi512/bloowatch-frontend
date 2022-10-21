import './App.css';

import Navbar from './components/Navbar';
import Textbar from './components/Textbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LisT from './components/LisT';
import Footer from './components/Footer';
import Boards from './components/Boards';
import Text  from './components/Text';
import Tables from './components/Tables';
import Table1 from './components/Table1';
import { useState,useEffect } from 'react'



function App() 
{
  const[num, setNum] = useState(1)
  const [myId,setMyid]=useState()
  const [Carts,setCarts]=useState("")
  const [showDetail,setshowDetail]=useState([])
  const[quantity1,setquantity1]=useState()
  const[ToUpdate,setToUpdate]=useState('')
 ////////////////////////////////////////Delete task from Table1 (Cart)/////////////////////////////////////////////////////
  const DeleteTask=async(id)=>
{    
    await fetch(`http://localhost:5000/Cart/${id}`,{method:'DELETE'})

    setCarts(Carts.filter((cart)=>cart.id !==id))
}

///////////////////////////////////Showing Details on Board.js///////////////////////////////////////////////////////////////
const showDetails=async(id)=>
{
    // console.log(id,"id22")
    const showData = await fetchData(id)
    
    // console.log("showingdata",showData)
    setshowDetail(showData)
    
}
//////////////////////////////////////fetching data to bo shown on Boards.js page2 link "1"///////////////////////

const fetchData =async(id)=>
    {   
      // console.log(id,"myId is")
        const res=await fetch(`http://localhost:5000/Plist/${id}`)
        const toAdd=await res.json()
        // console.log("fetchCarttoAdd",toAdd)
        return toAdd

    }
/////////////////////////////////////Icrement And Decrement on Board.js/////////////////////////////////////////////////////
    const Increment1=()=>
  {
    // console.log("get id ",id)
    
    setNum(num+1)
    console.log(num,"in increment")
    

    
  }
  const Decrement1 =()=>
  {
      // console.log("get id ",id)
      if(num!==1)
      { 
          setNum(num-1)
          
         
      }
      
  }

  /////////////////////////////////////////////////////////adding the task to server /////////////////////////////////////////////////////////////
   const AddtoCart1=(id)=>
   {

      setMyid(id)
      if(num===1)
      {
      UpdateCart(showDetail)
      
      }
      else if(num>1){
        console.log("num is changed",num)
        setQuantity(id)
      }
      
     
   }
     //     /////////////////// /////////////////////////////  set quantity1 from Board.js   ////////////////////////////////////////////////////////////////////////

  const setQuantity=async (id)=>
  {  
    
    const  udpTask= {...showDetail,quantity:num}
  
    
    const res=await fetch (`http://localhost:5000/Cart/`,{'method':'POST',headers:{'Content-type':'application/json',},body:JSON.stringify(udpTask),})
    const data=await res.json()
    setCarts([...Carts,data])
   
    //  console.log("quantity",Carts)
    
  }
   
   /////////////////////////////////Update Cart for Adding New Task with quantity //////////////////////////////////////////////////////
   const UpdateCart=async()=>
   {   
     //console.log("newCart in updatecart",cartData)
     
      const res=await fetch (`http://localhost:5000/Cart`,{'method':'POST',headers:{'Content-type':'application/json',},body:JSON.stringify(showDetail),})
      const data=await res.json()
      // console.log(data,"this is updated cart")
       setCarts([...Carts,data])
    
      console.log(quantity1,"here")
      // console.log("changed num",num)
       
  }

//////////////////////////// increment decrement  quantity  on Table1.js //////////////////////////////////////////////////////////////\




  const Increment=(id)=>
  {
    
    setIncrement(id)
    
  }
  const Decrement =(id)=>
  {
      // console.log("get id ",id
         
          setDecrement(id)
      
      
  }
  // ///////////////////////////////////////////here we fetch data by id of product in Table1.js /////////////////////////         /////
  const fetchForQuantity =async(id)=>
    {   
      // console.log(id,"myId is")
        const res=await fetch(`http://localhost:5000/Cart/${id}`)
        const toSet=await res.json()
        // console.log("To set",toSet)
        setToUpdate(toSet)
        return toSet

    }
    //////////////////////////////////////////////////update quantity value from Table1.js ///////////////////////////////////        /////////
    const setIncrement=async (id)=>
    {  
      const toUpdate=await fetchForQuantity(id)
      // console.log(toUpdate,"ToUpdate State")
      console.log(num,"num in toUpdate")
      const  udpTask= {...toUpdate,quantity:toUpdate.quantity+1}
      console.log(udpTask,"quantity here")
      
      const res=await fetch (`http://localhost:5000/Cart/${id}`,{'method':'PUT',headers:{'Content-type':'application/json',},body:JSON.stringify(udpTask),})
      const data=await res.json()
      // console.log("data",data)
      // setCarts([...Carts,data])
      setCarts(Carts.map((cart)=>cart.id===id?{...cart,quantity:data.quantity}:cart))
     
      //  console.log("quantity",Carts)
      
    }

    const setDecrement=async (id)=>
    {  
      const toUpdate=await fetchForQuantity(id)
      // console.log(toUpdate,"ToUpdate State")
      console.log(num,"num in toUpdate")
      const  udpTask= {...toUpdate,quantity:toUpdate.quantity>2?toUpdate.quantity-1:toUpdate.quantity}
      console.log(udpTask,"quantity here")
      
      const res=await fetch (`http://localhost:5000/Cart/${id}`,{'method':'PUT',headers:{'Content-type':'application/json',},body:JSON.stringify(udpTask),})
      const data=await res.json()
      // console.log("data",data)
      // setCarts([...Carts,data])
      setCarts(Carts.map((cart)=>cart.id===id?{...cart,quantity:data.quantity}:cart))
     
      //  console.log("quantity",Carts)
      
    }




   

  return (
    <>
    
    <Router>
       <Navbar Carts={Carts} />
       <Routes>
       {/* {console.log(Carts,"Carts data")} */}

      
      
      <Route path="/" element={
      
      <>
       <header className="App-header ">
        
        <Textbar text="SURFING"/>
      </header>
      <p><LisT Carts={Carts} setCarts={setCarts} showDetails={showDetails} /></p>
     
      {/* {console.log(Carts,"cart in App.js")} */}
       
      
       
       </>
      
    
      }/>
      <Route path="1" element={
        <>
       <header className="App-header ">
       {/* {console.log(Carts,"cart in App.js page1")} */}
       <Textbar text={showDetail.name?showDetail.name:"Text"}/>
       {/* {console.log("showdetil near text bar",showDetail)} */}
    
     </header>
      
       <Boards showDetails={showDetails} showDetail={showDetail}  Increment={Increment1} Decrement={Decrement1} AddtoCart1={AddtoCart1} num={num} setNum={setNum}/>
        {/* {console.log(num)} */}
    
    
    
      </>
      }/> 
       <Route path="2" element={
        <>
       <header className="App-header ">
        
       <Textbar text="Carts"/>
     </header>
     {/* {console.log(Carts,"cart  in App.js page2")}
     {console.log(Carts.length,"cart name in App.js page2")} */}
          
        
       <Table1 Carts={Carts} DeleteTask={DeleteTask} showDetail={showDetail} num={num} myId={myId} quantity1={quantity1} Increment={Increment} Decrement={Decrement} ToUpdate={ToUpdate}/>       
       
    
    
    
      </>
      }/> 
      </Routes>
      <Footer/>
      </Router> 
      
    </>
    
  );
}

export default App;
