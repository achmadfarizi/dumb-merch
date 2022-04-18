import React from 'react'
import HeaderAdmin from '../Components/HeaderAdmin'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table, Container, Button, Modal} from 'react-bootstrap'
import { useState } from 'react'
import './CategoryList.css'
import categorydata from '../Dummydata/categorydata'
import {Link} from 'react-router-dom'


function CategoryList() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow('achmad');
    const handleShow = () => setShow('ilham');
  return (
    <div>
        <HeaderAdmin />
        <Container className='category-list'>
            <h3 className='mt-5 mb-4'>List Category</h3>
            <Table responsive="sm" striped bordered hover variant="dark">
            <tbody>
            <tr>
                <td>No</td>
                <td>Category Name</td>
                <td>Action</td>
            </tr>
            {categorydata.map((product)=>(
            <tr>
                <td><p>{product.no}</p></td>
                <td><p>{product.categoryname}</p></td>
                <td>
                    <Link to='/editproduct'>
                        <Button className='me-3' variant='success' style={{width: "100px"}}>Edit</Button>
                    </Link>
                    <Button onClick={handleShow} variant='danger'style={{width: "100px"}}>Delete</Button>
                </td>
            </tr>
            ))}
            </tbody>
        </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <p className='modal-title'>Delete Data</p>
                    <p className='modal-body'>Are you sure you want to delete this data?</p>
                </Modal.Body>
                <Modal.Footer>
                <Button className='px-5' variant="success" onClick={handleClose}>
                    Yes
                </Button>
                <Button className='px-5' variant="danger" onClick={handleClose}>
                    No
                </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    </div>
  )
}

export default CategoryList