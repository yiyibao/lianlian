import React from 'react'
import {
	Link
} from 'react-router'
class Index extends React.Component {
	constructor(props) {
		super(props)

	}

	render() {
		return (
			<div className="m-index">
      		<header>
      		
      				<form className="yo-search">
      					<label className="action">
      						<span className="yo-ico">&#xe600;</span>
      						<input type="text" className="input" placeholder="下单30元去抽奖"/>
      				</label>
      				</form>
      		</header>
      		<section>
      		
      			{this.props.children}
      		
      		</section>
      		<footer>
      		<ul>
							<li>
							<Link to="/home" activeClassName="active">
									<i className="yo-ico">&#xe630;</i>
									<b>首页</b>
								</Link>
							</li>
							<li>
							<Link to="/list" activeClassName="active">
								<i className="yo-ico">&#xe76f;</i>
								<b>分类</b>
								</Link>
							</li>
								<li>
								<Link to="/liandou" activeClassName="active">
								<i className="yo-ico">&#xe9e9;</i>
								<b>联豆平台</b>
								</Link>
							</li>
								<li>
								<Link to="/cart" activeClassName="active">
								<i className="yo-ico">&#xe603;</i>
								<b>购物车</b>
								</Link>
							</li>
								<li>
								<Link to="/my" activeClassName="active">
								<i className="yo-ico">&#xe62c;</i>
								<b>我的</b>
								</Link>
							</li>
					</ul>
      	</footer>
      
      
      
      </div>
		)
	}

	componentDidMount() {

	}
}
export default Index