// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import { Spinner } from 'react-bootstrap'
// import UserCards from '../Components/UserCards'
// import Brands from './Brands'
// import { AppRoute } from '../../App'

// export default function ProductsByBrand() {
//     const { CategoryName } = useParams()
//     const [Product, setProduct] = useState([])
//     useEffect(() => {

   
//         axios.get(`${AppRoute}api/get-products-category/${CategoryName}`)
//             .then(json => console.log(json.data.product))

//             .catch(err => console.log(err.message))

//     }, [CategoryName])



    
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
      
//       const timeout = setTimeout(() => {
//         setLoading(false); 
//       }, 2000); 
  
//       return () => {
//         clearTimeout(timeout); 
//       };
//     }, []);
  

//     return (

// <div style={{ backgroundColor: 'peachpuff', minHeight: '100vh' }}>
// {loading ? (
//   <div
//     style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//     }}
//   >
//     <Spinner animation="border" role="status">
//       <span className="visually-hidden">Loading...</span>
//     </Spinner>
//   </div>
//   ) : (
//   <div className="container ">
//             <div className="text-center py-5">
//                 <h2>Products By Category</h2>
//                 <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
//             </div>

//             <div className="row my-5">
//             <h2>{CategoryName }</h2>
//                 {/* {
//                     Product?.map((val, key) => <UserCards key={key} brand={val.CategoryName } name={val.CategoryName}  />)
                    
//                 } */}

//             </div>
//         </div>

//   )}
// </div>
//     )
// }




import React, { useEffect,useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { CartContext } from '../Cart_context/context'

// const { cart_state, cart_dispatch } = useContext(CartContext)
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import UserCards from '../Components/UserCards'
import Brands from './Brands'
import { AppRoute } from '../../App'

export default function ProductsByCategory() {
    const { CategoryName } = useParams()
    console.log('CategoryName ', CategoryName );

    const [product, setProduct] = useState([])
    const [quantity, setQuantity] = useState(1)
    useEffect(() => {

   
        axios.get(`${AppRoute}api/get-products-category/${CategoryName}`)
            .then(json => setProduct(json.data.product)
            .then(json => console.log(json.data.product))
            )


            .catch(err => console.log(err.message))

    }, [])



    
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


        <h1>Category Page</h1>

        <Col xs={12} md={4} className="container pt-5 pb-5" style={{ marginTop: "100px" }}>
          <div className="card1 " style={{ height: "500px" }}>
            <h2>
              <img
                src={product.thumbnail} alt="" srcSet="" className='img-fluid'

              />
            </h2>
        
          </div>
         <div className='mt-5'>
          <h4>brand Description</h4>
          {/* <p> {product.description} </p> */}
         </div>
        </Col>

        <div className="col-md-6">
          <h2>{product.CategoryName}  </h2>
          {/* <small className="text-secondary">{product.rating}</small> */}
          <div className="row my-5">
            {
              product?.CategoryImage?.map((val, key) => <div key={key} className='col-md-4 border border-dark  mx-1 my-1'><img src={val} className='img-fluid' /></div>)
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