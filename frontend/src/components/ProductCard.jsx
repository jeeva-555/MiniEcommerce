import React from 'react'

function ProductCard( {product}) {
  return (
    
         <div className="col-sm-12 col-md-6 col-lg-3 my-3" key={product.id}>
          <div className="card p-3 rounded">
            <img
              className="card-img-top mx-auto"
              src={product.images[0].image}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="">{product.description}</a>
              </h5>
              <div className="ratings mt-auto">
                <div className="rating-outer">
                  <div className="rating-inner"></div>
                </div>
              </div>
              <p className="card-text">{product.price}</p>
              <a href="#" id="view_btn" className="btn btn-block">View Details</a>
            </div>
          </div>
        </div>
    
  )
}

export default ProductCard