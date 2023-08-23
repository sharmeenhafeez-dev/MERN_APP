import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'
import { AppRoute } from '../../App'
export default function Products() {
    const [product, setProducts] = useState([])
    useEffect(() => {

       
        axios.get(`${AppRoute}api/products`)
            .then(json => setProducts(json.data.product))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Products</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    product?.map((val, key) => <GuestCards key={key} image={val.thumbnail} name={val.title} url={`/products/${val._id}`} />)
                }

            </div>
        </div>
    )
}