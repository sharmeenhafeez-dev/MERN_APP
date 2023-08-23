import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'

import { AppRoute } from '../../App'

export default function Brand() {
    const [brand, setbrand] = useState([])
    useEffect(() => {

      
        axios.get(`${AppRoute}api/all-brands`)
            .then(json => setbrand(json.data.brand))
            .catch(err =>  console.log(err.message))

    }, [])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Brand</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    brand?.map((val, key) => <GuestCards key={key} image={val.BrandImage} name={val.BrandImageName} />)
                }

            </div>
        </div>
    )
}