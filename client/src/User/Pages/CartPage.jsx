// import React, { useContext ,useState} from 'react';
// import { CartContext } from '../Cart_context/context';
// import { GlobalContext } from '../../Admin/Context/context';
// import { decodeToken } from 'react-jwt';
// import { BiXCircle } from 'react-icons/bi';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';


// const modalStyle = {
//     content: {
//       width: '400px',
//       margin: 'auto',
//       padding: '20px',
//       borderRadius: '5px',
//       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     },
//   };
// export default function CartPage() {
//   const { state } = useContext(GlobalContext);
//   const { cart_state, cart_dispatch } = useContext(CartContext);
//   const user = decodeToken(state.token);


//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [customerDetails, setCustomerDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });


//   const total = cart_state.cart.reduce(
//     (accumulator, product) => accumulator + product.price * product.quantity,
//     0
//   );

//   const removeCartItem = (index) => {
//     cart_dispatch({ type: 'REMOVE_FROM_CART', index });
//   };



//   const handleCheckout = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setCustomerDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   const handleModalSubmit = (event) => {
//     event.preventDefault();
//     console.log('Customer Details:', customerDetails);
//     setIsModalOpen(false);
//   };



  
//   const checkout = () => {
//     const payload = {
//       items: cart_state.cart,
//       totalBill: total,
//       customerAddress: user.address || '',
//       customerContact: user.contact || '',
//       customerName: user.username,
//       customerEmail: user.email,
//     };
//     console.log(payload);
//   };

//   return (
//     <div style={{ backgroundColor: 'peachpuff', minHeight: '100vh' }}>
//       <div className="container">
//         <div className="text-center py-5">
//           <h2>Cart</h2>
//           <small className="text-secondary">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius totam nostrum voluptatibus culpa accusamus.
//           </small>
//         </div>

//         <div className="p-5 rounded bg-dark">
//           <div className="card mb-3 w-100">
//             <div className="row g-0">
//               <div className="col-md-2">
//                 <h5 className="card-header">Product Image</h5>
//               </div>
//               <div className="col-md-3">
//                 <h5 className="card-header">Product Name</h5>
//               </div>
//               <div className="col-md-2">
//                 <h5 className="card-header">Quantity</h5>
//               </div>
//               <div className="col-md-2">
//                 <h5 className="card-header">price</h5>
//               </div>
//               <div className="col-md-2">
//                 <h5 className="card-header">Action</h5>
//               </div>
//             </div>
//           </div>

//           {cart_state.cart?.map((val, key) => (
//             <div className="card mb-3 w-100" key={key}>
//               <div className="row g-0">
//                 <div className="col-md-2 d-flex justify-content-center align-items-center">
//                   <img
//                     src={val.thumbnail}
//                     style={{ height: '10vh', objectFit: 'contain' }}
//                     className="img-fluid rounded-start"
//                     alt={val.title}
//                   />
//                 </div>
//                 <div className="col-md-3">
//                   <div className="card-body">
//                     <h5 className="card-title">
//                     {val.title}
//                     </h5>
                  
//                   </div>
//                 </div>
                
//                 <div className="col-md-1 d-flex justify-content-center align-items-center">
//                   <h5 className="card-title text-center">
//                     {val.quantity}
                    
//                   </h5>
//                 </div>
//                 <div className="col-md-3 d-flex justify-content-center align-items-center">
//                   <h5 className="card-title text-center">
//                     {val.price}
                    
//                   </h5>
//                 </div>
//                 <div className="col-md-2">
//                   <button
//                     className="btn btn-link text-danger"
//                     onClick={() => removeCartItem(key)}
//                   >
//                     <BiXCircle size={20} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="border border-primary border-3 bg-light px-5 py-3 rounded d-flex justify-content-between align-items-center">
//             <h6>Total</h6>
//             <div>{total}</div>
//           </div>

//           <div className="d-flex justify-content-center mt-3">
//             {cart_state.cart.length > 0 && (
//               <button className="btn btn-light w-50" onClick={handleCheckout}>
//               CheckOut
//             </button>
//             )}
//           </div>
//         </div>
//       </div>
   
//       <Modal show={isModalOpen} onHide={handleModalClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Checkout</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleModalSubmit}>
//           <div className="mb-3">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="form-control"
//                 value={customerDetails.name}
//                 onChange={handleInputChange}
//               />
//             </div>
//              <div className="mb-3">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="text"
//                 id="email"
//                 name="email"
//                 className="form-control"
//                 value={customerDetails.email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="address">Address</label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 className="form-control"
//                 value={customerDetails.address}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="contact">Contact</label>
//               <input
//                 type="text"
//                 id="contact"
//                 name="contact"
//                 className="form-control"
//                 value={customerDetails.contact}
//                 onChange={handleInputChange}
//               />
//             </div>
          
//             <Button type="submit" variant="primary">
//               Submit
//             </Button>
//           </form>
//         </Modal.Body>
//       </Modal>

//     </div>
//   );
// }










import React, { useContext ,useState} from 'react';
import { CartContext } from '../Cart_context/context';
import { GlobalContext } from '../../Admin/Context/context';
import { decodeToken } from 'react-jwt';
import { BiXCircle } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const modalStyle = {
    content: {
      width: '400px',
      margin: 'auto',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
  };
export default function CartPage() {
  const { state } = useContext(GlobalContext);
  const { cart_state, cart_dispatch } = useContext(CartContext);
  const user = decodeToken(state.token);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    address: '',
    contact: '',
  });


  const total = cart_state.cart.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  const removeCartItem = (index) => {
    cart_dispatch({ type: 'REMOVE_FROM_CART', index });
  };



  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleModalSubmit = (event) => {
    event.preventDefault();
    console.log('Customer Details:', customerDetails);
    setIsModalOpen(false);
  };



  
  const checkout = () => {
    const payload = {
      items: cart_state.cart,
      totalBill: total,
      customerAddress: user.address || '',
      customerContact: user.contact || '',
      customerName: user.username,
      customerEmail: user.email,
    };
    console.log(payload);
  };

  return (
    <div className=' bg-black ' style={{ minHeight: '180vh' }}>
      <div className="container">
        <div className="text-center text-white py-5">
          <h2>Cart</h2>
          <small className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius totam nostrum voluptatibus culpa accusamus.
          </small>
        </div>

        <div className="p-5 rounded " style={{ backgroundColor: 'peachpuff', }}>
          <div className="card mb-3 w-100">
            <div className="row g-0">
              <div className="col-md-2">
                <h5 className="card-header">Product Image</h5>
              </div>
              <div className="col-md-3">
                <h5 className="card-header">Product Name</h5>
              </div>
              <div className="col-md-2">
                <h5 className="card-header">Quantity</h5>
              </div>
              <div className="col-md-2">
                <h5 className="card-header">price</h5>
              </div>
              <div className="col-md-2">
                <h5 className="card-header">Action</h5>
              </div>
            </div>
          </div>

          {cart_state.cart.map((val, key) => (
            <div className="card mb-3 w-100" key={key}>
              <div className="row g-0">
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                  <img
                    src={val.thumbnail}
                    style={{ height: '10vh', objectFit: 'contain' }}
                    className="img-fluid rounded-start"
                    alt={val.title}
                  />
                </div>
                <div className="col-md-3">
                  <div className="card-body">
                    <h5 className="card-title">
                    {val.title}
                    </h5>
                  
                  </div>
                </div>
                
                <div className="col-md-1 d-flex justify-content-center align-items-center">
                  <h5 className="card-title text-center">
                    {val.quantity}
                    
                  </h5>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                  <h5 className="card-title text-center">
                    {val.price}
                    
                  </h5>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-link text-danger"
                    onClick={() => removeCartItem(key)}
                  >
                    <BiXCircle size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="border border-primary border-3 bg-light px-5 py-3 rounded d-flex justify-content-between align-items-center">
            <h6>Total</h6>
            <div>{total}</div>
          </div>

          <div className="d-flex justify-content-center mt-3">
            {cart_state.cart.length > 0 && (
              <button className=" login-submit-btn w-50" onClick={handleCheckout}>
              CheckOut
            </button>
            
            )}
          </div>
        </div>
      </div>
   
      <Modal show={isModalOpen} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: 'peachpuff' }}>
          <form onSubmit={handleModalSubmit}>
          <div className="mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={customerDetails.name}
                onChange={handleInputChange}
              />
            </div>
             <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                className="form-control"
                value={customerDetails.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="form-control"
                value={customerDetails.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                id="contact"
                name="contact"
                className="form-control"
                value={customerDetails.contact}
                onChange={handleInputChange}
              />
            </div>
            {/* ...Other input fields (email, address, contact)... */}
            <button type="submit" className=" login-submit-btn">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>

    </div>
  );
}





