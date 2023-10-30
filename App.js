
//I AM VERY I COUDNT SET UP REACT ROUTER DUE TO LAPTOP ISSUES ITS OLD AND VERSION WONT SUPPORT BUT YOU CAN CHANGE CATEGORY USING PROPS 

import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';


export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API
  pagesize = 9;
  category = "sports"
  render() {
    return (
      <div>
        <Navbar />
        <News pagesize={this.pagesize} country="in" category="science" apikey={this.apikey} />
      </div>
    )
  }
}
