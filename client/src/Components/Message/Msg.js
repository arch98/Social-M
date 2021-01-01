import React,{Component} from 'react';
import axios from 'axios';
import '../../Style/Message/Msg.css';
import {Button} from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

class Msg extends Component{
    constructor(props){
        super(props);

        this.final = []
        this.state = {
           msg:[],
           curr:"",
           k : 1,
           img:"chat.png"
        }

        this.handleChange = this.handleChange.bind(this);
        this.send = this.send.bind(this);
    }

    handleChange(event){
        var t = event.target.value;
        this.setState({
            curr:t,
        });
    }

    send(){
        this.final.push({"key":this.state.k,"msg":this.state.curr});
        
        const payload ={
            "sender":this.props.name,
            "receiver":this.props.friend,
            "msg":this.state.curr
        }

        axios({
            url:"http://localhost:9000/putmsg",
            method:"POST",
            data:payload
        }).then(()=>{
             console.log("done!");
        }).catch(()=>{
            console.log("error!");
        });

        this.setState({
            curr:"",
            k:this.state.k+1
        });
    }

    callapi(){
        const payload ={
            "user":this.props.name,
            "friend":this.props.friend
        }

        axios({
            url:"http://localhost:9000/getm",
            method:"POST",
            data:payload
        }).then((response)=>{
             this.setState({
                 msg: response.data,
                 img:response.data[0].img
             });
        }).catch(()=>{
            console.log("error!");
        });

    }

    componentDidMount(){
        this.callapi();
    }

    render(){
        return(
            <div className ="chat_msg">
                <div className ="head_msg">
                    <img alt="hehe" src = {require("../Pics/"+this.state.img)} id="msg_photo"/><span id="name_fri">{this.props.friend}</span>
                </div>
                <div className ="out_msg">
                <Scrollbars style={{ height: "100%" }}>
                <div className = "prev_message">
                {
            this.state.msg.map(m => m.sender  === this.props.name ? (
                    <div key = {m._id} id="right"> {m.Msg}</div>
                ) : (
                    <div key={m._id} id="left">{m.Msg}</div>
                )
        )}
        {this.final.map((m)=>(<div key = {m.key} id="right">{m.msg}</div>))}
        </div>
        </Scrollbars>
        </div>
        <div className ="message_f">
                    <textarea type ="text" placeholder ="Write your Status!" id="textbox" value={this.state.curr} onChange ={this.handleChange}/>
                    <Button id="msg_but" onClick ={this.send}>Send Message!</Button>
        </div>
            </div>
        )
    }
}

export default Msg;