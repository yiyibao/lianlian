
import React from 'react';
import { Link } from 'react-router' 


export default class Login extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			"result":""
		}
		this.login = this.login.bind(this);
	}

	render(){
		return (
			<div>
				<div className="yo-header">
					<h2 className="title">登录</h2>
					<Link to="/my"className="regret"><span className="yo-ico"></span></Link>
				</div>
				<div className="username register-input">
					<input type="text" placeholder="请输入用户名" ref="username"/>
				</div>
				<div className="password register-input">
					<input type="password" placeholder="请输入密码" ref="password"/>
				</div>
				<div className="register"><span className="register-btn" onClick={this.login}>登录</span></div>

				<div className="result">{this.state.result}</div>
			</div>
		)
	}


	login(e){
		var _btn = e.target;
		_btn.innerHTML = "登录中...";
		var that = this;
		var userName = this.refs.username.value;
		var password = this.refs.password.value;

		fetch("http://lianlianlife.duapp.com/login.php",{
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body:'username='+userName+'&password='+password
		}).then((res) => {
			return res.json();
		}).then((res) => {
			if(res.result == 1){
				
				that.setState({
					"result":"登录成功"
				})
				var name = res.username;
				// 把用户名保存到localStorage

				var storage = window.localStorage;
				
				storage.setItem("lianlianuser",name);
				
				setTimeout(() => {
					window.location.href='http://localhost:9999/#/my';
				},1000)
			}else if(res.result == 0){
				_btn.innerHTML = "登录";
				that.setState({
					"result":"用户名不存在或密码不正确"
				})
				
			}

		})
	}


	componentDidMount() {
		
	}
}





















