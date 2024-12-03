
import { Navbar } from './components/Navbar'

function App() {
  

  return (
    <>
    <Navbar/>
     <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80h]">
      <div className='addTodo'>
      <h2 className='text-xl font-bold '>Add your task</h2>
        <input type="text" />  
        <button className='bg-violet-600 
        hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6 '>Add</button>  
     </div>
       <h2 className='text-lg font-bold'>Your todos</h2>
       <div className='todos'>
       <div className='todo flex'>
        <div className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div className='buttons'>
          <button className='bg-violet-600 
        hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-2 '>Edit</button>
          <button className='bg-violet-600 
        hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-2 '>Delete</button>
        </div>
       </div>
       </div>
       </div>
       
    </>
  )
}

export default App
