import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import NavBarContainer from './containers/NavBarContainer'
import FooterContainer from './containers/FooterContainer'

class App extends React.Component {
  render() {

  
    return (
      <div className="App">
        < NavBarContainer />
        
        <div className='main'>
          <h1>Andrew's Portfolio Website</h1>
        </div>
        < FooterContainer />
      </div>
    );
  }
}

export default App;
