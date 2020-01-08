import React, { Component } from 'react';
import { render } from '@testing-library/react';
import  '../assets/css/index.css'

class Demo05_Home extends Component{
    //1首先有个构造函数
    constructor(props) {
        super(props);  //固定写法 用于父子类传值

        //react 定义数据
        this.state = {
            msg: "我是一个组件",
            username: ""
        };

    }

    run = (event) => {
        alert(this.state.msg);
        console.log(event);
        alert(event.target); //获取执行事件的dom节点

        event.target.style.background = 'red';

        //获取dom的属性
        alert(event.target.getAttribute('aid'));

    };
//2.获取表单的值
    inputChange = (e) => {
        console.log(e.target.value);

        //3.赋值
        this.setState({
            username: e.target.value
        })

    };
//4.获取input的值
    getInput = () => {
        alert(this.state.username);

    };

        //2.模板
    render(){
        return (
            <div>
                <hr/>
                <h1>Demo05_Home</h1>
                msg:{this.state.msg}
                {/* react 注释*/}
                <br/>演示事件对象<br/>
                <button aid="button01" onClick={this.run}>事件对象</button>

                <h2>表单事件</h2>
                {/*
                获取表单的值
                    1.监听表单的改变事件   onChange
                    2.在改变的事件里面获取表单输入的值  事件对象
                    3.把表单输入的值赋值给username    this.setState({})
                    4.点击按钮的时候获取state里面的username   this.state.username
                */}
                <input onChange={this.inputChange} /> <button onClick={this.getInput} >获取input的值</button>


            </div>


        )

    }

}
//3.暴露组件
export default Demo05_Home;
