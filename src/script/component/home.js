import React from 'react'
import Homechao from './home-chao'
import Carousel from '../../component_dev/carousel/src'
import Scroller from "../../component_dev/scroller/src/"
import {
  loading
} from '../../component_dev/loading/src'
import fetchData from '../util/util.fetch.js'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperList: [<div/>],
      srollList: [<div/>]

    }
  }

  render() {
    // loading.show({
    //   extraClass: 'yo-loading-b',
    //   text: 'loading'
    // })
    return (
      <div className="m-home">
               <div className="swiper">
                 <Carousel>
                 {
                    this.state.swiperList
                  }
                </Carousel>          
             </div>
            <Homechao/>
            
            <Scroller scrollX={true}
    scrollY={false} style={{height:'800px'}}>
                {this.state.srollList}
                // <img  src ="" style={{height:"400px",width:"200px",backgroundColor:"red"}}/>
                // <img  src ="" style={{height:"400px",width:"200px",backgroundCcolor:"green"}}/>

            </Scroller>

            
           </div>
    )
  }
  componentDidMount() {
    var _url = '/api/list.php';
    fetchData(_url, function(res) {
      let Lis = res.data.items[1].ads.map(val => {
          return (<li className="item"><img className="img" src={val.data.imageUrl} /></li>)
        })
        //loading.hide();
      this.setState({
        swiperList: Lis
      })
    }.bind(this))



    //scroll
    fetchData(_url, function(res) {
      let Lis = res.data.items[10].ads.map(val => {
        console.log(val.data.imageUrl)
          // return (<li className="item"><img className="img" src={val.data.imageUrl} /></li>)
        return (<img src={val.data.imageUrl}/>)
      })
      console.log(Lis)
        // loading.hide()
      this.setState({
        srollList: Lis
      })
    }.bind(this))


  }
}
export default Home