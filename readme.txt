一、git bash here
mdkr
cnpm init -y
ls -a
ls -l
ls -la隐藏的也可查看
cat package.json
二、npm
npm i webpack-dev-server -g
全局：任何目录运行
本地：本地需要调用附带的插件
npm list
npm list -g
npm uninstall supervisor -g 全局删除
npm remove supervisor -g全局删除，彻底卸载，再安装
npm i supervisor --save-dev||-D 开发依赖：项目上线不需要的，例如：babel、webpack
npm i jquery -S项目依赖-----dependencies
奇数非稳定版本
cnpm info jquery
升级---直接修改配置文件
cnpm update
^表示第一个版本号不变后面取最高
~表示第一第二个约定好
*取最新版本
--------------------------------版本升级问题：删除后修改json，在安装，mac上可能可以
npm outdated
rm -rf强制删除所有
npm cache clear清除缓存安装
nrm ls npm源
nrm test
nrm use taobao  ----切换源
npm脚本
npm run dev
三、git工具
本地仓库
远端仓库-remote
	gitLab/github---ssh
主干发布、分支开发
-----------------配置远程库---------------------------
gitignore----不上传服务器的文件夹
git config --global user.name
git config --global alias.ci commit----- 起commit别名ci
---------------clone下来-------------------
git clone ssh/https-----https公开自己代码
git st状态
---------------查看状态run起来----------------------------------------
git add .
git ci -am "asds"添加
git push
.........................创建分支..................................
git branch
git branch name创建分支不切换
git checkup -b name-2017-0223-bao-bugfix
git co -b name-2017-0223-bao-bugfix创建分支并切换
修改文件
git ci -am "adsd"
git push --set-upstream origin name分支上传
----------------------merge获取其他分支----------------------------------
在本地创建多个分支
git branch -r显示远端分支
open index.html
git co master------------主分支提交master
git merge origin/name 分支提交后在master上merge，master与分支合并做修改，保存本地库
git ci -am "merge-name"
git push发布

git log查看历史版本
$ git reset --hard 3628164
---------------------merge master-----------
其他分支与master同步
git checkout master----切换分支到master执行
git pull----即可完成master更新同步
git merge master??
git rebase master-----保持与本地一致
用rebase合并主干的修改，如果有冲突在此时解决
---------------------------------------------------
git br -a可看到远端所有分支
clone后新创建的分支拿到本地仓库方法：
git fetch origin newname
git fetch -p
git br
git co newname
git br-----即可拿到
open index.html
--------------------------
权限设置
Collaborators：添加Add collaboator
--------------总结----------------------
管理员merge----开发人员pull即可看到项目进度！


三、***********************webpack*************************
1、commonJS
2、require('./name'),斜杠-----本文件夹
require('name'),-----node_modules里

***********************布局*************************
build--------编译后发布代码文件夹
src-------------开发文件夹
	|---component_dev-------
	|---script-------js
	-----|---app.js
	-----|---component---组件
	-----|---redux
			|----store.js
		|---index.js
	|---style---------css
	|----index.ejs------模板改变也会生成新的hash值
			<title><%= htmlWebpackPlugin.option.title%></title>
index.html
package.json
webpack.config.js
.git

css、js、html，其他例如第三库CDN
img呢？服务器？
***********************webpack.json*************************
'script':{
	"build":webpack-dev-server
}
***********************webpack.config.js*************************
后端拿到html
前后端两个域名？run到一起
var webpack=require('webpack')
var htmlWebpackPlugin=require('html-webpack-plugin')--------引入插件
var ExtractTextPlugin=require('extract-text-webpack-plugin')
var openBrowserPlugin=require('open-browser-webpack-plugin')
mudule.exports={
	entry：{--------------可单页面入口。可多入口文件
		page1:'./src/app1.js',
		page2:'./src/app2.js'
	},
	output:{----------------js文件和其他生成的文件
		path:__dirname+'/build',------__dirname物理路径，后面build没有点，
		//filename:'app_[hash].js'---上线用
		filename：'app.js'---开发用
		//filename:'[name]_[hash].js'-----------生成多个js
	},
	devServer:{
		contentBase:'./build'-----------访问目录下的index.html--把index.html放到build里
		host:"localhost"---------域名
		port：'9000'----端口
		historyApiFallback:false  -------------是否使用H5的historyApi
		proxy:{-----------代理
			'/api':{----------------有api即认为访问后端，例如'/api/list.php'
				target:'http://localhost:3000'---地址栏有/api即跳到：3000
				pathRewrite:{'^/api',''}------------干掉'./api'
				changeOrigin:true---------------------跨域，非本地跨域
			}

		}

	},
	module:{
		loaders:[
//			{-->非抽离声明
//				test:/\.css$/,------css打包到js
//				loader:'style-loader!css-loader'
//			},
			{
		        test: /\.css$/,
		        loader: ExtractTextPlugin.extract({
		          fallback: 'style-loader',
		          use: 'css-loader'
		        })
	        },
//			 {
//				test:/\.scss$/,------css打包到js
//				  exclude: /node_modules/,--------------刨除哪个!!!
//				loader:'style-loader!css-loader!sass-loader'
//			}, -->非抽离声明
			{
				test:/\.scss$/,
				loader:ExtractTextPlugin.extract({--------抽离声明
					fallback:'style-loader',------------------------解析最后一个loaderextract,这个案例是style，解析的是css
					use:'css-loader!sass-loader'----------------不要重复声明style-loader
				})
			},
	      	{
		        test: /\.js$/,
		        exclude: /node_modules/,--------------刨除哪个!!!
		        loader: 'react-hot-loader!babel-loader'---------------react热替换，厉害了
	      	}
		]
	},
	plugin:[
		new htmlWebpackPlugin({--------------html文件自动生成插件实例化，有自己的默认模板
			filename:'index.html',-----------------输出的文件名，会生成带有hash值的js
			template:'./src/index.ejs',------------模板文件
			title:'豆瓣电影'
		}),
		new ExtractTextPlugin({-------------------解析抽离css并会在index.html加link标签
			filename:'app_[hash].css',----------------可加版本号
			disable:false,-------true关闭
			allChunks:true---------------入口文件
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress:{----------------压缩，最后上线需要一次
				warning:false-------是否显示错误信息，false不显示
			},
			output:{
				comments:false----------是否需要注释，false不需要
			}
		}),
		new openBrowserPlugin({ url: 'http://localhost:8080' })------------------webpack 启动后自动打开浏览器插件!!!!1!!厉害了
	],
	externals:{------------------抽离js第三方类库
		"react":"window.React",----------配置后不会打包react，手动打包即可,包特别大
		"react-dom:"window.ReactDOM"
		"react-router":"window.ReactRouter"
		"redux":"window.Redux"
		'react-redux':'widow.ReactRedux'
	}
}

ELEMENT解析与源码不同
源码---是后台ng、rg之后的

css/js版本控制，服务器缓存原来版本----回滚---使用构建工具
哈希值hash-----根据内容算法生成来css、js控制版本

npm install html-webpack-plugin---------------------html自动生成插件
npm i sass-loader -D
npm react-hot-loader -D---------------------react热替换
npm i babel-preset-react -D----------------react预设
npm i extract-text-webpack-plugin -D-----------------抽离文本插件
npm i react-dom -S--------------项目依赖
npm i open-browser-webpack-plugin---------------
require---Es5
import from ---Es6

1、const Index='sd'
export {Index}
import {Index} from index.js
2、const Index='sd'
export {Index as defult}
import Index from index.js---------------Index花括号就不用了
***********************babel编译器安装*************************
babel-core---------------babel-loader调用
babel-loader------------编译
babel-preset-es2015 -D-----------编译es6

react-hot-loader!babel-loader----------------------react热替换


***********************babel*************************

jsx------babel解析,webpack直接可以识别Es6语法，不过jsx还是需要babel来解析,babel还可以解析Es7位es5

{
	"preset":["es2015","react","stage-0"]
}
***********************packge.json*************************

"babel-polyfill":"^6.23.0"---------------------低版本andrio不支持则降低版本，很重要！！
四、***********************mock数据*************************
npm i json-server -g-----------安装
json-server src/mock.js--------启动服务，启动mock.js文件
mock.js

var list = require('./list.json')
module.exports = function() {
  return {
    'list.php': list
  }
}
访问localhost：3000

在fetch里fetch("/api/kind2.php").then(res=>res.json()).then(res=>{})
--------------------------------
 componentDidMount() {
    fetch('/api/list.php')
    .then(response=>response.json())
    .then(res=>{
      // console.log(res);
      this.setState({
        name: <div>{res.name}</div>
      })
    })
  }

五、reset.css公共样式



六、搭建页面结构
andriod
ios
woff、ttf-------------多次设置font-face会merge并不会覆盖
//CDN简写
@font-face{
	font-family:yofont;
	src:url(/icofont/iconfont.woff) format("woff"),
	url(/iconfont/iocnfont.ttf) format('truetype')
}
1像素线、、、、、、、、、、、、、、、
空元素相对定位
伪元素：绝对定位
根据dpr缩放
七、react-router

"react-router": "^3.0.2"--------------用4.0版本会没有ReactRouter.min.js,引用react-router.min.js会报Cannot read property 'location' of undefined
引用ReactRouter.min.js

react-router.min.js-------------一般用后端开发

<Link to=''/>
<Router>
<IndexRoute component={}/>
<Route path='' component={}/>
</Router>
抽离后要在ejs里引文件，否则找不到
父组件获得子组件的参数------------------
子组件通过this.props.onClickHandler.bind(this,"abc")
	-------------onClickHandler是父组件定义的方法，abc是子组件的参数，通过函数传给父组件
也可以-----------子组件设置this.state={data:'abc'},,父组件在设置ref="abc"，在ditmount中this.refs.state.data
子组件获得父组件的属性方法----------父组件设置属性与方法，子组件this.props.name获得
八、API
mock数据
share.baidu.com----------------------百度分享
mern----------------------react-cli
九、组件YO
npm i babel-preset-stage-0 -D
十、redux
onEnter事件可以检测路由切换
组件渲染从内向外
Didmountupdate中也可以检测路由切换
Index中包含自己及切换的子路由
cnpm i react-redux -S
*************************************十、redux***********************************************
拷贝redux，react-deux
ejx要添加
connect ----------react-redux
connect(mapStateToProps,mapDispatchToprops)(Index)


路由
引入{Provider}
{store}
<Provider store={store}>



</Provider>
某个组件状态需要共享
某个状态需要在任何地方都能拿到
一个组件需要改变全局状态
一个组件需要改变另一个组件的状态
**************************************YO框架**********************************************
base:设置html里的font-size--------------------YO框架以640的iphone5做的，
iphone6,1vw=0.26666666px=100/375
**************************************history*************************
browserhistory:h5的，浏览器就不会有#了
browserhistory.goBack();goFoward()
改用browserhistory,用事件定义跳转，hashhistory  Link方法就不适用了
******************************路由传参***************************************
path="/list/:type"-------------设置动态路由
取type方法：this.props.params
************************touch-action**************************
touch-action:none

手机里无webpack，无法调用线上数据
1、放json里，
2、放服务器，装ngix，方向代理
3、放数据库。


************************nginx**************************
http://nginx.org/en/download.html下载地址
homebrew安装moc ------------ 


start nginx
nginx -s stop

 gzip  on压缩传输
pwd


nginx的使用
1、修改conf/nginx.conf
把nginx.conf里的server下的全部注释掉，（35-79行）
把gizp on解注释，添加  include ../conf.d/*.conf;
2、建conf.d文件夹，建工程名的配置文件，配置如下：
server{
	listen 80;----一般都是80
	server_name localhost;
	root E:/lianlianLife/dev/build;
}
3、启动nginx，访问localhost即可
************************nginx**************************
************************前后端联调**************************
Postman

HostAdmin App----C:\Windows\System32\drivers\etchosts-------host文件位置
127.0.0.1 ----------- localhost-------域名解析--先走本地
ip计算识别，一个ip可以有多个域名
如何清除DNS缓存
src="http://www.douban.com/libs/"------index.html配置
ping www.baidu.com得到网页ip
ip+域名设置--------------得到远端
ipconfig/flushdns-----------刷新DNS解析缓存
跨域：
cors、
jsonp
window.name
nginx方向代理

location /api{
		proxy_pass http://localhost:3000
	}

modal---组件
stuo nginx
nginx杀掉进程的方法----taskkill /fi "imagename eq nginx.EXE" /f，可以杀死名字为
nginx.EXE的所有进程
http://www.cnblogs.com/CoreXin/p/5566607.html


http://blog.csdn.net/u010977147/article/details/53489160l两个参数解决