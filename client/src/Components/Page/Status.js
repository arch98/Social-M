import React,{Component} from 'react';
import {Button,Card} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import '../../Style/Page/Status.css';
import axios from 'axios';

class Status extends Component{
       constructor(props){
           super(props);

           this.state ={
               show:false
           }

           this.change = this.change.bind(this);
       }

       change(){

            console.log(this.props.name);
            const payload ={
                "user": this.props.name,
                "msg": this.props.data,
                "liker":this.props.com
            }


            axios({
                url:"http://localhost:9000/comm",
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
                <div className = "recv">
                    <Card border="dark">
                            <Card.Body>
                                <Card.Title><h5><img alt="hehe" src= {require("../Pics/"+this.props.img)} id="p"/>{this.props.name}<hr/></h5></Card.Title>
                                <Card.Text>
                                {this.props.data}
                                </Card.Text>
                                <Button variant = "light" id="btn3" onClick = {this.change}><i className="fa fa-thumbs-up" aria-hidden="true" ></i></Button>
                                <Button  variant = "light" id="btn3" onClick = {this.change}><i className="fa fa-heart" aria-hidden="true"></i></Button>
                            </Card.Body>
                            </Card>
                </div>
            )
       }
}

export default Status;