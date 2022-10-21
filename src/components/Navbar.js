import "./styles/Navbar.css"
import React from 'react'
import img from '../assets/logo.png'
import { Link } from 'react-router-dom'
import {ReactComponent as Cart} from '../assets/cart.svg'


const Navbar = ({Carts}) => {
  return (
    <>
    
    <nav className="Navbar">
    <div className="logo"><Link to="/"><img src={img} alt="" /></Link>
    </div>
    {/* <div className="logo"><h1>h1</h1></div> */}
    <div className="buttons">
       <ul className="buttons">
        
         <li> <Link to="2"><Cart/>CART({Carts.length})</Link></li>

        </ul>
    </div>
    
    </nav>
 
    
    </>
  )
}

export default Navbar