import React from 'react'
import {
	Router,
	Route,
	Link,
	IndexRoute,
	IndexRedirect,
	hashHistory
} from 'react-router'
class My extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				username: '',
				isshow: "false",

			}
			this.exit = this.exit.bind(this)


		}

		exit() {
			localStorage.removeItem("username");
			this.refs.loginchakan1.style.display = "block";
			this.refs.loginchakan2.style.display = "block";

			this.setState({
				username: '',
				isshow: "true",

			})
		}
		render() {
				return (
						<div className="m-my">
		        	<div className="my-header">
		       		 	<div className="wrap">
							<div className="hi">
		        				Hi,登录查看订单和联豆吧
		        			</div>
		        			<div className="huanying" ref="chufa" style={{display:this.state.isshow == "false" ? 'block': 'none' }}>欢迎{this.state.username}登录</div>
		        			<div className="input">
		        				<Link to="/login" className="login">登录</Link>
		        				<Link to="/register" className="register">注册</Link>
		        				<button className="exit" onClick={this.exit}>退出</button>
		        			</div>
		        		</div>
		      		</div> 
		      		<div className="my-list">
		      		<ul className="account-list grid">
        				<li className="ll-ui-row" ref="chakan">
           					 <div className="cell icon">
								<i className=" icon-image icon-menu-address"></i>
            				</div>
            				<div className="cell cell-address">收货地址</div>
            				<div className="cell icon-a">                
                   				<span className="look" ref="loginchakan1">登录查看</span>
                
								
            				</div>
        				</li>
        				<li className="ll-ui-row">
            				<div className="cell icon">
               					 <i className="icon-image tuihuo"></i>
           					 </div>
           					 <div className="cell cell-address">我的退换货</div>
            				<div className="cell icon icon-a">
                
                   				 <span className="look" ref="loginchakan2">登录查看</span>
                
                				
            				</div>
        				</li>
    				</ul>
    				</div>
		      	< /div>			
		)}

	componentDidMount() {
		var app = localStorage.getItem("userID");
		var chufa = this.refs.chufa;
		

		if(app){
			
			chufa.style.display="block";
			this.refs.loginchakan1.style.display="none"
			this.refs.loginchakan2.style.display="none"
		}else{
			chufa.style.display="none";
			
		}

		console.log("app:" + app);

		this.setState({
			username: app,

		})



	}

}

export default My