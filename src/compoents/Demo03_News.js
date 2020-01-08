import React from "react";
import img1 from '../assets/images/logo.svg'
import img2 from '../assets/images/alexandra-rose-441878.jpg'

import '../assets/css/index.css'

class Demo03_News extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            msg: "新闻",
            list:['111','222','333'],

            list2:[<h2 key='1'>这是数组里的h2</h2>,<h3 key='2'>这是数组里的h3</h3>],

            list3:[
                {title:"新闻111"},
                {title:"新闻222"},
                {title:"新闻333"},
                {title:"新闻444"}

            ]


        }
    }

    render() {

        var listResult = this.state.list.map(function (value, key) {
            return <li key={key}>{value}</li>
        });

        return (
            <div className="news">
                <hr/>
                <h1>Demo03_News</h1>
                {this.state.msg}
                //三种方式
                <img src={img1}/>
                <img src={require('../assets/images/alexandra-rose-441878.jpg')} />
                <img src="https://www.baidu.com/img/xinshouye_353af22a7f305e1fb6cfa259394dea9b.png" />

                <br/> //循环数据

                {this.state.list}
                <br/>//循环数据1
                {this.state.list2}

                <br/>//循环数据2
                <ul>{listResult}</ul>

                <br/>//循环数据3
                {
                    this.state.list3.map(function (value,key) {
                        return (<li key ={key}>{value.title}</li>);

                    })
                }



            </div>
        );
    }
}
export default Demo03_News;