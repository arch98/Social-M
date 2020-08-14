import React,{Component} from 'react';
import {Button,Form} from 'react-bootstrap';
import '../../Style/Entry/Login.css';
import {Link} from 'react-router-dom';


class Login extends Component{

    constructor(props){
        super(props);

        this.state ={
            move:false,
            user:"",
            pass:""
        }

        this.userInputChange = this.userInputChange.bind(this);
        this.send = this.send.bind(this);
    }

    /* userInputChange is used to store all the changes made in the input form as a state */
    userInputChange(event){
        var t = event.target.id;
        console.log(event.target.value);
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
/*send function is used to retrieve the values on click of the submit button in the form*/
    send(event){
       const payload ={
           "Username": this.state.user,
           "Password":this.state.pass
       }

        this.setState({
            move:true,
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
                        <Form.Control id="user" onChange ={this.userInputChange} value ={this.state.user}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><h3>Password</h3></Form.Label>
                        <Form.Control id="pass" onChange ={this.userInputChange} value={this.state.pass}/>
                    </Form.Group>
                    <Button variant="primary" id="btn1" onClick ={this.send}>
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