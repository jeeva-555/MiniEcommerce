
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Header() {
  const [searchkey,setsearchkey] = useState("");
  const navigate = useNavigate();

  function storesearchkey(e){
    setsearchkey(e.target.value);
  }

  function handlesearch(){
      navigate("search?keyword="+searchkey);
  }
  return (
    <div>
            <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <img width="80px" style={{borderRadius:"50px"}} src="/images/jeevalogo.png" 
          onClick={()=>{navigate("/")}}/>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <div className="input-group">
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Enter Product Name ..."
            onChange={storesearchkey}
            value={searchkey}
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn" onClick={handlesearch}>
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <span id="cart" className="ml-3">Cart</span>
        <span className="ml-1" id="cart_count">2</span>
      </div>
    </nav>

    </div>
  )
}

export default Header