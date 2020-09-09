import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import NavBarContainer from './containers/NavBarContainer'
import FooterContainer from './containers/FooterContainer'
// import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import ProjectContainer from './containers/ProjectContainer'
import BlogContainer from './containers/BlogContainer'
import Stocks from './components/projects/stocks/Stocks'
import Slots from './components/projects/slots/Slots'
import AutoDealer from './components/projects/auto-dealer/AutoDealer'
import Familytree from './components/projects/familytree/Familytree'
import Domain from './components/projects/domain/Domain'

class App extends React.Component {
  render() {
    return (  
      <div className="App">
        
        <Router>
          < NavBarContainer />
          
          <div className='main'>
            
            <Route exact path='/' component={About} />
            
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/projects' component={ProjectContainer} />
            <Route exact path='/blog' component={BlogContainer} />
            <Route exact path='/projects/stocks' component={Stocks} />
            <Route exact path='/projects/slots' component={Slots} />
            <Route exact path='/projects/auto-dealer' component={AutoDealer} />
            <Route exact path='/projects/familytree' component={Familytree} />
            <Route exact path='/projects/domain' component={Domain} />
          </div>
          < FooterContainer />
        </Router>
      </div>
    );
  }
}
export default App;
