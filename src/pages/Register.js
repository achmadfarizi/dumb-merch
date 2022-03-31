import React from 'react'
import RightLanding from '../Components/RightLanding'
import {Container, Col, Row, Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Register.css'

function Register() {
  return (
    <Container className='d-flex'>
        <RightLanding />
        <div className='Right-side-register'>
            <Form>
                <h2>Register</h2>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Col sm="10">
                    <Form.Control className='grey' type="text" placeholder="Name"/>
                    </Col>
                </Form.Group>

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
                    <Button className='btn' variant="danger">Register</Button>
                </Col>
            </Form>
        </div>
    </Container>
  )
}

export default Register