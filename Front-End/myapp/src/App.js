import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Checkout from "./Components/CheckOutComponents/Checkout";
import Payment from "./Components/PaymentComponents/Payment";
import Map from "./Components/MapComponents/Map";
import AdminDashboard from "./AdminComponents/AdminDashboardComponents/AdminDashboard";


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
            <Route path="/" exact={true}>
            <LandingPage/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
