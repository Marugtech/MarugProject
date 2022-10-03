import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Person from './DeliveryComponents/PersondetailsComponents/Person';
//import Order from './DeliveryComponents/OrderComponents/Order';
import App from './App';
//import Headerdelivery from './DeliveryComponents/HeaderComponent/Header';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
   
      <App></App>     
    </React.StrictMode>
);


reportWebVitals();
