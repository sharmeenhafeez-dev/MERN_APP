import React, { useState, useEffect } from 'react';
import Brands from './Brands'
import Category from './Category'
import Products from './Products'
import Slider from '../../Components/Slider'
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
          <Brands/>
          <Products />
        </div>
      )}
    </div>
  );
}

