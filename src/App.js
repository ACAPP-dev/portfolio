import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import NavBarContainer from './containers/NavBarContainer'
import FooterContainer from './containers/FooterContainer'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'

class App extends React.Component {
  render() {
    return (  
      <div className="App">
        
        <Router>
          < NavBarContainer />
          < FooterContainer />
          <div className='main'>
            <h1>Andrew's Portfolio Website</h1>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/resume' component={Resume} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
