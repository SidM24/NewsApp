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
import UpdatedNewsComponent from './components/UpdatedNewsComponent';
import NewUser from './components/NewUser';

export default class App extends Component {

  render() {
    return (
      <div style={{ zIndex: '-1', backgroundImage: `url(${bgimg})`, backgroundSize: '100% auto', backgroundRepeat: 'repeat-y', width: '100vw' }}>
        <Router>
          <div className="Navbar" style={{ margin: '0px', padding: '0px' }}>
            <Navbar></Navbar>
          </div>

          <div className="News" style={{ margin: '0px', padding: '0px' }}>
            <Routes>
              {/* Home Page would have headlines */}
              <Route exact path="/" element={<UpdatedNewsComponent key='general' country='in' category='general' />} />
              <Route exact path="/business" element={<UpdatedNewsComponent key='business' country='in' category='business' />} />
              <Route exact path="/entertainment" element={<UpdatedNewsComponent key='entertainment' country='in' category='entertainment' />} />
              <Route exact path="/health" element={<UpdatedNewsComponent key='health' country='in' category='health' />} />
              <Route exact path="/science" element={<UpdatedNewsComponent key='science' country='in' category='science' />} />
              <Route exact path="/sports" element={<UpdatedNewsComponent key='sports' country='in' category='sports' />} />
              <Route exact path="/technology" element={<UpdatedNewsComponent key='tech' country='in' category='tech' />} />

              <Route exact path='/old/' element={<News key="general" pageSize={9} country="in" category="general" />} />
              <Route exact path="/old/general" element={<News key="general" pageSize={9} country="in" category="general" />} />
              <Route exact path="/old/business" element={<News key="business" pageSize={9} country="in" category="business" />} />
              <Route exact path="/old/entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment" />} />
              <Route exact path="/old/health" element={<News key="health" pageSize={9} country="in" category="health" />} />
              <Route exact path="/old/science" element={<News key="science" pageSize={9} country="in" category="science" />} />
              <Route exact path="/old/sports" element={<News key="sports" pageSize={9} country="in" category="sports" />} />
              <Route exact path="/old/technology" element={<News key="technology" pageSize={9} country="in" category="technology" />} />

              <Route exact path='/newUser' element={<NewUser />} />
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}



