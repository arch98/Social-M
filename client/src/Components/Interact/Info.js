import React from 'react';
import {useSelector} from 'react-redux';
import Navigation from '../Page/Navigation';
import {Jumbotron,Card,Container,Row,Col} from 'react-bootstrap';
import '../../Style/Interact/Info.css';
import '../../Style/Page/Status.css';
import Fri_head from './Fri_head';

function Info(){
        const full = useSelector(state => state.fullname);
        const pic = useSelector(state => state.img);
        const ab = useSelector(state => state.about);
        const user = useSelector(state=>state.name);

        return(
        <div>
            <Navigation/>
            <Jumbotron>
            <img alt="hehe" src = {require("../Pics/"+pic)} id="show"/>
               <span id="brief">Hi,{full} Here!Check me out XD.</span> 
            </Jumbotron>
            <Container fluid>
                <Row>
                    <Col sm = {3}>
                       <Fri_head name = {user}/>
                            </Col>
                            <Col sm={7}>
            <Card className = "About" border="dark">
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    <div className = "name">
                                    <h5>Name <hr/></h5>
                                 <h3>{full}</h3>
                                 </div>
                                 <div className ="abou">
                <h5>A little about me! <hr/></h5>
                <h3>{ab}</h3>
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

export default Info;