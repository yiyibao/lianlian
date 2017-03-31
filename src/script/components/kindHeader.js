import React from "react"

export default class HomeHeader extends React.Component{
	refresh(){
		location.reload(true)//false从缓存中获得，true则从服务器获得
	}
	render(){
		return (
			<div>
				<header className="yo-header">
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
