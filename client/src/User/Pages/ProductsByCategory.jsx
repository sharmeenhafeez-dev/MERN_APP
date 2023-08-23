import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import UserCards from '../Components/UserCards'
import Brands from './Brands'
import { AppRoute } from '../../App'

export default function ProductsByBrand() {
    const { CategoryName } = useParams()
    const [Product, setProduct] = useState([])
    useEffect(() => {

   
        axios.get(`${AppRoute}api/get-products-category/${CategoryName}`)
            .then(json => console.log(json.data.product))

            .catch(err => console.log(err.message))

    }, [CategoryName])



    
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
                <h2>Products By Category</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
            <h2>{CategoryName }</h2>
                {/* {
                    Product?.map((val, key) => <UserCards key={key} brand={val.CategoryName } name={val.CategoryName}  />)
                    
                } */}

            </div>
        </div>

  )}
</div>
        




        
    )
}