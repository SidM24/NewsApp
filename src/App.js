import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


import bgimg from './images/newspaper-653004138.jpeg'

export default class App extends Component {
  render() {
    return (
      <div style={{ zIndex: '-1', backgroundImage: `url(${bgimg})`, backgroundSize: '100% auto', backgroundRepeat: 'repeat-y', width: '100vw' }}>
        <Router>
          <div className="Navbar" style={{margin:'0px',padding:'0px'}}>
            <Navbar></Navbar>
          </div>
          <div className="News" style={{margin:'0px',padding:'0px'}}>
            <Routes>
              <Route exact path="/" element={<News key="general" pageSize={9} country="in" category="general" />} />
              <Route exact path="/general" element={<News key="general" pageSize={9} country="in" category="general" />} />
              <Route exact path="/business" element={<News key="business" pageSize={9} country="in" category="business" />} />
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment" />} />
              <Route exact path="/health" element={<News key="health" pageSize={9} country="in" category="health" />} />
              <Route exact path="/science" element={<News key="science" pageSize={9} country="in" category="science" />} />
              <Route exact path="/sports" element={<News key="sports" pageSize={9} country="in" category="sports" />} />
              <Route exact path="/technology" element={<News key="technology" pageSize={9} country="in" category="technology" />} />
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}



