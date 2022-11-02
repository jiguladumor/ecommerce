import React from 'react'
import About from '../About/About'
import Addtocart from '../Admin/Addtocart'
import Order_admin from '../Admin/Order_admin'
import Placeorder from '../Admin/Placeorder'
import ProductDetails from '../Admin/ProductDetails'
import Category_admin from '../Admin/Category_admin'
import Product_admin from '../Admin/Product_admin'
import Blog from '../Blog/Blog'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Shope from '../Shope/Shope'
import { Switch } from 'react-router'
import PublicRoute from './PublicRoute'

export default function AppRoute() {
  return (
    <div>
            <Switch>
            <PublicRoute exact path={"/Home"} component={Home} />
            <PublicRoute exact path={"/About"} component={About} />
            <PublicRoute exact path={"/Blog"} component={Blog} />
            <PublicRoute exact path={"/Shope"} component={Shope} />
            <PublicRoute restricted={true} exact path={"/Login"} component={Login} />
            <PublicRoute exact path={"/Category_admin"} component={Category_admin} />
            <PublicRoute exact path={"/Product_admin"} component={Product_admin} />
            <PublicRoute exact path={"/ProductDetails"} component={ProductDetails} />
            <PublicRoute exact path={"/Placeorder"} component={Placeorder} />
            <PublicRoute exact path={"/Order_admin"} component={Order_admin} />
            <PublicRoute exact path={"/Addtocart"} component={Addtocart} />
            </Switch>    
    </div>
  )
}
