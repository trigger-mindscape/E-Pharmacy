import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './Components/Products/Products';
import PrivateRoute from './Helpers/PrivateRoute';
import VenderDashboardPage from './Pages/Admin/Vendor/VenderDashboardPage';
import LoginPage from './Pages/Authentication/LoginPage';
import RegistrationPage from './Pages/Authentication/RegistrationPage';
import CheckoutPage from './Pages/Checkout/CheckoutPage';
import Home from './Pages/Home/Home';
import OrderHistory from './Pages/OrderHistory/OrderHistory';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import AllShop from './Pages/Shop/AllShop';
import CreateShop from './Pages/Shop/CreateShop';
import ShopDetailsPage from './Pages/Shop/ShopDetailsPage';

const Navigation = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/registration">
            <RegistrationPage />
          </Route>
          <Route path="/shopDetails/:vendorId">
            <ShopDetailsPage />
          </Route>
          <PrivateRoute path="/checkout">
            <CheckoutPage />
          </PrivateRoute>
          <Route exact path="/productDetails/:productId">
            <ProductDetails />
          </Route>
          <PrivateRoute exact path="/vendor/:panel">
            <VenderDashboardPage />
          </PrivateRoute>
          <Route path="/allShop">
            <AllShop></AllShop>
          </Route>
          <Route path="/medicine">
            <Products></Products>
          </Route>
          <PrivateRoute path="/orderHistory">
            <OrderHistory></OrderHistory>
          </PrivateRoute>
          
          <Route path="/createShop">
            <CreateShop/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
};

export default Navigation;
