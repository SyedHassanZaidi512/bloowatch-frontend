import React from 'react'
import "./styles/Footer.css"
import img1 from "../assets/Bitmap-3.png"
import img2 from  "../assets/Bitmap-1.png"
import img3 from  "../assets/Bitmap-2.png"
import img4 from  "../assets/Bitmap.png"
import img5 from  "../assets/Bitmap-4.png"

const Footer = () => {
  return (
    <footer className="Footer">
        <ul className="footer ">
            <li >ABOUT
              <li className="para">Bloowatch is specalised software for watrersports 
              schools(surfing,kitesurfing, sailing, and diivng) 
              and outdoor activity providers(skilling, climbing)

             </li>
           
             
            </li>
            
            <li className="flist">CONTACT
              
                <li>156-677-124-442-2887</li>
                <li>wave@bloowatch.com</li>
                <li>wave@bloowatch.com</li>
                

               
            </li>
            <li className="flist">USEFUL LINKS
              
                <li>About us</li>
                <li>History</li>
                <li>Contact us</li>
                

               
            </li>

            <li className="flist">INSTAGRAM
              <ul className="instagram">
              
                <li><img src={img1} alt=""/></li>
                <li><img src={img2} alt=""/></li>
                <li><img src={img3} alt=""/></li>
                <li><img src={img4} alt=""/></li>
                <li><img src={img5} alt=""/></li>
                
                </ul>
                

               
            </li>
          
          

         </ul>

    </footer>
  )
}

export default Footer