import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './order.css'
import { FaShoppingCart, FaMapMarkerAlt } from 'react-icons/fa';
import { AppRoute } from '../../App'


function OrdersList() {
    const [orders, setOrders] = useState([]);

  
      useEffect(() => {
        axios.get(`${AppRoute}api/allorders`)
          .then((json) => setOrders(json.data.orders))
          .catch((error) => console.log(error));
      }, []);
    
    


    return (
      <div style={{ backgroundColor: 'peachpuff', minHeight: '100vh' }}>
      <div className="App">
          <h1>All Orders</h1>
          <div className="orders-container">
              {orders?.map(order => (
                  <div key={order._id} className="order-item">
                      <FaShoppingCart size={24} /> 
                      <p>{order.customerName}</p>
                      <p>{order.customerEmail}</p>
                      < FaMapMarkerAlt size={24} /> 
                      <p>{order.customerContact}</p>
                  </div>
              ))}
          </div>
      </div>
  </div>
   
    );
}

export default OrdersList;
