import React from 'react'
import '../App.css';
import "./styles/Textbar.css"
const Textbar = ({text}) => {
  return (
    <div className="textbar">
       <div className="ptext"> <p>{text}</p></div>
        
    </div>
  )
}

export default Textbar