import React, { Component } from 'react';
import { render } from '@testing-library/react';
import  '../assets/css/index.css'

class Demo03_Home extends Component{
   //1首先有个构造函数
   constructor() {
      super();  //固定写法 用于父子类传值

      //react 定义数据
      this.state={
            msg:"我是一个组件",
            title:"我是一个title",
            color:'red',
            style:{
                color: "green",
                fontSize: "40px"
            }

         }

   }

   //2.模板
   render(){
      return (
          <div>
              <hr/><h1>Demo03_Home</h1>
              <h2>{this.state.msg}</h2>
              <div title={this.state.title}>我是一个title,鼠标移上去显示</div>
              <div className='red'>这是一个红色的div,css文件是导入的,jsx语法有 class  关键字,所以不建议使用class,使用className</div>
              <div className={this.state.color}>蓝色的div  在this.state里定义的数据</div>

              <br/>
              <label htmlFor="name">姓名</label>
              <input id="name"/>
              <div>jsx语法里不可以使用for关键字,使用htmlfor</div>
              <br/>

              <div style={{"color":"blue"}}>style 行内样式写法特殊</div>
              <div style={this.state.style}>style this.state写法</div>
          </div>


      )

   }

}
//3.暴露组件
export default Demo03_Home;
