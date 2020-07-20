import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import First from './Components/Entry/First.js';
import Signup from './Components/Entry/Signup.js';

function App() {
  return (
      <Router>
        <Route exact path="/" component={First}/>
        <Route path ="/signup" component={Signup}/>
      </Router>
  );
}

export default App;
