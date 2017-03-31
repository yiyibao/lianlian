import React from 'react'

class Homechao extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      chaoshiList: [<div/>],
      chaoshiLists: [<div/>]
    }
  }

  render() {
    return (


      <div>
        <ul className="chaolist">
                {
                    this.state.chaoshiList
                  }
                  
         </ul>
        <ul className="chaolist">
                  {
                    this.state.chaoshiLists
                  }
        </ul>
        <div className="title"><img src="http://images.lianlian-resources.com/LianLian/EventAds/2017/03/22/636257726365719512_750_152.png"/></div>
      </div>


    )
  }

  componentDidMount() {


    var _url = '/api/list.php';


    fetch(_url)

    .then(response => response.json())
      .then(res => {
        //console.log(res.data.items[3])
        let chaoLis = res.data.items[3].ads.map(val => {
          return (<li className="chaoshi"><img className="image" src={val.data.imageUrl} /></li>)

        })
        let chaoLia = res.data.items[4].ads.map(val => {
          return (<li className="chaoshi"><img className="image" src={val.data.imageUrl} /></li>)

        })
        this.setState({

          chaoshiList: chaoLis,
          chaoshiLists: chaoLia

        })

      })


  }


}

export default Homechao