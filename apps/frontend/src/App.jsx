
import { Route,Routes } from 'react-router-dom'
import './App.css'
import { MainSection } from './components/MainSection'
import { Navbar } from './components/Navbar'
import { Login } from './components/Login'
import { Products } from './Products'
import { Register } from './components/Register'
import { Orders } from './components/orders'

function App() {

  return (
     <div className='w-screen'>
           <div className='h-48'>
                   <Navbar/>
           </div>
           <Routes>
                <Route path="/" element={<MainSection/>}/>
                 <Route path='login' element={<Login/>}/>
                 <Route path='register' element={<Register/>}/>
                 <Route path='product' element={<Products/>}/>
                 <Route path='orders' element={<Orders/>}/>
           </Routes>
     </div>
  ) 
}

export default App
