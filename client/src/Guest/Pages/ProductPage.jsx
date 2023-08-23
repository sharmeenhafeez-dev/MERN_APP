import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppRoute } from '../../App'
export default function ProductPage() {

    const { _id } = useParams()
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)

const{ cart_state,cart_dispatch}=useContext(CartContext)


    useEffect(() => {

        console.log(cart_state)

     
        axios.get(`${AppRoute}api/get-product-id/${_id}`)
            .then(json => setProduct(json.data.product))
            .catch(err => console.log(err))
    },[])


    const addtocart = () => {
        const payload = { ...product, quantity }
console.log (payload)
        

    //loader logic
    const [loading, setLoading] = useState(true);

    useEffect(() => {

      const timeout = setTimeout(() => {
        setLoading(false); 
      }, 2000); 

      return () => {
        clearTimeout(timeout); 
      };
    }, []); 
    }

    return (
        <div style={{ backgroundColor: 'peachpuff', minHeight: '100vh' }}>
        {loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
          ) : (
        
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
        
                      <h1>product page</h1>
                      <img src={product.thumbnail} alt="" srcSet="" className='img-fluid' />
        
                    </div>
                    <div className="col-md-6 py-5">
                      <h2>{product.title} - {product.price}</h2>
                      <small className="text-secondary">{product.rating}</small>
                      <div className="row my-5">
                        {
                          product?.images?.map((val, key) => <div key={key} className='col-md-4 border border-dark rounded mx-1 my-1'><img src={val} className='img-fluid' /></div>)
                        }
                      </div>
        
                      <div className='d-flex justify-content-around align-items-center bg-light py-4 rounded border border-secondary'>
                        <button className="btn btn-dark" disabled={quantity <= 1 ? true : false} onClick={() => setQuantity(quantity - 1)}>-</button>
                        {quantity}
                        <button className="btn btn-dark" onClick={() => setQuantity(quantity + 1)}>+</button>
                      </div>
        
                      <div className='d-block mt-3'><button className="w-100 btn btn-dark" onClick={addtocart}>Add to Cart</button></div>
                    </div>
                  </div>
                </div>
        
              </div>
          )}
            </div>
    )
}