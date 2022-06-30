import React from 'react'
import {Form,Button, Row, Col} from 'react-bootstrap'
import '../screens/ScreenStyle/RegisterScreen.css'
import { AiTwotoneMail,AiFillEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';
function LoginScreen() {
  return (
    <div className='login-screen'>
    <h1 style={{color:"#585757", textAlign:"center", padding:"10px"}}>LOGIN</h1>
        <Form className='form-container'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label'>Email address</Form.Label>
        <div className='password'>
        <Form.Control type="email" placeholder="Enter email" />
        <AiTwotoneMail size={20} className="email-icon"/>
        <Form.Text className="text-muted">
        </Form.Text>
        </div>
    </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <div className='password'>
        <Form.Control type="password" placeholder="Password" />
        <AiFillEyeInvisible size={20} className="eye-icon"/>
        </div>
        </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <div className='form-footer'>
    <Button className="form-button" type="submit">
        Login
    </Button>
    <Row className="">
        <Col >
         New Customer?
          <Link to="/register">
              Register
          </Link>
        </Col>
      </Row>
    </div>
    
   
    </Form>
    </div>
  )
}

export default LoginScreen