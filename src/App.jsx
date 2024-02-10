
import Navbar from './component/Navbar'
import NewsBoard from './component/NewsBoard'
import { useState } from 'react'

function App() {
const[category,setCategory] = useState("general")

  return (
    <>
     <Navbar setCategory={setCategory}/>
     <NewsBoard category={category}/>
    
    </>
  )
}

export default App
