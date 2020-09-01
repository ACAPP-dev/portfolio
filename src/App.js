import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBarContainer from './containers/NavBarContainer'
import SideBarContainer from './containers/SideBarContainer'

class App extends React.Component {
  render() {

  
    return (
      <div className="App">
        < NavBarContainer />
        < SideBarContainer />
        <h1>Andrew's Portfolio Website</h1>
        
      </div>
    );
  }
}

export default App;
