import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import UserCards from '../Components/UserCards';
import { AppRoute } from '../../App'

export default function ProductsByBrand() {
  const { BrandName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios


      .get(`${AppRoute}api/get-products-brand/${BrandName}`)
      .then((response) => {
        setProducts(response.data.product);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, [BrandName]);

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
        <div className="container">
          <div className="text-center py-5">
            <h2>Products By Brands</h2>
            <small className="text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
              delectus magnam doloribus voluptatibus possimus corrupti aliquid
              itaque harum debitis ipsa!
            </small>
          </div>

          <div className="row my-5">
            <h2>{BrandName}</h2>
            <div className="row my-5">
              {products?.map((product, key) => (
                <UserCards
                  key={key}
                  image={product?.thumbnail}
                  name={product.title}
                  url={`/products/${product._id}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
