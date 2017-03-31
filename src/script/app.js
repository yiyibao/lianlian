
require("../style/app.scss")

import React from 'react';
import ReactDOM from 'react-dom';
import Index from './component/index';
import Home from './component/home';
import List from './component/list';
import Car from './component/car';
import My from './component/my';
import Login from './component/sonpage/login';
import Register from './component/sonpage/register';
import Detail from './component/sonpage/detail'
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router'

//import Muti from '../component_dev/multilist/test/demo.js'

import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={Index}>
				//<IndexRoute component={Home}></IndexRoute>
				<IndexRedirect to="/home"></IndexRedirect>
				<Route path='home' title="首页"component={Home} />
				<Route path='list'title="列表" component={List} />
				<Route path='car'title="购物车" component={Car} />
				<Route path='my'title="我的" component={My} />
			</Route>

			<Route path='/register' component={Register} />
			<Route path='/login' component={Login} />
			<Route path='/detail/:detailid' component={Detail} />
		</Router>
	</Provider>,
	document.getElementById('root')
)
/*
点击路由 Index组件会重新渲染一次
*/
