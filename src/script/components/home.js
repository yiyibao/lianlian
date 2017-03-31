import React from "react"

import HomeHeader from "./homeHeader.js"

import Carousel from '../../component_dev/carousel/src'
 class Home extends React.Component{

	render(){
		return (
			<div>
				<HomeHeader/>
				<div className="download">
					<span className="loadDele">x</span>
					<img src="images/ll-tag.png"/>
					<span className="dwname">联连Life客户端，好礼不断！</span>
					<a className="dwbutton" href="#">立即下载</a>
				</div>
                <div className="banner">
                    <Carousel speed={1} >
                        <li><img src="http://images.lianlian-resources.com/LianLian/EventAds/2017/03/13/636250114798336518_750_250.jpg"/></li>
                        <li><img src="http://images.lianlian-resources.com/LianLian/EventAds/2017/03/10/636247582300091943_750_250.jpg"/></li>
                        <li><img src="http://images.lianlian-resources.com/LianLian/EventAds/2017/03/23/636258824019039203_750_250.jpg"/></li>
                    </Carousel>
                </div>
			</div>
			)
	}
}
export default Home
