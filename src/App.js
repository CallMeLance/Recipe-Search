import React from 'react';
import './App.css';
import RecipeSearcher from './RecipeSearcher/RecipeSearcher';
import About from './About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to = '/'>Home</Link>
          </li>
          <li>
            <Link to = '/'>About</Link>
          </li>
        </ul>
      </nav>

  {/* The switch component looks through the route components inside of it and renders the first one that matches the current URL */}

  <Switch>
    <Route path='/'>
      <RecipeSearcher />
    </Route>
    <Route path='/about'>
      <About />
    </Route>
      </Switch>
    </Router>
    
    // <RecipeSearcher />

  );
}

export default App;
