import React from 'react';
import logo from './assets/images/logo.svg';
//import './assets/css/App.css';

//4.引入Home组件
import Home from './compoents/Home'
import News from './compoents/News'
import Demo03_Home from "./compoents/Demo03_Home";
import Demo03_News from "./compoents/Demo03_News";
import Demo04_Home from "./compoents/Demo04_Home";
import Demo05_Home from "./compoents/Demo05_Home";

function App() {
  return (
      <div className="App">
        <h1>App组件</h1>
        <Home/>
        <News/>
        <Demo03_Home/>
        <Demo03_News/>
        <Demo04_Home/>
        <Demo05_Home/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
  );
}

export default App;
