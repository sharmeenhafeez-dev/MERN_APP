// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Spinner } from 'react-bootstrap';
// import UserCards from '../Components/UserCards';
// import { AppRoute } from '../../App'

// export default function ProductsByBrand() {
//   const { BrandName } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios


//       .get(`${AppRoute}api/get-products-brand/${BrandName}`)
//       .then((response) => {
//         setProducts(response.data.product);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error.message);
//         setLoading(false);
//       });
//   }, [BrandName]);

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
//         <div className="container">
//           <div className="text-center py-5">
//             <h2>Products By Brands</h2>
//             <small className="text-secondary">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
//               delectus magnam doloribus voluptatibus possimus corrupti aliquid
//               itaque harum debitis ipsa!
//             </small>
//           </div>

//           <div className="row my-5">
//             <h2>{BrandName}</h2>
//             <div className="row my-5">
//               {products?.map((product, key) => (
//                 <UserCards
//                   key={key}
//                   image={product?.thumbnail}
//                   name={product.title}
//                   url={`/products/${product._id}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
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
import { Link } from 'react-router-dom';
export default function ProductPage() {

  const { _id } = useParams()
  console.log('_id:', _id);
  const [brand, setBrand] = useState({})
  const [quantity, setQuantity] = useState(1)

  const { cart_state, cart_dispatch } = useContext(CartContext)



  useEffect(() => {


    console.log(cart_state)

 
    axios.get(`${AppRoute}api/brandbyid/${_id}`)
    
      .then(json => setBrand(json.data.brand)
      .then(json => console.log(json.data.brand))
      
      )
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
          <div className="container align-item-center ">
            <div className="row ">


              <h1>Brand Page</h1>

              <div className="col-md-7">
                <h2>{brand.BrandName}  </h2>
           
                <div className=" d-flex col-md-10 my-5">
                  {
                    brand?.BrandImage?.map((val, key) => <div key={key} className='col-md-4 border border-dark  mx-1 my-1'><img src={val} className='img-fluid' /></div>)
                  }
                </div>

              



              </div>
            </div>
          </div>

        </div>
      )}

    </div>

  )
}