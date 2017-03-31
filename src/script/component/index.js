import React from 'react'
import { Link } from 'react-router'


import Scroller from '../../component_dev/scroller/src'

import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from '../redux/store'

class Index extends React.Component{

    constructor (props) {
        super(props) 
    }

    render() {
        
        return (
        	<div className="box">
        		<header>
        			<div className="yo-header">
        				<h2 className="title">{this.props.value}</h2>
        				<span className="regret"></span>
        				<span className="affirm">确定</span>
        			</div>
        		</header>
        		
                <section>
                   {this.props.children} 
                </section>
        			 
        		
        		<footer>
        			<ul>
        				<li>
        					<Link to='/home' activeClassName="active">
                                <i className="yo-ico">&#xe608;</i>
                                <span>首页</span>
                            </Link>
        				</li>
                        <li>
                            <Link to='/list' activeClassName="active">
                                <i className="yo-ico">&#xe63c;</i>
                                <span>分类</span>
                            </Link>
                        </li>
        				<li>
        					<Link to='/car'activeClassName="active">
                                <i className="yo-ico">&#xe6f0;</i>
                                <span>购物车</span>
                            </Link>
        				</li>
        				<li>
        					<Link to='/my'activeClassName="active">
                                <i className="yo-ico">&#xe63e;</i>
                                <span>我的</span>
                            </Link>
        				</li>
        			</ul>
        		</footer>
        	</div>
        )
    } 
    componentDidUpdate() {
        //console.log(this.props.routes[1]);// 0是跟路由，1是当前的路由 里有属性title
        let title = this.props.routes[1].title
        this.props.onChange({
            type: 'SETTITLE',
            title: title
    })
  }
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
