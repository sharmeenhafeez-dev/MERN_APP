import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from 'react-icons/cg';
import Login from '../../Components/Login';


export default function Adminbar() {
  return (
    <Navbar  className='bg-black'>
      <Container>
        <Navbar.Brand href="#home" className='text-white'>Admin</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text  className='text-white'>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <CgProfile style={{ marginRight: '10px' }} />
              Admin Name
            </span>
          </Navbar.Text>
          <Login/>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
