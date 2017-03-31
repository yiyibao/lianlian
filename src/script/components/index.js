import React from 'react'
import {Link} from "react-router"
import { connect} from "react-redux"
import { mapStateToProps , mapDidpathToProps} from "../../redux/store"
 class Index extends React.Component {
	constructor (props){
		super(props);
	}
	render(){
		return (
		<div className="app">	
			<div className="section">{this.props.children}</div>
			<footer className="footer">
				<ul>
					<li className="active"><Link to="home" activeClassName="active"><i className="yo-ico">&#xe630;</i><b>首页</b></Link></li>
					<li><Link to="kind" activeClassName="active"><i className="yo-ico">&#xe76f;</i><b>分类</b></Link></li>
					<li><Link to="liandou" activeClassName="active"><i className="yo-ico">&#xe9e9;</i><b>联豆商城</b></Link></li>
					<li><Link to="cart" activeClassName="active"><i className="yo-ico">&#xe603;</i><b>购物车</b></Link></li>
					<li><Link to="my" activeClassName="active"><i className="yo-ico">&#xe62c;</i><b>我的</b></Link></li>
				</ul>
			</footer>
		</div>	

			)
	}
}
export default connect(
mapStateToProps,
mapDidpathToProps
)(Index)