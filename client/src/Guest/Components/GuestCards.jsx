import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './guestCardStyles.css'; // Import the guestCardStyles.css file

export default function GuestCards({ name, image }) {
  return (
    <div className="col-md-3 mb-4">
      <Link to={`/${name?.split(' ').join('-')}`} className="text-decoration-none text-black ">
        <div className="guest-card bg-white">
          <Card.Img
            className="card-img"
            variant="top"
            src={image}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Button className="btn btn-dark mt-4">Add to Cart</Button>
          </Card.Body>
        </div>
      </Link>
    </div>
  );
}
