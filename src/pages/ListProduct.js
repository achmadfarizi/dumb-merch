import React from 'react'
import {Table, Container, Button, Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderAdmin from '../Components/HeaderAdmin'
import { useState } from 'react'
import './ListProduct.css'
import listdata from '../Dummydata/listdata'

function ListProduct() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <HeaderAdmin />
        <Container className='lst-product'>
            <h3 className='mt-5 mb-3'>List Product</h3>
            <Table responsive="sm" striped bordered hover variant="dark">
                <tbody>
                <tr>
                    <td><p>No</p></td>
                    <td><p>Photo</p></td>
                    <td><p>Product Name</p></td>
                    <td><p>Product Desc</p></td>
                    <td><p>Price</p></td>
                    <td><p>Qty</p></td>
                    <td><p>Action</p></td>
                </tr>
                {listdata.map((product)=>(
                    <tr>
                        <td><p>{product.no}</p></td>
                        <td><p>{product.photo}</p></td>
                        <td><p>{product.name}</p></td>
                        <td><p>lorem ipsum {product.productdesc} ...</p></td>
                        <td><p>{product.price}</p></td>
                        <td><p>{product.qty}</p></td>
                        <td>
                            <Button className='me-3' variant='success' style={{width: "100px"}}>Edit</Button>
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

export default ListProduct