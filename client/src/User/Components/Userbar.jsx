import React, { useContext } from 'react'; // Import useContext
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Login from '../../Components/Login';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from 'react-icons/cg';
import Cookies from 'js-cookie';
import { GlobalContext } from '../../Admin/Context/context'; // Import GlobalContext

import './userbar.css'; // Import the CSS file

export default function Userbar() {
  const { dispatch } = useContext(GlobalContext); // Use the context

  const handleSignout = () => {
    Cookies.remove('token');
    dispatch({ type: "USER_LOGOUT" });
    history.push('/guest');
  };

  return (
    <Navbar className='userbar'>
      <Container>
        <Navbar.Brand href="#home" className='text-black'>E.COM.TRENDS</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">

          <Nav className="mx-auto">
            <Link to='/home' className='nav-link text-black'>Home</Link>
            <Link to='/brands' className='nav-link text-black'>Brands</Link>
            <Link to='/products' className='nav-link text-black'>Products</Link>
            <Link to='/category' className='nav-link text-black'>Category</Link>
          </Nav>

          <Navbar.Text className='text-black'>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <CgProfile className="userbar-profile" />
              <span className="userbar-user">User Name</span>
            </span>
          </Navbar.Text>

          <Link to='/cart' className='nav-link text-black px-3'>Cart</Link>
          <Login />
          <button
            className="btn btn-dark"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}