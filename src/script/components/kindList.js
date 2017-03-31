import React from "react"
import Scroller from "../../component_dev/scroller/src/"
import { loading } from '../../component_dev/loading/src';
// import Productlist from "./productList.js"
import { Link } from "react-router"
export default class KindList extends React.Component{
	constructor(props){
		super(props)
		this.state={
			categories:[],
			brands:[],
			style:'block'
		}
	}
	componentWillMount(){
		loading.show({
	        extraClass: 'yo-loading-b',
	        text: 'loading'
	    });
	}
	render (){
		// console.log(222,this.state.categories)
		return (
				<Scroller>
					<h2 className="hotCate">热门分类</h2>
					<ul>	
						{this.state.categories}
					</ul>
					<h3 className="hotBrands" ref="data">热门品牌</h3>
					<ul>	
						{this.state.brands}
					</ul>
				</Scroller>

			)
	}
	componentDidMount(){
		fetch("http://m.lianlianlife.com/Api/Category?pid="+this.props.url).then(res=>res.json()).then(res=>{
				// console.log(res.data.brands)
				// console.log(res.data.categories)
				console.log(this.props.url)
				let categoriesList=res.data.categories.map(val=>{
					// console.log(val.id)
					return (<li> <Link to={`productList/${val.id}&${val.name}`} ><div className="listImg"><img src={val.iconUrl}/></div><div>{val.name}</div></Link></li>)
				})
				// console.log(res.data.categories)
				// console.log(res.data.brands)
				let brandsList=res.data.brands.map(val=>{
					// console.log(val.name.split("/").join("%2F"))
					let newvname=val.name.split("/").join("%2F")//字符串处理
					return (<li><Link to={`productList/${this.props.url}&${val.id}&${newvname}`}><div className="listImg"><img src={val.iconUrl}/></div><div className="listName">{val.name}</div></Link></li>)
				})
				this.setState({
					categories:categoriesList,
					brands:brandsList,
				})
				if(this.state.brands.length==0){
					this.refs.data.style.display="none";
				}
				 loading.hide();
				// setInterval(function () {
			       
			 //      },2000)//定时器模拟loading
			
		})
		
	}

}