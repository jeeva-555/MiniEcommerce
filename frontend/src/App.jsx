import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Home/>
    <Footer/>
    </>
  )
}

export default App
