import React, { useState, useEffect } from 'react';
import Brand from '../Components/Brand';
import Category from '../Components/Category';
import Products from '../Components/Products';
import Slider from '../../Components/Slider';
import { Spinner } from 'react-bootstrap'

export default function Home() {



  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setLoading(false); 
    }, 2000); 

    return () => {
      clearTimeout(timeout); 
    };
  }, []); 

  return (
    <div style={{ backgroundColor: 'peachpuff', minHeight: '100vh' }}>
    {loading ? (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
      ) : (
        <div>
          <Slider />
          <Category />
          <Brand/>
          <Products />
        </div>
      )}
    </div>
  );
}
