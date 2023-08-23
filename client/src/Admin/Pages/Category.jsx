import React, { useEffect, useState } from 'react';
import AddCategory from '../Components/AddCategory';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import axios from 'axios';
import { AppRoute } from '../../App'


export default function Category() {
  const [Category, setCategory] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editedCategoryName, setEditedCategoryName] = useState('');
  const [editedCategoryImage, setEditedCategoryImage] = useState(null);

  useEffect(() => {

   
    axios.get(`${AppRoute}api/all-categories`)
      .then((json) => setCategory(json.data.categories))
      .catch((error) => console.log(error));
  }, []);



  const deleteCategory = (CategoryName) => {
    axios.delete(`${AppRoute}api/delete-category`, {data: { CategoryName },})
      .then((response) => {
        setCategory(response.data.updatedCategories);
        setEditingCategory(null);
      })
      .catch((error) => {
        console.error('Error deleting category:', error);
      });
  };

  const startEditing = (category) => {
    setEditingCategory(category);
    setEditedCategoryName(category.CategoryName);
    setEditedCategoryImage(null);
  };

  const saveEdits = () => {
    const formData = new FormData();
    formData.append('_id', editingCategory._id);
    formData.append('CategoryName', editedCategoryName);
    if (editedCategoryImage) {
      formData.append('CategoryImage', editedCategoryImage);
    }
   
    axios.put(`${AppRoute}api/update-category`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        setCategory(response.data.updatedCategories);
        setEditingCategory(null);
      })
      .catch((error) => {
        console.error('Error editing category:', error);
      });
  };

  return (
    <div>
      <div className='d-flex align-item-center justify-content-between mt-3'>
        <h2>Categories</h2>
        <AddCategory recallData={setCategory} />
      </div>

      <div>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>No</th>
              <th scope='col'>Category Name</th>
              <th scope='col'>Category Image</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Category?.map((val, index) => (
              <tr key={val._id}>
                <td>{index + 1}</td>
                <td>
                  {editingCategory === val ? (
                    <input
                      value={editedCategoryName}
                      onChange={(e) => setEditedCategoryName(e.target.value)}
                    />
                  ) : (
                    val.CategoryName
                  )}
                </td>
                <td>
                  {editingCategory === val ? (
                    <input
                      type='file'
                      accept='image/*'
                      onChange={(e) => setEditedCategoryImage(e.target.files[0])}
                    />
                  ) : (
                    <img
                      src={val.CategoryImage}
                      className='img-fluid'
                      style={{ height: '15vh', objectFit: 'contain' }}
                      alt=''
                    />
                  )}
                </td>
                <td>
                  {editingCategory === val ? (
                    <div className='d-flex gap-2'>
                      <button className='btn btn-outline-dark font-weight-bold' onClick={saveEdits}>
                        Save
                      </button>
                      <button className='btn btn-outline-dark font-weight-bold' onClick={() => setEditingCategory(null)}>
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
                        onClick={() => deleteCategory(val.CategoryName)}
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
