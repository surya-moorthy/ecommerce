import { Moon, Search } from 'lucide-react'
import { Sun } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate();
    return (
    <nav className="fixed bg-neutral-200 w-full h-20 ">
              <div className="flex flex-row justify-between items-center pl-15 w-5/6 py-3">
                  <div className="p-3 hover:underline" >
                          <a href="/" className='text-xl font-bold'>Food Critic</a>
                  </div>
                  <div className="w-1/2 flex flex-row gap-1 justify-center items-center">
                      <Search
                           size={26}
                           className="text-black "
                        />
                        <input 
                        type="text"
                        placeholder='search...'
                        name="search"
                        className="bg-gray-300 h-12 w-full border-2 text-center" 
                        />
                    
                  </div>
                  <div className="flex flex-row justify-center p-2 gap-x-4 px-4 py-2">
                         <button className="font-semibold hover:underline text-xl py-1"
                             onClick={()=> navigate("/#about")}
                         >
                              About
                         </button>
                         <button className="rounded-md text-xl px-4 bg-neutral-950 text-neutral-50 " 
                            onClick={()=> navigate("/login")}
                         >
                              <span className='hover:underline'>Login</span>
                         </button>
                         <button className="rounded-md  text-xl px-4 bg-neutral-950 text-neutral-50"
                               onClick={()=> navigate("/register")}
                         >
                              <span className='hover:underline'>Register</span>
                         </button>
                  </div>
        </div>
    </nav>
  )
}
