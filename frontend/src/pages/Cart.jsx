import React, { Fragment } from 'react'
import{useState,useEffect} from "react"

function Cart({cartitems,setcartitems,toast}) {



    
    const[order,setorder]=useState(false);
    const [storage,setstorage] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8008/api/jr/products")
        .then(res=>res.json())
        .then(data=>setstorage(data));
    },[storage]);


     function increment(id){
        console.log(id)
        console.log(storage)
        const storageitem = storage.find((item)=>item._id==id);
        console.log(storageitem)
       setcartitems(prev=>prev.map((item)=>{
        if(item.product._id==id && storageitem.stock>item.qty){
            const newqty = item.qty++;
            return{...item,newqty}
        }

        return item;
       }))
      }
    
      function decrement(id){
        setcartitems(prev=>prev.map((item)=>{
            if(item.product._id==id && item.qty>1){
                const newqty = item.qty--;
                return{...item,newqty}
    
            }
    
            return item;
           }))
      }

      function deletecartitem(id){
        setcartitems(prev=>prev.filter((item)=>
             item.product._id!==id
        ));
      };

      function checkout(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cartitems)
        };
        fetch("http://localhost:8008/api/jr/order",requestOptions)
        .then(res=>res.json())
        .then(()=>{ toast.success('order placed successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            
            });});

            setcartitems([]);
      }


      const totalunits = cartitems.reduce((acc,item)=>acc+item.qty,0);
      const totalprice = cartitems.reduce((acc,item)=>acc+item.qty*parseInt(item.product.price),0)
  
  return(  <Fragment><div className="container container-fluid">
    <h2 className="mt-5">Your Cart: <b>{cartitems.length} items</b></h2>
    
    <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8">
            <hr />
            {cartitems.map((item)=>{
                return( <div className="cart-item" key={item.product._id}>
                    <div className="row">
                        <div className="col-4 col-lg-3">
                            <img src={item.product.images[0].image} alt="Laptop" height="90" width="115"/>
                        </div>
    
                        <div className="col-5 col-lg-3">
                            <a href="#">{item.product.description}</a>
                        </div>
    
    
                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                            <p id="card_item_price">{item.product.price}</p>
                        </div>
    
                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                            <div className="stockCounter d-inline">
                                <span onClick={()=>decrement(item.product._id)} className="btn btn-danger minus">-</span>
                                <input type="number" className="form-control count d-inline" value={item.qty} readOnly />
    
                                <span onClick={()=>increment(item.product._id)} className="btn btn-primary plus">+</span>
                            </div>
                        </div>
    
                        <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                            <i id="delete_cart_item" onClick={()=>deletecartitem(item.product._id)} className="fa fa-trash btn btn-danger"></i>
                        </div>
    
                    </div>
                </div>)
            })}
           
            <hr />
        </div>

        <div className="col-12 col-lg-3 my-4">
            <div id="order_summary">
                <h4>Order Summary</h4>
                <hr />
                <p>Subtotal:  <span className="order-summary-values">{totalunits}</span></p>
                <p>Est. total: <span className="order-summary-values">{totalprice}</span></p>

                <hr />
                <button id="checkout_btn" onClick={checkout} className="btn btn-primary btn-block">Place Order</button>
            </div>
        </div>
    </div>
</div>
</Fragment>)
  }


export default Cart