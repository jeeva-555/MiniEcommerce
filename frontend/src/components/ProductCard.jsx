import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

function ProductCard( {product}) {

    

    const innerwidth = `${product.ratings/5*100}%`
  return (
    
         <div className="col-sm-12 col-md-6 col-lg-3 my-3" key={product._id}>
          <div className="card p-3 rounded">
            <img
              className="card-img-top mx-auto"
              src={product.images[0].image}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <Link to={"/products/"+ product._id}>{product.description}</Link>
              </h5>
              <div className="ratings mt-auto">
                <div className="rating-outer">
                  <div className="rating-inner" style = {{width:innerwidth}}></div>
                </div>
              </div>
              <p className="card-text">{product.price}</p>
              <Link to={"/products/"+ product._id} id="view_btn" className="btn btn-block">View Details</Link>
            </div>
          </div>
        </div>
    
  )
}

export default ProductCard