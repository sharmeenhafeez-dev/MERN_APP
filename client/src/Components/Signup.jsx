import React, { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import { GlobalContext } from '../Admin/Context/context';
import axios from 'axios';
import Cookies from 'js-cookie';
import './signup.css'; // Import the CSS file
import {AppRoute }from '../App'

export default function Signup() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState(''); 
  const [contact, setContact] = useState('');
  const { state, dispatch } = useContext(GlobalContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SignupUser = (e) => {
    e.preventDefault();
    const payload = { email, password, username , address, contact  };

    axios 
      .post(`${AppRoute}api/signup`, payload)
      .then((json) => {
        setShow(false);
        Cookies.set('token', json.data.token);
        dispatch({
          type: 'SIGNIN',
          token: json.data.token,
        });

        // Show SweetAlert2 success modal
        Swal.fire({
          icon: 'success',
          title: 'Signup Successful',
          text: 'You have successfully signed up!',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button  className="btn btn-dark signup-submit-btn mx-1"  onClick={handleShow}>
        Signup
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100 signup-modal-title">Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body className="signup-modal-body">
          <form onSubmit={SignupUser}>
            <div className="mb-3">
              <label htmlFor="User" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="User"
                aria-describedby="emailHelp"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contact" className="form-label">
                Contact Number
              </label>
              <input
                type="text"
                className="form-control"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-dark signup-submit-btn">
              Submit
            </button> 
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
