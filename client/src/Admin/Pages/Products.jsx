import React, { useEffect, useState } from 'react';
import AddProduct from '../Components/AddProduct';
import axios from 'axios';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AppRoute } from '../../App'


export default function Products() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    title: '',
    category: '',
    brand: '',
    price: '',
    description: '',
    thumbnail: null,
  });
 
  useEffect(() => {
    axios.get(`${AppRoute}api/products`)
      .then((json) => setProducts(json.data.product))
      .catch((error) => console.log(error));
  }, []);

  const truncateDescription = (description, maxLength) => {
    if (description && description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  const editProduct = (product) => {
    setEditingProduct(product);
    setEditedProduct({
      title: product.title,
      category: product.category,
      brand: product.brand,
      price: product.price,
      description: product.description,
      thumbnail: null,
    });
  };

  const deleteProduct = (_id) => {
    axios.delete(`${AppRoute}api/delete-product`, {data: {_id},})
      .then((response) => {
        setProducts(response.data.updatedProducts);
        setEditingProduct(null);
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  const saveEdits = () => {
    const formData = new FormData();
    formData.append('_id', editingProduct._id);
    formData.append('title', editedProduct.title);
    formData.append('category', editedProduct.category);
    formData.append('brand', editedProduct.brand);
    formData.append('price', editedProduct.price);
    formData.append('description', editedProduct.description);
    if (editedProduct.thumbnail) {
      formData.append('thumbnail', editedProduct.thumbnail);
    }

    axios.put(`${AppRoute}api/update-product`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        setProducts(response.data.updatedProducts);
        setEditingProduct(null);
      })
      .catch((error) => {
        console.error('Error editing product:', error);
      });
  };

  return (
    <div>
      <div className='d-flex align-item-center justify-content-between mt-3'>
        <h2>Products</h2>
        <AddProduct recallData={setProducts} />
      </div>

      <div>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Image</th>
              <th scope='col'>Name</th>
              <th scope='col'>Category</th>
              <th scope='col'>Brand</th>
              <th scope='col'>Price</th>
              <th scope='col'>Description</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((val, index) => (
              <tr key={val._id}>
                <td>
                  <img
                    src={val.thumbnail}
                    className='img-fluid rounded-circle border border-secondary'
                    style={{ height: '10vh', aspectRatio: 1 / 1, objectFit: 'contain' }}
                    alt=''
                  />
                </td>
                <td>
                  {editingProduct === val ? (
                    <input
                      value={editedProduct.title}
                      onChange={(e) => setEditedProduct({ ...editedProduct, title: e.target.value })}
                    />
                  ) : (
                    val.title
                  )}
                </td>
                <td>
                  {editingProduct === val ? (
                    <input
                      value={editedProduct.category}
                      onChange={(e) => setEditedProduct({ ...editedProduct, category: e.target.value })}
                    />
                  ) : (
                    val.category
                  )}
                </td>
                <td>
                  {editingProduct === val ? (
                    <input
                      value={editedProduct.brand}
                      onChange={(e) => setEditedProduct({ ...editedProduct, brand: e.target.value })}
                    />
                  ) : (
                    val.brand
                  )}
                </td>
                <td>
                  {editingProduct === val ? (
                    <input
                      value={editedProduct.price}
                      onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
                    />
                  ) : (
                    val.price
                  )}
                </td>
                <td>
                  {editingProduct === val ? (
                    <textarea
                      value={editedProduct.description}
                      onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
                    />
                  ) : (
                    truncateDescription(val.description, 20)
                  )}
                </td>
                <td>
                  {editingProduct === val ? (
                    <div className='d-flex gap-2'>
                      <button className='btn btn-outline-dark font-weight-bold' onClick={saveEdits}>
                        Save
                      </button>
                      <button className='btn btn-outline-dark font-weight-bold' onClick={() => setEditingProduct(null)}>
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className='d-flex gap-2'>
                      <button className='btn btn-outline-dark'>
                        <BsFillPencilFill onClick={() => editProduct(val)} />
                      </button>
                      <button
                        className='btn btn-outline-dark'
                        onClick={() => deleteProduct(val._id)}
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
