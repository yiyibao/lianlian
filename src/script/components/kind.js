import React from "react"
import KindHeader from "./kindHeader"

import MultiList from '../../component_dev/multilist/src/'
import KindList from "./kindList"
import { loading } from '../../component_dev/loading/src';

 const multiData = {
   subItemType: 'ProductMenu',
   defaultValue:1,
   subList: [{
                subList:5296,
                "name":"美妆个护",
                value: 1,
                "parentId":0
            },
            {
                subList:5301,
                "name":"食品饮料",
                value: 2,
                "parentId":0
            },
            {
                subList:5295,
                "name":"母婴用品",
                value: 3,
                "parentId":0
            },
            {
                subList:5575,
                "name":"厨卫清洁",
                value: 4,
                "parentId":0
            },
            {
                subList:5297,
                "name":"生活家居",
                value: 5,
                "parentId":0
            },
            {
                subList:5136,
                "name":"手机数码",
                value: 6,
                "parentId":0
            },
            {
                subList:670536,
                "name":"电脑办公",
                value: 7,
                "parentId":0
            },
            {
                subList:5183,
                "name":"大小家电",
                value: 8,
                "parentId":0
            },
            {
                subList:5751,
                "name":"运动户外汽车",
                value: 9,
                "parentId":0
            },
            {
                subList:5298,
                "name":"手表珠宝箱包",
                value: 10,
                "parentId":0
            },
            {
                subList:5299,
                "name":"生鲜果蔬",
                value:11,
                "parentId":0
            },
            {
                subList:5300,
                "name":"鲜花礼券",
                value:12,
                "parentId":0
            },
            {
                subList:1085398,
                "name":"虚拟商品",
                value: 13,
                "parentId":0,
                "iconUrl":"http://ecimages.lianlian-resources.com/Mall/2016/04/21/635968341174306850_240_240.png"
            },
            {
                subList:528636,
                "name":"营养保健",
                value:14,
                "parentId":0
            },
            {
                subList:78948,
                "name":"优惠组合套装",
                value:15,
                "parentId":0,
                "keywords":"限时抢购",
                "description":"活动商品分类"
            },
            {
                subList:79036,
                value:16,
                "name":"9联豆起",
                "parentId":0
            }]
 };
 class Kind extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
          dataSource: multiData,
          caseList:[],
          value: [1]
      }

   }

   updateValue(value) {
      this.setState({
          value,
      })
   }
   componentWillMount(){
    loading.show({
        extraClass: 'yo-loading-b',
        text: 'loading'
    });
   }
   render() {
    // console.log(this.state.caseList)
      return (
          <div>
              <KindHeader/>
              <ul className="nav" >
                  <MultiList
                      dataSource={ this.state.dataSource}
                      value={this.state.value}
                      onChange={({newValue}) => {
                          this.updateValue(newValue);
                      }}
                      onItemTap={({item})=>{
                          return [item.value];
                      }}
                      renderItem={({itemType, data, isSpread, index})=>{
                          switch (itemType){
                              case 'ProductMenu':
                                  return <h1 data={data} isSpread={isSpread} index={index}>{data.name}</h1>

                          }
                      }}
                      renderContent={({type}) => {
                          switch (type){
                              case 5296:
                                  return <KindList url={type}/> ;
                              case 5301:
                                  return <KindList url={type}/>;
                               case 5295:
                                  return <KindList url={type}/> ;
                              case 5575:
                                  return <KindList url={type}/>;
                              case 5297:
                                  return <KindList url={type}/> ;
                              case 5136:
                                  return <KindList url={type}/>;
                               case 670536:
                                  return <KindList url={type}/> ;
                              case 5183:
                                  return <KindList url={type}/>;
                               case 5751:
                                  return <KindList url={type}/> ;
                              case 5298:
                                  return <KindList url={type}/>;
                               case 5299:
                                  return <KindList url={type}/> ;
                              case 5300:
                                  return <KindList url={type}/>;
                               case 1085398:
                                  return <KindList url={type}/>;
                               case 528636:
                                  return <KindList url={type}/> ;
                              case 78948:
                                  return <KindList url={type}/>;
                               
                               case 79036:
                                  return <KindList url={type}/> ;
                          }
                      }}
                  />
              </ul>
            </div>
      )
   }
   componentDidMount(){
      setInterval(function () {
        loading.hide();
      },2000)
   }
 }

export default Kind
//<h1 data={data} isSpread={isSpread} index={index}>{data.name}</h1>
// <h1  >{data.id}</h1>
