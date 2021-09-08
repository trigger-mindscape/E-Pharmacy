import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from '../Components/Home/Login/LoginForm';
import Header from '../Components/Home/NavBar/Header';
import NavBar from '../Components/Home/NavBar/NavBar';
import Checkout from '../Components/Checkout/Checkout';
import Home from '../Pages/Home/Home';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';
import ShopDetails from '../Components/Home/ShopCard/ShopDetails/ShopDetails';

const Navigation = () => {
    return (
        <div>
            <Router>
                <Header />
                <NavBar/>
                <Switch>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/login">
                        <LoginForm/>
                    </Route>
                    <Route exact path="/registration">
                        <LoginForm/>
                    </Route>
                    <Route path="/shopDetails/:vendorId">
                        <ShopDetails/>
                    </Route>
                    <Route path="/checkout">
                        <Checkout></Checkout>
                    </Route>
                    <Route exact path="/product">
                        <ProductDetails/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Navigation;
