import "../style/app.scss"
import React from "react"
import ReactDOM from 'react-dom'
import { Router,Route,IndexRoute,hashHistory,Redirect } from 'react-router'

import {Provider} from "react-redux"
import { store } from "../redux/store"

import Index from "./components/index.js"
import Home from "./components/home.js"
import Kind from "./components/kind.js"
import Liandou from "./components/liandou.js"
import Cart from "./components/cart.js"
import My from "./components/my.js"
import Productlist from "./components/productList.js"

ReactDOM.render(
	<Provider store={store}>
<Router history={hashHistory}>
	<Redirect from="/" to="/home"/>
	<Route path="/" component={Index}>
		<Route path="home" component={Home}/>
		<Route path="kind" component={Kind}/>
		<Route path="liandou" component={Liandou}/>
		<Route path="cart" component={Cart}/>
		<Route path="my" component={My}/>
	</Route>
	<Route path="productList/:type" component={Productlist}/>	
</Router>
</Provider>,
document.getElementById("root"))
