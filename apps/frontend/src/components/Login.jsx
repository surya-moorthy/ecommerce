import axios from 'axios';
import React from 'react'
import { useState } from 'react';

export const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setpassword] = useState("");
  return (
    <div>
        <div>
             <label htmlFor='username'>Username:</label>
             <input name="username" placeholder='enter your name:' onChange={(event)=>setUsername(event.target.value)}/>
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input name="password" placeholder='enter your password:' onChange={(event)=>setpassword(event.target.value)}/>
          </div>
          <button onClick={async ()=>{
              const response = await axios.post("http://localhost:3000/api/v1/auth/login",{
                username : username,
                password : password,
              })
              console.log(response);
          }} className="px-4 py-2 hover:bg-slate-400 w-32">Submit</button>
    </div>
  )
}
