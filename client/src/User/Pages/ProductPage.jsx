// import axios from 'axios'
// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Col from 'react-bootstrap/Col';
// import { Spinner } from 'react-bootstrap'
// import { CartContext } from '../Cart_context/context'
// import { AppRoute } from '../../App'
// export default function ProductPage() {

//   const { _id } = useParams()
//   const [product, setProduct] = useState({})
//   const [quantity, setQuantity] = useState(1)

//   const { cart_state, cart_dispatch } = useContext(CartContext)



//   useEffect(() => {


//     console.log(cart_state)

 
//     axios.get(`${AppRoute}api/get-product-id/${_id}`)
//       .then(json => setProduct(json.data.product))
//       .catch(err => console.log(err))
//   }, [])

//   const addtocart = () => {
//     const payload = { ...product, quantity }
//     console.log(payload)

//     cart_dispatch({
//       type: "ADD_TO_CART",
//       payload
//     })
//   }
//   //loader logic
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {

//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 2000);

//     return () => {
//       clearTimeout(timeout);
//     };
//   }, []);

//   return (



//     <div style={{ backgroundColor: 'peachpuff', minHeight: '100vh' }}>
//       {loading ? (
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '100vh',
//           }}
//         >
//           <Spinner animation="border" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </Spinner>
//         </div>
//       ) : (

//         <div>
//           <div className="container ">
//             <div className="row ">


//               <h1>product page</h1>

//               <Col xs={12} md={4} className="container pt-5 pb-5" style={{ marginTop: "100px" }}>
//                 <div className="card1 " style={{ height: "500px" }}>
//                   <h2>
//                     <img
//                       src={product?.thumbnail} alt="" srcSet="" className='img-fluid'

//                     />
//                   </h2>
              
//                 </div>
//                <div className='mt-5'>
//                 <h4>Product Description</h4>
//                 <p> {product.description} </p>
//                </div>
//               </Col>

//               <div className="col-md-6">
//                 <h2>{product.title} - {product.price}</h2>
//                 <small className="text-secondary">{product.rating}</small>
//                 <div className="row my-5">
//                   {
//                     product?.images?.map((val, key) => <div key={key} className='col-md-4 border border-dark  mx-1 my-1'><img src={val} className='img-fluid' /></div>)
//                   }
//                 </div>

//                 <div className='d-flex justify-content-around align-items-center text-white bg-black py-4 rounded border border-secondary'>
//                   <button className="btn btn-light" disabled={quantity <= 1 ? true : false} onClick={() => setQuantity(quantity - 1)}>-</button>
//                   {quantity}
//                   <button className="btn btn-light" onClick={() => setQuantity(quantity + 1)}>+</button>
//                 </div>

//                 <div className='d-block mt-3 text-center'>
//                   <button className="w-50 btn-light rounded-pill text-white border border-black mx-auto " onClick={addtocart}  variant="light">Add to Cart</button>
//                 </div>

//               </div>
//             </div>
//           </div>

//         </div>
//       )}

//     </div>

//   )
// }





import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import { Spinner } from 'react-bootstrap'
import { CartContext } from '../Cart_context/context'
import { AppRoute } from '../../App'
import Badge from 'react-bootstrap/Badge';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import ReactStars from 'react-stars'
import { Link } from 'react-router-dom';
import Reviews from '../../Components/Reviews'
export default function ProductPage() {

  const { _id } = useParams()
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)

  const { cart_state, cart_dispatch } = useContext(CartContext)



  useEffect(() => {


    console.log(cart_state)

 
    axios.get(`${AppRoute}api/get-product-id/${_id}`)
      .then(json => setProduct(json.data.product))
      .catch(err => console.log(err))
  }, [])

  const addtocart = () => {
    const payload = { ...product, quantity }
    console.log(payload)

    cart_dispatch({
      type: "ADD_TO_CART",
      payload
    })
  }
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
          <div className="container ">
            <div className="row ">


              <h1>Product Page</h1>

              <Col xs={12} md={4} className="container pt-5 pb-5" style={{ marginTop: "100px" }}>
                <div className="card1 " style={{ height: "500px" }}>
                  <h2>
                    <img
                      src={product.thumbnail} alt="" srcSet="" className='img-fluid'

                    />
                  </h2>
              
                </div>
               <div className='mt-5'>
                <h4>Product Description</h4>
                <p> {product.description} </p>
               </div>
              </Col>

              <div className="col-md-6">
                <h2>{product.title} </h2>
                <small className="text-black">{product.rating}</small>
                <div className='d-flex justify-content-start'>
                    <ReactStars
                        count={5}
                        edit={false}
                        value={product.rating}
                        size={24}
                        color2={'#ffd700'}
                    />
                </div>



                <div className="row my-5">
                  {
                    product?.images?.map((val, key) => <div key={key} className='col-md-4 border border-dark  mx-1 my-1'><img src={val} className='img-fluid' /></div>)
                  }

                  <h1> RS.{product.price}</h1>
                </div>

                <div className='d-flex justify-content-around align-items-center text-white bg-black py-4 rounded border border-secondary'>
                  <button className="btn btn-light" disabled={quantity <= 1 ? true : false} onClick={() => setQuantity(quantity - 1)}>-</button>
                  {quantity}
                  <button className="btn btn-light" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>

                <div className='d-block mt-3 text-center'>
    <div className="row">
        <div className="col-md-6">
      <Link to='/cart' className='nav-link text-black px-3'>
    <AiOutlineShoppingCart style={{ fontSize: '80px' }} />{' '}
    <Badge bg='black'>{cart_state.cart?.length}</Badge>
</Link>
        </div>
        <div className="col-md-6">
            <button className="w-50 login-submit-btn mx-auto" onClick={addtocart} variant="light">
                Add to Cart
            </button>
        </div>
    </div>
</div>


              </div>
            </div>
          </div>

        </div>
      )}
<Reviews />
    </div>

  )
}