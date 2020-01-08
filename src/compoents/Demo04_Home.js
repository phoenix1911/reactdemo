import React, { Component } from 'react';
import { render } from '@testing-library/react';
import  '../assets/css/index.css'

class Demo04_Home extends Component{
    //1首先有个构造函数
    constructor() {
        super();  //固定写法 用于父子类传值

        //react 定义数据
        this.state = {
            msg: "我是一个组件",
            message: '我是一个message',
            username: '青墨'
        };
        //第二种改变this指向的方法
        this.getMessage = this.getMessage.bind(this);
    }

    run() {
        alert('这个是run方法')
    }

    getDate() {
        alert(this.state.msg);
    }

    getMessage() {
        alert(this.state.message);
    }
    //第三种最多
    getUsername = () => {
        alert(this.state.username);
    };

    setDate = () => {

        //改变state的值
        this.setState({
            msg: '改变后的msg'
        })
    };

    setUsername = (str) => {
        this.setState({
            username: str
        })

    };


        //2.模板
        render(){
        return (
            <div>
                <hr/><h1>Demo04_Home</h1>

                <button onClick={this.run}>执行run方法</button>

                <br/>获取数据的方法,把this 传给方法 .bind(this)

                <br/><br/>
                <button onClick={this.getDate.bind(this)}>获取数据--第一种改变this指向的方法</button>

                <br/><br/>
                <button onClick={this.getMessage }>获取数据--第二种改变this指向的方法</button>

                <br/><br/>
                <button onClick={this.getUsername }>获取数据--第三种改变this指向的方法</button>

                <br/><br/>
                msg:{this.state.msg}  改变this里的值<br/>
                <button onClick={this.setDate }>改变this里的值</button>

                <br/><br/>
                username:{this.state.username}   <br/>
                <button onClick={this.setUsername.bind(this,'家龙') }>执行方法传值</button>


            </div>


        )

    }

}
//3.暴露组件
export default Demo04_Home;
