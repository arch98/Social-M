import React,{useState} from 'react';
import {Navbar,Form, Nav,Button,FormControl} from 'react-bootstrap';
import '../../Style/Page/Navigation.css';
import 'font-awesome/css/font-awesome.min.css';
import {Redirect,useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../actions/logout';
import {signout} from '../../actions/signout';
import { rmv_img } from '../../actions/rmv_img';
import {Badge} from '@material-ui/core';

function Navigation(){

    let history = useHistory();
    const[show,setShow] = useState(false);
    const dispatch = useDispatch();
    const noti = useSelector(state => state.notif);

    const handleClick = () =>{
        dispatch(logout());
        dispatch(signout());
        dispatch(rmv_img());
        setShow(true);
    }

    const h = ()=>{
        history.push('/Account');
    }

    const a = ()=>{
        history.push('/Info');
    }

    const b =()=>{
        history.push('/Chat');
    }
  
     const c = () =>{
         history.push('/Noti');
     }
        return(
            <div className ="Navigation">
                <Navbar bg="primary" expand="lg">
                    <Navbar.Brand href="#" id="title2"><h3>Social Note</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls = "basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className = "but">
                            <Nav.Link  id="move" onClick ={h}><h4>Trending</h4></Nav.Link>
                            <Nav.Link  id="move" onClick = {a}><h4>Profile</h4></Nav.Link>
                            <Nav.Link  id="move" onClick ={b}><h4>Chats</h4></Nav.Link>
                            <Nav.Link  id="move" onClick = {c}><h4><Badge badgeContent={noti} color="primary">Notifications</Badge></h4></Nav.Link>
                        </Nav>
                </Navbar.Collapse>
                    <Form inline>
                    <FormControl type="text" placeholder="Find friends..." className="in" />
                    <Button id="btn" ><i className="fa fa-search-plus" aria-hidden="true"></i></Button>
                    </Form>
                    <Button  onClick ={handleClick}>Logout</Button>
                </Navbar>
                {show === true ? <Redirect to ={"/"} />:null}
            </div>
        )
    
}

export default Navigation;