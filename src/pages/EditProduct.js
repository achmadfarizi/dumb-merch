import React from 'react'
import HeaderAdmin from '../Components/HeaderAdmin'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Form, Button} from 'react-bootstrap'
import './EditProduct.css'

function EditProduct() {
  return (
    <div>
        <HeaderAdmin />
        <Container className='edit-page'>
            <h2>Edit Category</h2>
            <Form>
                <Form.Control className='input-edit' type="text" placeholder="Normal text" />
                <Button className='btn-edit-product mt-5' variant="success" size="lg">
                    Save
                </Button>
            </Form>
        </Container>
    </div>
  )
}

export default EditProduct