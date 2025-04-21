import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Details from './pages/Details'
import { ToastContainer, toast } from 'react-toastify';
import Cart from './pages/Cart'

function App() {
  const [cartitems, setcartitems] = useState([]);

    
  return (
    <>
    <BrowserRouter>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
       
        />
     <Header cartitems={cartitems}/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/search' element={<Home/>}/>
       <Route path='/products/:id' element={<Details setcartitems={setcartitems} cartitems={cartitems}  toast={toast}/>}/>
       <Route path='/cart' element={<Cart setcartitems={setcartitems} cartitems={cartitems}  toast={toast}/>}/>
    </Routes>   
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
