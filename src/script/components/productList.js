import React from "react"
import List from "../../component_dev/list/src/"
import HomeHeader from "./homeHeader"
import { loading } from '../../component_dev/loading/src';
import LazyImage from "../../component_dev/lazyimage/index.js"
export default class Productlist extends React.Component{
	constructor(props){
		super(props)
		this.state={
			prolist:["",""]
		}
	}
	componentWillMount(){
		loading.show({
	        extraClass: 'yo-loading-b',
	        text: '正在加载...',
	        maskOffset:[200,100],
	        modalExtraClass:"yo-loading-p"
	    });
	}
// 	// sortList(e){//通过e事件对象获取DOM节点
// 	// 	e.target.style.color="red"
// 	// 	// console.log(e.target);
// 	// 	// console.log(this.state.prolist);
// 	// }
	render(){
		
	
	// console.log(this.state.prolist)
		return(
			<div>
				<HomeHeader/>
				<ul className="prolistOrd">
					<li >综合排序</li>
					<span>|</span>
					<li  className="newSort">上新排序</li>
					<span>|</span>
					<li>价格排序<i className="yo-ico">&#xf07b;</i></li>
					<span>|</span>	
					<li>筛选</li>	
				</ul>
			    <List
					ref="scroller"
				  
				    extraClass = {'yo-list-fullscreen'}
				    onItemTap={(item,index,target) => {
				       console.log(target)
				       console.log(item)
				       console.log(index)
				    }}
				    // infinite = {true}
				     usePullRefresh={true}
					onRefresh={() => {
						let that=this;
				       fetch("http://localhost:3000/prolist2.php")
				       	.then(res=>res.json())
				       	.then(res=>{
							let Productlist=res.data.items.map(val=>{
								val.key=val.id
								// console.log(val.key)
								return val
							})
				       		that.setState({
				       			prolist:Productlist.concat(that.state.prolist)
				       		})
				       		// console.log(2222,this.state.prolist)
				       		that.refs.scroller.stopRefreshing(false);// 这个调用也可以放在异步操作的回调里之后
				       })   
					  }}
	                  useLoadMore={true}
	                  onLoad={() => {
					        fetch("http://localhost:3000/prolist2.php")
						       	.then(res=>res.json())
						       	.then(res=>{
									let Productlist=res.data.items.map(val=>{
										val.key=val.id
										// console.log(val.key)
										return val
									})
						       		this.setState({
						       			prolist:(this.state.prolist).concat(Productlist)
						       		})
						       		// console.log(2222,this.state.prolist)
							        this.refs.scroller.stopLoading(false); // 这个调用也可以放在异步操作的回调里之后
						       })   
					    }}
	                   dataSource={this.state.prolist} 	
				    renderItem={(item,i)=>{ 
				    	// console.log(item)
				    	if(item){
				    		 return (
					            <div>
					                <li className="prolist">
					                	<div className="lazyimage">
					                		<List.LazyImage height="100" src={item.image}/>
						              	</div>
						                <div>
	  										<h2>{item.title}</h2>
							                <span className="proname">{item.name}</span>
											<span className="keyWords">{item.keyWords}</span>
							                <span className="proprice">￥{item.sellingPrice}</span>
						                </div>
						              
					                </li>
					            </div>    
					        );
				    	}
				    }}
				     itemHeight={100}
			    />
			</div>	
			)
	}
	
	componentDidMount(){
		 console.log(this.props.query);
		let params1=this.props.params.type.split("&")
		if(params1.length==2){
			fetch(`http://m.lianlianlife.com/Api/Products?categoryId=${params1[0]}&keywords=${params1[1]}&fromp=-1&categoryName=&brandName=&supplierName=&isDesc=true&sortItem=topCarriageAt&pageSize=10&pageNumber=1&imageFormatter=200_200`)
		  //fetch("http://localhost:3000/prolist1.php")
			.then(res=>res.json())
			.then(res=>{
				let Productlist=res.data.items.map(val=>{
					val.key=val.id
					// console.log(val.key)
					return val
				})
				// console.log(Productlist)动态添加key值
				this.setState({
					prolist:Productlist
				})
				 loading.hide();
			   
			})
		}else if(params1.length==3){
			 fetch(`http://m.lianlianlife.com/Api/Products?categoryId=${params1[0]}&brandId=${params1[1]}&keywords=${params1[2]}&fromp=-1&categoryName=&brandName=&supplierName=&isDesc=true&sortItem=topCarriageAt&pageSize=10&pageNumber=1&imageFormatter=200_200`)
		 //fetch("http://localhost:3000/prolist1.php")
			.then(res=>res.json())
			.then(res=>{
				let Productlist=res.data.items.map(val=>{
					val.key=val.id
					// console.log(val.key)
					return val
				})
				// console.log(Productlist)动态添加key值
				this.setState({
					prolist:Productlist
				})
				 loading.hide();
			   
			})
		}
		 
		
	}
}


