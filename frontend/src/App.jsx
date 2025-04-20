import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Header/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/search' element={<Home/>}/>
    </Routes>   
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
