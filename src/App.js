import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBarContainer from './containers/NavBarContainer'
import SideBarContainer from './containers/SideBarContainer'
import FooterContainer from './containers/FooterContainer'

class App extends React.Component {
  render() {

  
    return (
      <div className="App">
        < NavBarContainer />
        < SideBarContainer />
        < FooterContainer />
        <div className='main'>
          <h1>Andrew's Portfolio Website</h1>
        </div>
        
      </div>
    );
  }
}

export default App;
