import { Timeline } from 'react-twitter-widgets'
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import 'react-twitter-widgets'
// var Timeline = require('react-twitter-widgets').Timeline

ReactDOM.render((
  <Timeline
    dataSource={{

      sourceType: 'profile',
      screenName: 'adidas'
    }}
    options={{
      username: 'TwitterDev',
      height: '400'
    }}
    onLoad={() => console.log('Timeline is loaded!')}
  />
), document.getElementById('root')/*  */)

