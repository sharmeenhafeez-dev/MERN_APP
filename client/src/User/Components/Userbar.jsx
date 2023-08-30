// import React, { useContext } from 'react'; // Import useContext
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Login from '../../Components/Login'
// import { CgProfile } from 'react-icons/cg';
// import Badge from 'react-bootstrap/Badge';
// import {AiOutlineShoppingCart} from 'react-icons/ai'
// import Cookies from 'js-cookie';
// import { GlobalContext } from '../../Admin/Context/context'; // Import GlobalContext

// import './userbar.css'; // Import the CSS file
// import { CartContext } from '../Cart_context/context';

// export default function Userbar() {
//   const { dispatch } = useContext(GlobalContext); // Use the context

//   const {cart_state,cart_dispatch} =useContext(CartContext)
//   const handleSignout = () => {
//     Cookies.remove('token');
//     dispatch({ type: "USER_LOGOUT" });
//     history.push('/guest'); 
//   };

//   return (
//     <Navbar className='userbar'>
//       <Container>
//         <Navbar.Brand href="#home" className='text-black'>E.COM.TRENDS</Navbar.Brand>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">

//           <Nav className="mx-auto">
//             <Link to='/home' className='nav-link text-black'>Home</Link>
//             <Link to='/brands' className='nav-link text-black'>Brands</Link>
//             <Link to='/products' className='nav-link text-black'>Products</Link>
//             <Link to='/category' className='nav-link text-black'>Category</Link>
//           </Nav>

//           <Navbar.Text className='text-black'>
//             <span style={{ display: 'flex', alignItems: 'center' }}>
//               <CgProfile className="userbar-profile" />
//               <span className="userbar-user">User Name</span>
//             </span>
//           </Navbar.Text>

//           <Link to='/cart' className='nav-link text-black px-3'>{<AiOutlineShoppingCart size={30}/>} <Badge bg="black">
//           {cart_state.cart?.length}
//         </Badge></Link>
//           <Login />
//           <button
//             className="btn btn-dark"
//             onClick={handleSignout}
//           >
//             Sign Out
//           </button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }



import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../../Components/Login';
import { CgProfile } from 'react-icons/cg';
import Badge from 'react-bootstrap/Badge';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Cookies from 'js-cookie';
import { GlobalContext } from '../../Admin/Context/context';
import './userbar.css';
import { CartContext } from '../Cart_context/context';

export default function Userbar() {
  const { dispatch } = useContext(GlobalContext);
  const { cart_state, cart_dispatch } = useContext(CartContext);

  const handleSignout = () => {
    Cookies.remove('token');
    dispatch({ type: 'USER_LOGOUT' });
    history.push('/guest');
  };

  return (
    <Navbar className='userbar' expand='lg'>
      <Container>
        <Navbar.Brand href='#home' className='text-black'>
          E.COM.TRENDS
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Nav className='mx-auto'>
            <Link to='/home' className='nav-link text-black'>
              Home
            </Link>
            <Link to='/brands' className='nav-link text-black'>
              Brands
            </Link>
            {/* <Link to='/products' className='nav-link text-black'>
              Products
            </Link> */}
            <Link to='/category' className='nav-link text-black'>
              Category
            </Link>
          </Nav>

          <Navbar.Text className='text-black d-none d-lg-block'>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <CgProfile className='userbar-profile' />
              <span className='userbar-user'>User Name</span>
            </span>
          </Navbar.Text>

          <Link to='/cart' className='nav-link text-black px-3'>
            {<AiOutlineShoppingCart size={30} />}{' '}
            <Badge bg='black'>{cart_state.cart?.length}</Badge>
          </Link>
          <Login />
          <button className='btn btn-dark' onClick={handleSignout}>
            Sign Out
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
