import React from "react"
import { browserHistory } from 'react-router'

export default class HomeHeader extends React.Component{
	back(){
		browserHistory.goBack()
	}
	refresh(){
		location.reload(false)//false从缓存中获得，true则从服务器获得
	}
	render(){
		return (
			<div>
				<header className="yo-header-a">
					
					 <i className="yo-ico regret" onClick={this.back}>&#xf0343;</i>
					<form className="yo-search">
						<label className="action">	
							<span className="yo-ico">&#xe65e;</span>
							<input className="input" type="text" placeholder="请输入关键字" />
						</label>
					</form>
					<i className="yo-ico affirm" onClick={this.refresh}>&#xe67a;</i>

					
				</header>
			</div>
		)

	}

}
