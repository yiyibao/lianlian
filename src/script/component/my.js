
import React from 'react'

import { Link } from 'react-router'

import Dialog from '../../component_dev/dialog/src'

export default class My extends React.Component{

	constructor(props) {
    	super(props);
    	this.state = {
    		"result":"",
    		"show":false,
    		"username":""
    	}
    	this.tuichu = this.tuichu.bind(this);
  	}

	render (){
		return (
			<div className="my-container" ref="my_container">
				
				<div className="lo-res-box" ref="login_regis_content">
					<Link to='/login'><span className="login btn">登录</span></Link>
					<Link to='/register'><span className="register btn">注册</span></Link>
				</div>

				<div className="register_success" ref="register_success">
					<h2 className="huanying">欢迎{this.state.username}</h2>
				</div>

				<div className="m_setting">
					<div className="address m_setting_item">收货地址</div>
					<div className="m_setting_item">我的退换货</div>
					<div className="m_setting_item">抽奖记录</div>
					<div className="m_setting_item">我的优惠券</div>
					<div className="m_setting_item">常见问题</div>
					<div className="m_setting_item">联系客服</div>
					<div className="m_setting_item">关注我们</div>
					<div className="m_setting_item" ref="tuichulogin" onClick={this.tuichu}>退出登录</div>
				</div>

				<Dialog show={this.state.show} 
					onOk={() => {
						this.setState({
    						"show":false
    					})
    					window.localStorage.removeItem("lianlianuser");
    					this.refs.login_regis_content.style.display = "block";
						this.refs.register_success.style.display = "none";
						this.refs.tuichulogin.style.display = "none";
					}}
    				onCancel={() => {
    					this.setState({
    						"show":false
    					})
    				}} >
   					<p>the dialog context</p>
				</Dialog>


			</div>
		)
	}


	componentDidMount() {
		// var url = window.location.href;
		// var username = getUrlSearch(url,"username");
		var username = window.localStorage.getItem("lianlianuser");

		if(username){
			this.refs.login_regis_content.style.display = "none";
			//直接删除节点
			// var login_regis_content = this.refs.login_regis_content;
			// this.refs.my_container.removeChild(login_regis_content);

			this.refs.register_success.style.display = "block";
			this.refs.tuichulogin.style.display = "block";
			this.setState({
				"username":username
			})

		}else{
			this.refs.login_regis_content.style.display = "block";
			this.refs.register_success.style.display = "none";
			this.refs.tuichulogin.style.display = "none";
		}
	}

	tuichu(){
		this.setState({
    		"show":true
    	})
		
	}

	componentDidUpdate(){
		
	}
} 







function getUrlSearch(url,name){
	var position = url.indexOf("?");
	if(position != -1){
		var search = url.substr(position+1);
		var username = search.substr(search.indexOf("=")+1)
		return username;
	}
	return "";
}










