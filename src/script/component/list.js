const multiData = {
    subItemType: 'ProductMenu',
    subList: [
        {
            name: '电脑办公',
            value: 1,
            subList: 'a',
             
        },
        {
            name: '大小家电',
            value: 2,
            subList: 'b',
             
        },
        {
            name: '运动户外汽车',
            value: 3,
            subList: 'c'
           

        },
        {
            name: '手表珠宝箱包',
            value: 4,
            subList: 'd',
           
        },
        {
            name: '生鲜果蔬',
            value: 5,
            subList: 'e',
            
        },
        {
            name: '鲜花礼券',
            value: 6,
            subList: 'f',
            
        },
        {
            name: '虚拟商品',
            value: 7,
            subList: 'g',
            
        },
        {
            name: '营养保健',
            value: 8,
            subList: 'h',
            
        },
        {
            name: '优惠组合套装',
            value: 9,
            subList: 'i',
            
        },
        {
            name: '9联豆起',
            value: 10,
            subList: 'j',
            
        }
    ]
};
import React from 'react';
import MultiList from '../../component_dev/multilist/src/index'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: multiData,
            value: [1],
            
        }
    }

    updateValue(value) {
        this.setState({
            value,
        })
    }
    
    render() {
        return (
            <MultiList
                dataSource={ this.state.dataSource}
                value={this.state.value}
                onChange={

                    ({newValue}) => {
                        //console.log(newValue,"a")
                        this.updateValue(newValue);
                    }
                }
                
                onItemTap={({item})=>{
                    //console.log(item,"b")
                    return [];//返回给onChange的newValue
                }}
//左一显示的值
                renderItem={({itemType, data, isSpread, index})=>{
                    //console.log(data)
                    switch (itemType){
                        case 'ProductMenu':
                            return <div>{data.name}</div>
                    }
                }}

                renderContent={
                    ({type}) => {
                        switch (type){
                            case 'a':
                                return <div style={{width:'100%'}}>
                                            whdwdh
                                            <h1 className="asd">到我家单位呢 </h1>
                                            <img src="http://lianlianlife.duapp.com/images/qq.png"/>
                                        </div>;
                            case 'b':
                                return <div>2</div>;
                            case 'c':
                                return <div>3</div>;
                            case 'd':
                                return <div>4</div>;
                            case 'e':
                                return <div>5</div>;
                            case 'f':
                                return <div>6</div>;
                            case 'g':
                                return <div>7</div>;
                            case 'h':
                                return <div>8</div>;
                            case 'i':
                                return <div>9</div>;
                            case 'j':
                                return <div>10</div>;
                        }
                    }
                }
            />
        );
    }
 
}

export default List
