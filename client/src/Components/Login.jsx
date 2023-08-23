import React, { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import { GlobalContext } from '../Admin/Context/context';
import axios from 'axios';
import Cookies from 'js-cookie';
import './login.css'; // Import the CSS file
import {AppRoute} from '../App'

export default function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, dispatch } = useContext(GlobalContext);

  const handleClose = () => {
    setShow(false);
    setEmail('');
    setPassword('');
  };
  const handleShow = () => setShow(true);
  const LoginUser = (e) => {
    e.preventDefault();
    const payload = { email, password };
  
    axios
      .post(`${AppRoute}api/login`, payload)
      .then((json) => {
        setShow(false);
        Cookies.set('token', json.data.token);
        dispatch({
          type: 'LOGIN',
          token: json.data.token,
        });

        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have successfully logged in!',
        });
      })
      .catch((err) => {
        setShow(false);

        if (err.response && err.response.data && err.response.data.message) {
          const errorMessage = err.response.data.message;
          if (errorMessage.includes('email') && errorMessage.includes('password')) {
            Swal.fire({
              icon: 'error',
              title: 'Invalid Email and Password',
              text: 'Please enter valid email and password.',
            });
          } else if (errorMessage.includes('email')) {
            Swal.fire({
              icon: 'error',
              title: 'Invalid Email',
              text: 'Please enter a valid email.',
            });
          } else if (errorMessage.includes('password')) {
            Swal.fire({
              icon: 'error',
              title: 'Invalid Password',
              text: 'Please enter a valid password.',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'An error occurred. Please try again later.',
            });
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred. Please try again later.',
          });
        }
      });
  };

  return (
    <>
      <button className='btn btn-dark login-submit-btn mx-1' onClick={handleShow}>
        Login
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100 login-modal-title">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="login-form" style={{ backgroundColor: 'peachpuff', padding: '20px' }}>
          <form onSubmit={LoginUser}>
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

            <button type="submit" className="btn btn-dark login-submit-btn">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
