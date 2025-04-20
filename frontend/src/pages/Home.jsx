import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import {  useSearchParams } from 'react-router-dom'

function Home() {

  const [products,setproducts] = useState([]);
  const [searchparams,setsearchparams]=useSearchParams("")

  useEffect(()=>{
      fetch("http://localhost:8008/api/jr/products"+"?"+searchparams)
      .then(res=>res.json())
      .then(data=>setproducts(data));
  },[searchparams])
  return (
    <div>
    <h1 id="products_heading">Latest Products</h1>
    <section id="products" className="container mt-5">
      <div className="row">
        {products.map((product)=><ProductCard product = {product} />)}       
      </div>
    </section>
    </div>
  )
}

export default Home