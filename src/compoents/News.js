import React from "react";

class News extends  React.Component{
    constructor(props) {
        super(props); /* 用于父子组件传值  固定写法*/

        this.state ={
            userinfo: "张三"

        }
    }


    render() {
        return (
            <div>
                <hr/>
                <h1>News组件 </h1>

                <ul>
                    <li>列表1</li>
                    <li>列表2</li>
                    <li>列表3</li>
                </ul>
             {this.state.userinfo}

            </div>

        );
    }

}

export default News;