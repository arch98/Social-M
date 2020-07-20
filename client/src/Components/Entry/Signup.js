import React,{Component} from 'react';
import { Jumbotron, Form,Button} from 'react-bootstrap';
import '../../Style/Entry/Login.css';

class Signup extends Component{
    constructor(props){
        super(props);

        this.state={
            name : "",
            user:"",
            pass:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.send = this.send.bind(this);
    }

    handleChange(event){
        var t = event.target.id;
        if(t === "name"){
            this.setState({
                name : event.target.value
            });
        }else if(t === "user"){
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
        this.setState({
            name:"",
            user:"",
            pass:""
        });
    }

    render(){
        return(
            <div className = "First">
                <Jumbotron>
                    <h1 id="title1">SignUp for Social Mate!</h1>
                </Jumbotron>
                <div className = "Login">
                    <Form>
                        <Form.Group>
                            <Form.Label><h3>Name</h3></Form.Label>
                            <Form.Control id="name" onChange ={this.handleChange} value ={this.state.name}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label><h3>Username</h3></Form.Label>
                            <Form.Control id="user" onChange ={this.handleChange} value={this.state.user}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label><h3>Password</h3></Form.Label>
                            <Form.Control id="pass" onChange ={this.handleChange} value ={this.state.pass}/>
                        </Form.Group>
                        <Button variant="primary" id="btn1">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Signup;