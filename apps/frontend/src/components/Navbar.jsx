import { Moon } from 'lucide-react'
import { Sun } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate();
    return (
    <nav className="fixed bg-neutral-200 w-full">
              <div className="flex flex-row justify-between pl-15 w-5/6 ">
                  <div className="p-3 hover:underline" >
                          <a href="/" className='text-xl font-bold'>Food Critic</a>
                  </div>
                  <div className="flex flex-row justify-center p-2 gap-x-4">
                         <button className="font-semibold hover:underline text-xl px-4 py-2"
                             onClick={()=> navigate("/#about")}
                         >
                              About
                         </button>
                         <button className="rounded-lg text-xl px-4 bg-neutral-950 text-neutral-50" 
                            onClick={()=> navigate("/login")}
                         >
                              <span className='hover:underline'>Login</span>
                         </button>
                         <button className="rounded-lg text-xl px-4 bg-neutral-950 text-neutral-50"
                               onClick={()=> navigate("/register")}
                         >
                              <span className='hover:underline'>Register</span>
                         </button>
                  </div>
        </div>
    </nav>
  )
}
