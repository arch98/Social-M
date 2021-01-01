import React,{Component} from 'react';
import axios from 'axios';
import Navigation from '../Page/Navigation';
import {Jumbotron,Card,Container,Row,Col} from 'react-bootstrap';
import Fri_head from './Fri_head';
import  '../../Style/Interact/Fri_head.css';

class Fri_profile extends Component{
    constructor(props){
        super(props);

        this.state  ={
            deets : [],
            img:'chat.png'
        }
    }
    
    callapi(){

        const payload = {
            "user" : this.props.location.aboutProps.name
        }

        axios({
            url:"http://localhost:9000/img",
            method:"POST",
            data:payload
        }).then((response) =>{
            this.setState({
                deets:response.data,
                img:response.data.Img,
                name : response.data.user
            })
        }).catch(()=>{
            console.log("error!");
        })
    }

    componentDidMount(){
        this.callapi();
    }

    render(){
        return(
            <div>
            <Navigation/>
            <Jumbotron>
            <img alt="hehe" src = {require("../Pics/"+this.state.img)} id="show"/>
               <span id="brief">Hi,{this.state.deets.Fullname} Here!Check me out XD.</span> 
            </Jumbotron>
            <Container fluid>
                <Row>
                    <Col sm = {3}>
                            </Col>
                            <Col sm={7}>
            <Card className = "About" border="dark">
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    <div className = "name">
                                    <h5>Name <hr/></h5>
                                 <h3>{this.state.deets.Fullname}</h3>
                                 </div>
                                 <div className ="abou">
                <h5>A little about me! <hr/></h5>
                <h3>{this.state.deets.About}</h3>
                </div>
    
                    </Card.Text>
                 </Card.Body>
             </Card>
             </Col>
             </Row>
             </Container>
        </div>
        )
    }
}

export default Fri_profile;