
import Toast from '../../../component_dev/toast/src'

import React from 'react'

import { Link } from 'react-router'

import Fetch from '../../utils/fetch'

import Scroller from '../../../component_dev/scroller/src'

class Detail extends React.Component{
	constructor(props) {
    	super(props);
    	this.state = {
    		"goodsimgurl":"",
    		"goodsname":"",
    		"goodsprice":""
    	}
    	this.addcar = this.addcar.bind(this);
    	
  	}

	render() {
		
		return (
			<div className="detail">

				<div className="detailcontent">
					<Scroller>
						<div className="detailimg">
							<img src={this.state.goodsimgurl}/>
						</div>
						
						<div className="goodsname">{this.state.goodsname}</div>
						
						<div className="price">￥{this.state.goodsprice}</div>

						<div className="goodsdetailimg"><img src="http://lianlianlife.duapp.com/images/goods.png"/></div>
					</Scroller>
					

					
				</div>
				
				

				<div className="detailfooter">
					<div className="kefu footer"><img src="http://lianlianlife.duapp.com/images/kefu.png"/></div>
					<div className="addcar footer" onClick={this.addcar}>加入购物车</div>
					<div className="purchase footer">
						<span>立即购买</span>
					</div>

				</div>
			</div>
		)
	}

	componentDidMount(){
		var that = this;
		var goodsid = this.props.params.detailid;
		var body = {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body:'goodsid='+goodsid
			}


		Fetch("http://lianlianlife.duapp.com/detail.php",body,(res) => {
			var data = res[0];
			that.setState({
				"goodsimgurl":data.goodsimgurl,
				"goodsname":data.goodsname,
				"goodsprice":data.goodsprice
			})
		})
	
	}

	addcar(){
		var username = window.localStorage.getItem("lianlianuser");
		if(username){
			var goodsid = this.props.params.detailid;
			var goodsimgurl = this.state.goodsimgurl;
			var goodsname = this.state.goodsname;
			var goodsprice = this.state.goodsprice;
			var goodsnum = 1;
			var body = {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body:'username='+username+'&goodsid='+goodsid+'&goodsimgurl='+goodsimgurl+'&goodsname='+goodsname+'&goodsprice='+goodsprice+'&goodsnum='+goodsnum
			}
			Fetch("http://lianlianlife.duapp.com/car.php",body,(res) => {
				if(res){
					Toast.show('添加购物车成功');
				}
				
			})

		}else{
			Toast.show('您还没有登录，请登录',1000);
		}
	}
}

export default Detail



























