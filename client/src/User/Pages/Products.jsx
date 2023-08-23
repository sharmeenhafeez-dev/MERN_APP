import React, { useEffect, useState } from 'react'
import UserCards from '../Components/UserCards'
import { Spinner } from 'react-bootstrap'
import axios from 'axios'
import { AppRoute } from '../../App'

export default function Products() {
    const [product, setProducts] = useState([])
    useEffect(() => {

    
        axios.get(`${AppRoute}api/products`)
            .then(json => setProducts(json.data.product))
            .catch(err => console.log(err))
    }, [])

//loader logic

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
    <div className="container ">
            <div className="text-center py-5">
                <h2>Products</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    product?.map((val, key) => <UserCards key={key} image={val.thumbnail} name={val.title} url={`/products/${val._id}`} />)
                }

            </div>
        </div>
  )}
</div>
    )
}