import React from 'react';
import {Container,Row,Col,Form,Button,FormControl} from 'react-bootstrap';
import '../../Style/Message/Friends.css';
import {Link} from 'react-router-dom';
import {friend} from '../../actions/friend';
import {useDispatch} from 'react-redux';
import Msg from './Msg';
import { Scrollbars } from 'react-custom-scrollbars';

function Friends(val){

        
        const dispatch = useDispatch();

        return(
            <div className ="Friends">
                <Container fluid>
                    <Row>
                        <Col sm={3}>
                            <div className ="outer">  
                            <Scrollbars style={{ height: "100%" }}>
                        <div className ="f_side">
                        <div className ="form_friend">
                        <Form inline>
                            <FormControl type="text" placeholder="Search Chats..." className="in_friend" />
                            <Button variant = "light" id="btn_friend" ><i className="fa fa-search-plus" aria-hidden="true"></i></Button>
                        </Form>
                        </div>
                       
                        <hr/>
                            {val.friends.map((m)=>(<div key = {m._id} className ="fren_desc"><span><img alt="hehe" src = {require("../Pics/"+ m.img)} id="pic_friend"/><Link to = "/Chat" id="name" onClick = {()=>{dispatch(friend(m.friend))}}>{m.friend}</Link><hr/></span></div>))}
                        </div>
                        </Scrollbars>
                        </div>
                        </Col>
                        <Col sm={9}>
                            {val.fri.length > 0 ? <Msg name ={val.name} friend ={val.fri} /> : null}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
}

export default Friends;