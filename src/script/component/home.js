import React from 'react'
import Carousel from '../../component_dev/carousel/src'
import Scroller from '../../component_dev/scroller/src'
import {loading} from '../../component_dev/loading/src'
import { Link } from 'react-router'
import $ from 'jquery'


//loading.show();
/*
constructor (props) {
    super(props)
    this.state = {
      title: '榜单 « 电影 « 豆瓣'
    }
  }
this.setState({
      title: type
    }

    <h2 className="title">{this.state.title}</h2>

    // JSON.parse(jsonstr); //可以将json字符串转换成json对象 
//JSON.stringify(jsonobj); //可以将json对象转换成json对符串 
 */
// let url = '/api'
// $.ajax({
// 	url:url,
// 	success:function(data){
// 		console.log(data)
// 	}
// })																													
// fetch("/api").then((res)=>res.json()).then((res)=>{console.log(res)})
export default class My extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			"lunbo":[],
			"nav_bar":[],
			"many_qian":[],
			"bikan":[],
			"miaosha":[],
			"miaosha_list":[],
			"jnqingm":[],
			"fantuan":[],
			"fantuan_list":[],
			"haoli":[],
			"haoli_html":[],
			"tejia":[],
			"tejia_list":[],
			"tejia_dong":[],
			"lipin":[],
			"remen":[],
			"more":[]

		}
	}
	componentDidMount(){
		var that =this;
		$.ajax({
			url:"http://lianlianlife.duapp.com/base.php",
			success:function(res){
				var data = JSON.parse(res)
				var lunboData = data.lunbo;
				var nav_bar = data.nav_bar;
				var many_qian = data.many_qian;
				var bikan = data.bikan;
				var miaosha = data.miaosha;
				var miaosha_list = data.miaosha_list;
				var jnqingm = data.jnqingm;
				var fantuan = data.fantuan;
				var fantuan_list = data.fantuan_list;
				that.setState({
					"lunbo" :lunboData,
					"nav_bar":nav_bar,
					"many_qian":many_qian,
					"bikan":bikan,
					"miaosha":miaosha,
					"miaosha_list":miaosha_list,
					"jnqingm":jnqingm,
					"fantuan":fantuan,
					"fantuan_list":fantuan_list,
					
				})

				loading.hide();
			}
		})
		// fetch("http://lianlianlife.duapp.com/base.php").then((res) => {
		// 	console.log(res)
		// 	return res
		// })
		
	}
	render (){
		
		return (
			<Scroller 
			extraClass={'preventDefault'}
			ref="scroller" usePullRefresh={true} onRefresh={() => {
				var that = this;
				setTimeout(() => {
					that.refs.scroller.stopRefreshing(true);
				},2000)
			}} useLoadMore={true} onLoad={() => {
				var that = this;
				$.ajax({
					url:"http://lianlianlife.duapp.com/homemore.php",
					success:function(res){
						var data = JSON.parse(res);
						// var haoli = data.haoli;
						// var tejia =data.tejia;
						// var tejia_list = data.tejia_list;
						// var tejia_dong =data.tejia_dong;
						// var lipin = data.lipin;
						// var remen =data.remen;
						var more = data.more;

						var more_html = more.map((value) => {
							return ( <img src= {value} /> )
						})
						
						setTimeout(() => {
							that.setState({
								"more":more_html
							})
							that.refs.scroller.stopLoading(true);
						},2000)
						
					}
				})
			}}>
				<div className="home_page_box">
					<Carousel delay={4}>
					    <li className="item"><img className="img lunbo-img" src={this.state.lunbo[0]} /></li>  
					    <li className="item"><img className="img lunbo-img" src={this.state.lunbo[1]} /></li> 
					    <li className="item"><img className="img lunbo-img" src={this.state.lunbo[2]} /></li>  
					    <li className="item"><img className="img lunbo-img" src={this.state.lunbo[3]} /></li>  
					</Carousel>
					<div className="list-widge-top">
						<a href="#"><img src={this.state.nav_bar[0]} /></a>
						<a href="#"><img src={this.state.nav_bar[1]} /></a>
						<a href="#"><img src={this.state.nav_bar[2]} /></a>
						<a href="#"><img src={this.state.nav_bar[3]} /></a>
						<a href="#"><img src={this.state.nav_bar[4]} /></a>
					</div>

					<div className="list-widge-top">
						<a href=""><img src={this.state.nav_bar[5]} /></a>
						<a href=""><img src={this.state.nav_bar[6]} /></a>
						<a href=""><img src={this.state.nav_bar[7]} /></a>
						<a href=""><img src={this.state.nav_bar[8]} /></a>
						<a href=""><img src={this.state.nav_bar[9]} /></a>
					</div>

					<div className="many-qian">
						<a href=""><img src={this.state.many_qian[0]} /></a>
					</div>

					<div className="scroll-loop">
						<img src={this.state.bikan[0]}/>
					</div>

					<div className="tody-miaosha">
						<a href=""><img src={this.state.miaosha[0]}/></a>
					</div>

					<Scroller scrollX={true}  scrollY={false}>
						<div className="x-scroll-box">
							<a href=""><img src={this.state.miaosha_list[0]} /></a>
							<a href=""><img src={this.state.miaosha_list[1]} /></a>
							<a href=""><img src={this.state.miaosha_list[2]} /></a>
							<a href=""><img src={this.state.miaosha_list[3]} /></a>
							<a href=""><img src={this.state.miaosha_list[4]} /></a>
							<a href=""><img src={this.state.miaosha_list[5]} /></a>
							<a href=""><img src={this.state.miaosha_list[6]} /></a>
						</div>
					</Scroller>
					<div className="jnqingm">
						<Scroller.LazyImage src={this.state.jnqingm[0]}/>
					</div>

					<div className="fantuan">
						<a href=""><Scroller.LazyImage src={this.state.fantuan[0]}/></a>
					</div>

					<div className="list-img-many">
						<Link to="/detail/12001" className="big-img" ><Scroller.LazyImage src={this.state.fantuan_list[0]} /></Link>
						<a className="small-img" href=""><Scroller.LazyImage src={this.state.fantuan_list[1]} /></a>
						<Link to="/detail/12002" className="big-img" ><Scroller.LazyImage src={this.state.fantuan_list[2]} /></Link>
						<a className="small-img" href=""><Scroller.LazyImage src={this.state.fantuan_list[3]} /></a>
						<Link to="/detail/12003" className="big-img" ><Scroller.LazyImage src={this.state.fantuan_list[4]} /></Link>
						<a className="small-img" href=""><Scroller.LazyImage src={this.state.fantuan_list[5]} /></a>
						<Link to="/detail/12004" className="big-img" ><Scroller.LazyImage src={this.state.fantuan_list[6]} /></Link>
						<a className="small-img" href=""><Scroller.LazyImage src={this.state.fantuan_list[7]} /></a>
					</div>

					

					<div className="haoli">
						{this.state.more}
					</div>
				</div>


			</Scroller>
		)
	}


}


