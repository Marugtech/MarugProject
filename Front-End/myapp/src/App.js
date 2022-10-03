import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Checkout from "./Components/CheckOutComponents/Checkout";
import Payment from "./Components/PaymentComponents/Payment";
import Map from "./Components/MapComponents/Map";
<<<<<<< HEAD
import Admin from "./AdminComponents/Admin"
import Merchant from "./MerchantComponents/MerchantBodyComponents/MerchantBody";
import Delivery from "./DeliveryComponents/OrderComponents/Order";
import Person from './DeliveryComponents/PersondetailsComponents/Person';
import Setting from "./AdminComponents/Settings/SettingData";
import Ratings from "./AdminComponents/Ratings/Ratings";
//import CustomerData from "./AdminComponents/CustomerComponent/CustomerData";
=======
import AdminDashboard from "./AdminComponents/AdminDashboardComponents/AdminDashboard";


>>>>>>> a76c19d6d2c0d384da67c1d2ceadea671810b5c7
function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route path="/checkout" exact={true}>
              <Checkout />
            </Route>
            <Route path="/payment"  exact={true} >
             <Payment/>
            </Route>
            <Route path="/dashboard"  exact={true} >
             <AdminDashboard/>
            </Route>
            <Route path="/map" exact={true}>
            <Map/>
            </Route>
            <Route path="/Admin" exact={true}>
            <Admin/>
            </Route>
            <Route path="/Merchant" exact={true}>
            <Merchant/>
            </Route>
            <Route path="/Delivery" exact={true}>
            <Delivery/>
            </Route>
            <Route path="/Person" exact={true}>
            <Person/>
            </Route>
            <Route path="/Setting" exact={true}>
            <Setting/>
            </Route>
            <Route path="/Rating" exact={true}>
            <Ratings/>
            </Route>
            <Route path="/" exact={true}>
            <LandingPage/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
