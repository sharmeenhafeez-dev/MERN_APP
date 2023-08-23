import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Login from './Login';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
  return (
    <>
      <footer className="container-fluid">
        <Row className="footer-container">
          <Col xs={12} md={4} className="container pt-5 pb-3">
            <div className="card1">
              <h2>
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </h2>
            </div>
          </Col>
          <Col xs={12} md={8} className="container pb-3">
            <Row className="justify-content-center p-5 mt-5">
              <h3 className="text-black">E.COM.TRENDS</h3>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mb-5">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="form-control border border-black rounded-pill"
                />
                <Button
                  variant="light"
                  type="submit"
                  className="btn-light rounded-pill text-white border border-black"
                >
                  Submit
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className='text-start col-text text-black'>
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="/products">Products</Link>
                <Link className='nav-link' to="/brands">Brands</Link>
                <Link className='nav-link' to="/category">Category</Link>
              </Col>
              <Col xs={12} md={6} className='text-start col-text'>
                <div className="text-black">
                  <span className="ms-2">123 Main Street, City, Country</span>
                </div>
                <div className="text-black">
                  <span className="ms-2">+1 234 567 890</span>
                </div>
              </Col>
             
            </Row>
            <hr className='text-black' />
            <Row className='d-flex justify-content-center'>
              <Col className='text-black'>All rights reserved</Col>
              <Col className=''>
                <FaFacebook className='me-3 text-black' />
                <FaInstagram className='text-black' />
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    </>
  );
}
