import React from 'react'
import RightLanding from '../Components/RightLanding'
import {Container, Col, Row, Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <Container className='d-flex'>
        <RightLanding />
        <div className='Left-side-login'>
        <Form>
            <h2>Login</h2>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm="10">
                <Form.Control className='grey' type="email" placeholder="Email"/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Col sm="10">
                <Form.Control className='grey' type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            <Col sm="10">
                <Link to='/usershop'>
                    <Button className='btn' variant="danger">Login</Button>
                </Link>
            </Col>
        </Form>
        </div>
    </Container>
  )
}

export default Login