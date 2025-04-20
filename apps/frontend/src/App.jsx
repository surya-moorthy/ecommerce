import axios from "axios";
import './App.css'
import { useState } from "react";

function App() {
  const [username,setUsername] = useState("");
  const [password,setpassword] = useState("");
  const [email,setemail] = useState("");
  return (
     <div className="flex flex-col gap-y-3 justify-center">
          <div>
             <label htmlFor='username'>Username:</label>
             <input name="username" placeholder='enter your name:' onChange={(event)=>setUsername(event.target.value)}/>
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input name="password" placeholder='enter your password:' onChange={(event)=>setpassword(event.target.value)}/>
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input name="email" placeholder='enter your email:' onChange={(event)=>setemail(event.target.value)}/>
          </div>
          <button onClick={async ()=>{
              const response = await axios.post("http://localhost:3000/api/v1/auth/register",{
                username : username,
                password : password,
                email : email
              })
              console.log(response);
          }} className="px-4 py-2 hover:bg-slate-400 w-32">Submit</button>
     </div>
  )
}

export default App
