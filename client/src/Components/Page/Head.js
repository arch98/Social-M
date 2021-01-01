import React,{Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import '../../Style/Page/Head.css';



class Head extends Component{
     constructor(props){
         super(props);

         this.state ={
             Full: "Chatbot",
             img : "chat.png"
         }
     }
      
    

      render(){
        return(
            <Jumbotron>
               <img alt="hehe" src = {require("../Pics/"+this.props.pic)} id="photo"/>
               <h1 id="name">{this.props.full}</h1>
               <h5 id="name">Share awesome stories with your friends and grow!</h5>
            </Jumbotron>
        )
        }
}

export default Head;