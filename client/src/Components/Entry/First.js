import React,{Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import Login from './Login';
import '../../Style/Entry/First.css';

class First extends Component{
    
    render(){
        return(
            <div className="First">
                <Jumbotron>
                   <h1 id="title1">Welcome to Social Mate!</h1>
                </Jumbotron>
                <Login/>
            </div>
        )
    }
}

export default First;