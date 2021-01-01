import React,{Component} from 'react';
import axios from 'axios';
import  '../../Style/Interact/Fri_head.css';
import {Link} from 'react-router-dom';

class Fri_head extends Component{
    constructor(props){
        super(props);

        this.state  ={
            fri : []
        }
    }

    callapi(){
        
        const payload = {
            "user" : this.props.name
        }

        axios({
            url:"http://localhost:9000/get",
            method:"POST",
            data:payload
        }).then((response)=>{
            console.log(response.data);
            this.setState({
                fri : response.data
            })
        }).catch(()=>{
            console.log("Error!");
        });
    }

    componentDidMount(){
        this.callapi();
    }

    render(){
        return(
        <div className = "head_fri">
             <h1>Friends</h1>
             <hr/>
              {this.state.fri.map((m)=>(<div key = {m._id} className ="fren_desc"><span><img alt="hehe" src = {require("../Pics/"+ m.img)} id="pic_friend"/><Link to ={{pathname : '/Fri_profile',aboutProps :{ name : m.friend}}} >{m.friend}<hr/></Link></span></div>))}
        </div>
        )
    }
}

export default Fri_head;