import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextProvider from './Admin/Context/context.jsx';
import CartContextProvider from './User/Cart_context/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <CartContextProvider>
        <BrowserRouter />
        <App />
        <BrowserRouter />
      </CartContextProvider>
    </ContextProvider>

  </React.StrictMode>,
)