import React, { Component } from 'react';
import { render } from '@testing-library/react';
//import App from '../App';

class Home extends Component{
   //1首先有个构造函数
   constructor() {
      super();

      //react 定义数据
      this.state={
         name: "张三",
         age: "30",
         userinfo:{
            username:"李四"

         }
      }
   }

   //2.模板
   render(){
      return (
          <div>
             <hr/>
             <h1>hello, react (Home 组件)</h1>
             <h2>react 组件里面的所有节点要被根节点包含(一个div)</h2>
             <p>p标签 绑定数据 姓名:{this.state.name},年龄{this.state.age}</p>
             <p> 对象:{this.state.userinfo.username}</p>
          </div>

      );

   }

}
//3.暴露组件
export default Home;

