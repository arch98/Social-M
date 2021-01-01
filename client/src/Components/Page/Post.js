import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import '../../Style/Page/Post.css';
import Status from './Status.js';
import axios from 'axios';

class Post extends Component{
    constructor(props){
        super(props);

        this.prev = [];      
        this.final = [];       
        this.state ={
            k:1,
            msg:" ",
            show:false
        }
       
        this.handleChange = this.handleChange.bind(this);
        this.send = this.send.bind(this);
       
    }

    handleChange(event){
        var t = event.target.value;
        this.setState({
            msg:t
        })
    }
    
    send(){
    
        const payload ={
            user : this.props.name,
            msg : this.state.msg
        }
        
       axios({
           url:"http://localhost:9000/status",
           method:"POST",
           data:payload
       }).then(()=>{
            console.log("done!");
       }).catch(()=>{
           console.log("error!");
       })
    
        this.final.push({key:this.state.k,msg:this.state.msg});
        this.setState({
            k:this.state.k+1,
            msg:""
        });
    }

    callApi(){
        
        axios({
            url:"http://localhost:9000/status",
            method:"GET"
        }).then((response)=>{
            this.prev = response.data;
        }).catch(()=>{
            console.log("Error!");
        })
    }

  
    componentDidMount(){
        this.callApi();
    }

    

    render(){
        return(
            <div className ="Post">
                 <div className ="Pos">
                    <textarea type ="text" placeholder ="Write your Status!" id="input" value={this.state.msg} onChange ={this.handleChange}/>
                    <Button id="send" onClick = {this.send}>Send Post!</Button>
                </div>
                {this.final.map((m)=>(<Status key={m.key} data = {m.msg} name ={this.props.name} img={this.props.pic} com ={this.props.name} com_pic ={this.props.pic}/>))} 
                {this.prev !== [] ? this.prev.map((m)=>(<Status key={m._id} data = {m.post} name ={m.user} img={m.img} com = {this.props.name} com_pic ={this.props.pic}/>)):null}
             </div>
        )
    }
}

export default Post;