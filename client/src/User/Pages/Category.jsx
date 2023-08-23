import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import UserCards from '../Components/UserCards'
import { AppRoute } from '../../App'

export default function Category() {
    const [category, setCategory] = useState([])
    useEffect(() => {

   
        axios.get(`${AppRoute}api/all-categories`)
            .then(json => setCategory(json.data.categories))
            .catch(err => console.log(err.message))

    }, [])


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
    <div className="container">
            <div className="text-center py-5">
                <h2>Category</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    category?.map((val, key) => <UserCards key={key} image={val.CategoryImage} name={val.CategoryName} url={`/category/${val.CategoryName}`}/>)
                }

            </div>
        </div>

  )}
</div>

    )
}