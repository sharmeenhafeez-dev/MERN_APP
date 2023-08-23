import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import Login from '../../Components/Login';
import Signup from '../../Components/Signup';
import './guestbar.css'; 

export default function Guestbar() {
  return (
    <Navbar className='guestbar'>
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
              <CgProfile style={{ marginRight: '10px' }} />
              <span className="guestbar-user"></span>
            </span>
          </Navbar.Text>
        <Login />
         <Signup />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
