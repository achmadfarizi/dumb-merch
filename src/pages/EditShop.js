import React from 'react'
import HeaderAdmin from '../Components/HeaderAdmin'
import {Container, Form, Button, FloatingLabel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './EditShop.css'

function EditShop() {
  return (
    <div>
        <HeaderAdmin />
        <Container className='edit-shop'>
            <h3 className='mb-4 mt-4'>Edit Product</h3>
            <Form>
                <Form.Control className='mb-4 upload-image' type="file" />
                <Form.Control className='mb-4 input' type="text" placeholder="Name Product" />
                <FloatingLabel controlId="floatingTextarea" label="Desc Product" className="mb-3">
                    <Form.Control className='input' as="textarea" placeholder="Leave a comment here" />
                </FloatingLabel>
                <Form.Control className='mb-4 input' type="text" placeholder="Price Product" />
                <Form.Control className='mb-5 input' type="text" placeholder="Stock" />
                <Button className='mt-4 btn-edit-shop' variant="success" size="lg">
                   Save
                </Button>
            </Form>
        </Container>
    </div>
  )
}

export default EditShop