启动文件是app.js
html模板是 index.ejs
html模板里引入外部的js 注意依据build文件夹引入，外部的js文件都放在了build文件下的libs里面

devServer: {
    contentBase: './build',
    host: 'localhost',
    port: 8000,
    historyApiFallback: false,
    //inline:true, //实时刷新
    proxy: {
      '/api': {
	        target: 'http://localhost:3000',
	        pathRewrite: {'^/api': ''}
 		}
	}
 }
当访问http://localhost:8000/api/会访问3000端口的服务，http://localhost:3000
http://localhost:8000/api/list.php  api后面的list.php路径会自动加到3000后面http://localhost:3000/list.php，这样就是方向代理来mock数据
json-server http://localhost:3000/list.php


加载之前的图片
http://images.lianlian-resources.com/LianLian/EventAds/2015/12/30/635870885921806977_295_295.png

constructor(props) {
        super(props);
        this.state = {
            "name":"liu"
        }
        this.userRegister = this.userRegister.bind(this);
    }也可以将绑定方法写到constructor中：

fetch("http://lianlianlife.duapp.com/register.php",{
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body:'username='+userName+'&password='+password
        }).then((res) => {
            return res.json()

fetch 传到下个函数别忘了加return
数字和字符串对象可以执行return res.json() 在下一个then可得到返回的数据

注册逻辑 ：一步步注册成功，跳转页面，欢迎谁登录
@import './component/register';必须加分号

==============================================================

<div className="yo-header">
    <h2 className="title">注册</h2>
    <Link to="/my"className="regret"><span className="yo-ico"></span></Link>
</div>

this.refs.login_regis_content

==========================================================================
var url = window.location.href;

function getUrlSearch(url,name){
    var position = url.indexOf("?");
    var search = url.substr(position+1);
    var name = search.substr(search.indexOf("=")+1)
    return name;
}

var username = getUrlSearch(url);


export default class Login extends React.Component{
不能放在组件外面，因为每次渲染的是组件，外部的不执行
=======================================================
组件引入
import Carousel from '../../component_dev/carousel/src'
import Scroller from '../../component_dev/scroller/src'

import Dialog from '../../component_dev/dialog/src'
-----------------------------------------------------
API引入
import {loading} from '../../component_dev/loading/src'
=======================================================================
给Scroller的父元素加
.detailbox{
    width:100%;
    height:100%;
    touch-action:none;
========================================================






