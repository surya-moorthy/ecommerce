
import './App.css'
import { Navbar } from './components/Navbar'

function App() {

  return (
     <div className="flex flex-col justify-center items-center transition-all duration-300 gap-y-3">
         <div>
           <Navbar/>               
         </div>
         <div className="flex flex-col justify-center items-center">
                 <h3 className="font-bold font-sans text-4xl text-slate-950">Amazon of Food Court</h3>
                 <p className="text-xl font-normal text-slate-900">this Website is special to foodies who wants to 
                 know about different foods.</p>
          </div>
          <div className='flex justify-between gap-x-3'>
                <button className='w-36 h-16 px-4 py-1 text-xl bg-neutral-950 hover:bg-neutral-800 text-neutral-50 rounded-2xl'>
                        Explore 
                </button>
                <button className='w-36 h-16 px-4 py-1 text-xl bg-neutral-950 hover:bg-neutral-800 text-neutral-50 rounded-2xl'
                  
                >
                        Get started 
                </button>
          </div>
     </div>
  )
}

export default App
