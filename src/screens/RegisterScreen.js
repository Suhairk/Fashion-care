import React from 'react'
import {Form,Button, Col, Row} from 'react-bootstrap'
import '../screens/ScreenStyle/RegisterScreen.css'
import { AiTwotoneMail,AiFillEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';

function RegisterScreen() {
  return (
    <div className='register-form'>
    <h1 style={{color:"#585757", textAlign:"center", padding:"10px"}}>REGISTER</h1>
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

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Repeat Password</Form.Label>
    <div className='password'>
    <Form.Control type="password" placeholder="Repeat Password" />
    <AiFillEyeInvisible size={20} className="eye-icon"/>
    </div>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <div className='form-footer'>
    <Button  type="submit" className="form-button">
        Register
    </Button>
    <Row className="">
        <Col >
         Already Register?
          <Link to="/login">
              Login
          </Link>
        </Col>
      </Row>
    </div>
    </Form>
    </div>
  )
}

export default RegisterScreen