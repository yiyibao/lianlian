require('../style/app.scss')
import React from 'react'
import ReactDOM from 'react-dom'
import {
	Router,
	Route,
	IndexRoute,
	IndexRedirect,
	hashHistory
} from 'react-router'

import {
	Provider
} from 'react-redux'
import {
	store
} from './redux/store'
import Index from './component/index.js'



import Home from './component/home'
import Cart from './component/cart'
import My from './component/my'
import List from './component/list'
import Liandou from './component/liandou'
import Login from './component/login';
import Register from './component/register';
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Index}>
		<IndexRedirect to="/home"></IndexRedirect>
			<Route path='home' component={Home}></Route>
			<Route path='list' component={List}></Route>
			<Route path='liandou' component={Liandou}></Route>
			<Route path='cart' component={Cart}></Route>
			<Route path='my' component={My}></Route>
		</Route>
		<Route path="/register" component={Register}/>
		<Route path="/login" component={Login}/>
</Router>,

	document.getElementById('root')
)