
import React from 'react'

import { Link } from 'react-router'

import Fetch from '../utils/fetch'

import List from '../../component_dev/list/src'

import $ from 'jquery'

class Car extends React.Component{
	constructor(props) {
    	super(props);
    	this.state = {
    		"carlist":[{}]
    	}
    	
  	}

	render() {
		let guid = -1;
		
		
		
		return (

			<div className="carbox">

				<div className="login" ref="login">
					<div className="nologin">你还没有登录，请登录</div>
					<Link to="/login">
						<div className="gotologin" >前去登录</div>
					</Link>
				</div>

				<div ref="gotohome" className="carkong">
					<span >购物车空空也</span>
					<Link to="/" ><div className="kongcar" >去首页逛逛</div></Link>

				</div>
				
				<div className="carlist" ref="carlist">

					<List
					    dataSource={this.state.carlist}
					    renderItem={(item,i)=>{
					    	if(i<this.state.carlist.length-1){
					        return (
					           	<div className="goodslist" ref="goodslist">
 									<div className="leftimg">
										<img src={item.goodsimgurl}/>
									</div>	

									<div className="rightfont">
										<div className="goodsname">{item.goodsname}</div>
										<div className="price">￥{item.goodsprice}</div>
									</div>	
					           	</div> 
					        )}
					    }}
					/>
					
				</div>

			</div>
		)
	}
	componentWillMount(){
		//this.refs.login.style.display = "none";
		//this.refs.gotohome.style.display = "none";
		/*
			<li class="item"></li> 后面的为元素有样式border-color: #ccc;
			    border-style: solid;
			    border-width: 0 0 1px;
		*/
		
	}

	componentDidMount(){
		
		var that = this;
		
		var username = window.localStorage.getItem("lianlianuser");
		//console.log(username)//null
		if(!username){//没有登录
			this.refs.login.style.display = "block";
			
		}else{

			var body = {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body:'username='+username
			}


			Fetch("http://lianlianlife.duapp.com/findcar.php",body,(res) => {
				//console.log(res.length)//没有加入购物车的商品，也会返回一个数组
				if(res.length !== 1){
					//console.log("加载完毕")
					this.refs.carlist.style.display = "block";
				}else{//没有商品
					this.refs.gotohome.style.display = "block";
					
				}
				//res.pop(res.length-1);
				that.setState({
					"carlist":res//dataSource={this.state.carlist}不能为空数组
				})
				
				
			})
		}

		
		

	}
}

export default Car