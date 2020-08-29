import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import First from './Components/Entry/First.js';
import Signup from './Components/Entry/Signup.js';
import Account from './Components/Page/Account.js';
import Chat from './Components/Interact/Chat.js';
import Info from './Components/Interact/Info.js';
import Chatter from './Components/Chat/Chatter.js';


function App() {
  return (
      <Router>
        <Route exact path="/" component={First}/>
        <Route path ="/signup" component={Signup}/>
        <Route path ="/Account" component={Account}/>
        <Route path="/Chat" component={Chat}/>
        <Route path ="/Info" component={Info}/>
        <Route path ='/chatterbot' render ={(props) => (<Chatter {...props} name ='Chatterbot'/>)}/>
        <Route path ='/dan' render ={(props) => (<Chatter {...props} name ='Dan'/>)}/>
        <Route path ='/nancy' render ={(props) => (<Chatter {...props} name ='Nancy'/>)}/>
      </Router>
  );
}

export default App;
