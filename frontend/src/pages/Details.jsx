import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details({cartitems,setcartitems,toast}) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const[qty,setqty]= useState(1)

  useEffect(() => {
    fetch(`http://localhost:8008/api/jr/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        console.log("Fetched product:", data);
      })
      .catch(err => console.error("Error fetching product:", err));
  }, [id]);

  function addtocart(){
    const bool = cartitems.find((item)=>item.product._id==product._id);
    if(!bool){
      const newitem = {product,qty};
      toast.success('item added to cart', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
        });
      return setcartitems(prev=>[...prev,newitem]);
    }

    bool.product.qty=qty;
    toast.success('quantity updated in cart', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
    setcartitems(prev=>{
      return prev.map((item)=>item.product._id==bool.product._id?bool:item);
    })
    
  }

  function increment(){
    if(product.stock>qty)setqty(prev=>++prev);
  }

  function decrement(){
    if(qty>1)setqty(prev =>--prev);
   
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container container-fluid">
      <div className="row f-flex justify-content-around">
        <div className="col-12 col-lg-5 img-fluid" id="product_image">
          <img src={product.images[0].image} alt={product.name} height="500" width="500" />
        </div>

        <div className="col-12 col-lg-5 mt-5">
          <h3>{product.name}</h3>
          <p id="product_id">Product # {product._id}</p>

          <hr />

          <div className="rating-outer">
            <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
          </div>

          <hr />

          <p id="product_price">${product.price}</p>
          <div className="stockCounter d-inline">
            <span className="btn btn-danger minus" onClick={decrement}>-</span>

            <input type="number" className="form-control count d-inline" value={qty} readOnly />

            <span className="btn btn-primary plus" onClick={increment}>+</span>
          </div>
          <button type="button" id="cart_btn" onClick={addtocart} className="btn btn-primary d-inline ml-4">Add to Cart</button>

          <hr />

          <p>Status: <span id="stock_status">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></p>

          <hr />

          <h4 className="mt-2">Description:</h4>
          <p>{product.description}</p>

          <hr />
          <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>

          <div className="rating w-50"></div>
        </div>
      </div>
    </div>
  );
}

export default Details;
