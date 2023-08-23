import React, { useEffect, useState } from 'react';
import AddBrands from '../Components/AddBrands';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import axios from 'axios';
import { AppRoute } from '../../App'


export default function Brands() {
  const [brand, setBrand] = useState([]);
  const [editingBrand, setEditingBrand] = useState(null);
  const [editedBrandName, setEditedBrandName] = useState('');
  const [editedBrandImage, setEditedBrandImage] = useState(null);

  useEffect(() => {

 
    axios.get(`${AppRoute}api/all-brands`)
      .then((json) => setBrand(json?.data?.brand))
      .catch((error) => console.log(error));
  }, []);

  const deleteBrand = (BrandName) => {
    axios.delete(`${AppRoute}api/delete-brand`, {
      data: { BrandName },
    })
      .then((response) => {
        setBrand(response.data.updatedBrands);
        setEditingBrand(null);
      })
      .catch((error) => {
        console.error('Error deleting brand:', error);
      });
  };

  const startEditing = (brand) => {
    setEditingBrand(brand);
    setEditedBrandName(brand.BrandName);
    setEditedBrandImage(null); // Clear previously edited image if any
  };

  const saveEdits = () => {
    const formData = new FormData();
    formData.append('_id', editingBrand._id);
    formData.append('BrandName', editedBrandName);
    if (editedBrandImage) {
      formData.append('BrandImage', editedBrandImage);
    }
   
    axios.put(`${AppRoute}api/update-brand`,formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        setBrand(response.data.updatedBrands);
        setEditingBrand(null);
      })
      .catch((error) => {
        console.error('Error editing brand:', error);
      });
  };

  return (
    <div>
      <div className='d-flex align-item-center justify-content-between mt-3'>
        <h2>Brand</h2>
        <AddBrands recallData={setBrand} />
      </div>

      <div>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>No</th>
              <th scope='col'>Brand Name</th>
              <th scope='col'>Brand Image</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {brand?.map((val, index) => (
              <tr key={val._id}>
                <td>{index + 1}</td>
                <td>
                  {editingBrand === val ? (
                    <input
                      value={editedBrandName}
                      onChange={(e) => setEditedBrandName(e.target.value)}
                    />
                  ) : (
                    val.BrandName
                  )}
                </td>
                <td>
                  {editingBrand === val ? (
                    <input
                      type='file'
                      accept='image/*'
                      onChange={(e) => setEditedBrandImage(e.target.files[0])}
                    />
                  ) : (
                    <img
                      src={val.BrandImage}
                      className='img-fluid'
                      style={{ height: '15vh', objectFit: 'contain' }}
                      alt=''
                    />
                  )}
                </td>
                <td>
                  {editingBrand === val ? (
                    <div className='d-flex gap-2'>
                      <button className='btn btn-outline-dark font-weight-bold' onClick={saveEdits}>
                        Save
                      </button>
                      <button className='btn btn-outline-dark font-weight-bold' onClick={() => setEditingBrand(null)}>
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className='d-flex gap-2'>
                      <button className='btn btn-outline-dark'>
                        <BsFillPencilFill onClick={() => startEditing(val)} />
                      </button>
                      <button
                        className='btn btn-outline-dark'
                        onClick={() => deleteBrand(val.BrandName)}
                      >
                        <RiDeleteBin5Fill />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
