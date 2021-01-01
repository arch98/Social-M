import React,{Component} from 'react';
import axios from 'axios';
import '../../Style/Page/Noti.css';
import { Button } from 'react-bootstrap';

class Noti extends Component{
    constructor(props){
        super(props);

        this.state = {
            k : 1,
            unseen : []
        };

        this.change = this.change.bind(this);
    }

    callApi(){
        const payload = {
            "user" : this.props.name
        }


        axios({
            url : "http://localhost:9000/getnoti",
            method : "POST",
            data : payload
        }).then((response)=>{
            this.setState({
                unseen : response.data
            });
        }).catch(()=>{
            console.log("error!");
        });
    }

    componentDidMount(){
        this.callApi();
    }

    change(event){
        
        const payload = {
            "user":this.props.name,
            "msg" : event.target.value 
        }


        axios({
            url:"http://localhost:9000/del",
            method:"POST",
            data:payload
        }).then(()=>{
            console.log("Done!");
        }).catch(()=>{
            console.log("Error!");
        });


    }

    render(){
        return(
            <div className = "Noti">
            {this.state.unseen.map((m)=>(<div key= {m._id} className = "Post_noti"><h1>Alert!</h1><hr/>{m.msg}<div className = "but_noti"><Button onClick = {this.change} value = {m.msg}>Mark as Read</Button></div></div>))}
            </div> 
        )
    }
}

export default Noti;