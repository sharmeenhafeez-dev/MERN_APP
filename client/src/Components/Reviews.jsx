import React, { useState } from 'react';
import ReactStars from 'react-stars';
import Swal from 'sweetalert2';

export default function Reviews() {
  const [ratingStar, setRatingStar] = useState(0);
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');

  const ratingChanged = (newRating) => {
    setRatingStar(newRating);
  };

  const SubmitReview = () => {
    // Your submission logic goes here

    // Clear the email and review after submission
    setEmail('');
    setReview('');

    Swal.fire({
      title: 'Successfully Submitted!',
      text: 'Thanks for Reviewing Our Product',
      icon: 'success',
      confirmButtonText: 'Thanks for Rating Us',
    });
  };

  return (
    <>
      <div style={{ width: '100%', backgroundColor: 'peachpuff', height: '550px' }}>
        <h1 style={{ fontSize: '40px', textAlign: 'center', marginBottom: '5px', paddingTop: '70px' }}>Review Us</h1>
        <div className='d-flex justify-content-center' style={{ marginBottom: '20px' }}>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={30}
            value={ratingStar}
            activeColor='#ffd700'
          />
        </div>
        <div style={{ textAlign: 'center', paddingBottom: '10px' }}>
          <input
            type='email'
            className='input1'
            placeholder='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '600px',
              height: '60px',
              borderColor: 'black',
              borderRadius: '20px',
              borderBlockWidth: '3px',
              paddingLeft: '10px',
              paddingBottom: '10px',
            }}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <input
            type='text'
            className='input2'
            placeholder='Write a review...'
            value={review}
            onChange={(e) => setReview(e.target.value)}
            style={{
              width: '600px',
              height: '170px',
              borderColor: 'black',
              borderRadius: '20px',
              borderBlockWidth: '3px',
              paddingLeft: '10px',
              
            }}
          />
        </div>
        <input
          type='button'
          value='Submit'
          onClick={SubmitReview}
          style={{
            marginLeft: '590px',
            backgroundColor: 'black',
            color: 'white',
            width: '100px',
            height: '50px',
            borderRadius: '20px',
            marginTop: '10px',
            borderColor: 'black',
          }}
        />
      </div>
    </>
  );
}
