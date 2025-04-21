import React, { useState } from 'react'
import { Box } from './Box'

export const Orders = () => {
  const [product , setProduct] = useState(products[0]);
  return (
    <div className='flex flex-col justify-center items-center '>
             <div className="flex flex-row  gap-10 justify-center h-60">
                   <img src={product.image} alt="mech keyboard" className="mt-10"/>
                   <div className="w-[40%]">
                          <h3 className="text-2xl py-10 border-b-2">
                                {product.description}
                          </h3>
                          <div>
                                <p>Color :<span className="font-semibold"> {product.color}</span></p>  
                                <div className="flex flex-row gap-x-4 pt-5">
                                  <button className="cursor-pointer" onClick={()=>{setProduct(products[0])}}>
                                       <Box image={"418Mv11ttqL._SS60_.jpg"} description={"2 options from INR 2,010.46"}/>  
                                  </button>
                                  <button className="cursor-pointer" onClick={()=>{setProduct(products[1])}}>
                                        <Box image={"41swpcELAKL._SS60_.jpg"} description={"4 options from INR 2,389.51"}/>
                                  </button>
                                  <button className="cursor-pointer" onClick={()=>{setProduct(products[2])}}>
                                        <Box image={"41IVTYpKDKL._SS60_.jpg"} description={"2 options from INR 2,010.46"}/>
                                  </button>   
                                </div>
                          </div>
                   </div>
             </div>
             
    </div>
  )
}



const products = [
  {   color : "black",
      image : "71DPK3G16OL._AC_SX466_.jpg",
      description : "Womier 60% Percent Keyboard,WK61 Mechanical RGB Wired Gaming Keyboard,Hot-Swappable Creamy Key Board with PBT Keycaps,Linear Red Switch for Windows/MAC (Black)"
  },
  {
       color : "blue",
       image : "71PB7gOSePL._AC_SX466_.jpg",
       description :  "Womier 60% Percent Keyboard, WK61 Mechanical RGB Wired Gaming Keyboard, Hot-Swappable Keyboard with Blue Sea PBT Keycaps for Windows PC Gamers - Linear Red Switch"
  },
  {
       color : "purple",
       image : "712170p3vXL._AC_SX466_.jpg",
       description : "Womier 60% Percent Keyboard,WK61 Mechanical RGB Wired Gaming Keyboard,Hot-Swappable Creamy Key Board with PBT Keycaps,Linear Red Switch for Windows/MAC (Purple)"
  },
  {

  }
]