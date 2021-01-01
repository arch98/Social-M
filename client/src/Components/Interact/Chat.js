import React, {Component} from 'react';
import axios from 'axios';
import Friends from '../Message/Friends';
import Navigation from '../Page/Navigation';

class Chat extends Component{
    constructor(props){
        super(props);

        this.state = {
            friends : []
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
            this.setState({
                friends : response.data
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
            <div>
                <Navigation/>
                <Friends name ={this.props.name} friends ={this.state.friends} fri ={this.props.friend}/>
            </div>
        )
    }
}


export default Chat;