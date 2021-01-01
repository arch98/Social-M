import React,{useState} from 'react';
import {Button,Form} from 'react-bootstrap';
import '../../Style/Entry/Login.css';
import {Link,Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {name} from '../../actions/name';
import {login} from '../../actions/index';


function Login(){

    const [user,setUser] = useState("");
    const [pass,setPass] = useState("");
    const[show,setShow] = useState(false);
    const dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(name(user));
        dispatch(login());
        setUser("");
        setPass("");
        setShow(true);
    }

       
        return(
            <div className ="Login">
                <h3 id="title1">Login!</h3>
                <Form>
                    <Form.Group>
                        <Form.Label><h3>Username</h3></Form.Label>
                        <Form.Control id="user" onChange ={(event)=>{setUser(event.target.value)}} value = {user}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><h3>Password</h3></Form.Label>
                        <Form.Control type ="password" id="pass" onChange ={(event)=>{setPass(event.target.value)}} value = {pass}/>
                    </Form.Group>
                    <Button variant="primary" id="btn1" onClick ={handleClick}>
                        Submit
                    </Button>
                    <div className="link1">
                        <Link to ={'/signup'}><h5>Don't have an account? Create one!</h5></Link>
                    </div>
                </Form>
                {show === true ? <Redirect to = {'/Account'}/> : null}
            </div>
        )
    
}

export default Login;