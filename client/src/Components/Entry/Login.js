import React,{Component} from 'react';
import {Button,Form} from 'react-bootstrap';
import '../../Style/Entry/Login.css';
import {Link} from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);

        this.state ={
            user:"",
            pass:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.send = this.send.bind(this);
    }

    handleChange(event){
        var t = event.target.id;

        if(t === "user"){
            this.setState({
                user:event.target.value
            });
        }else{
            this.setState({
                pass:event.target.value
            });
        }
    }

    send(){

        const payload ={
            Username : this.state.user,
            Password : this.state.pass
        }

        this.setState({
            user:"",
            pass:""
        });
    }

    render(){
        return(
            <div className ="Login">
                <h3 id="title1">Login!</h3>
                <Form>
                    <Form.Group>
                        <Form.Label><h3>Username</h3></Form.Label>
                        <Form.Control id="user" onChange ={this.handleChange} value ={this.state.user}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><h3>Password</h3></Form.Label>
                        <Form.Control id="pass" onChange ={this.handleChange} value={this.state.pass}/>
                    </Form.Group>
                    <Button variant="primary" id="btn1">
                        Submit
                    </Button>
                    <div className="link1">
                        <Link to ={'/signup'}><h5>Don't have an account? Create one!</h5></Link>
                    </div>
                </Form>
            </div>
        )
    }
}

export default Login;