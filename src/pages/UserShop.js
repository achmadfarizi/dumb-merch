import React from 'react'
import Header from '../Components/Header.js'
import {Container, Col, Card, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './UserShop.css'
import productdata from '../Dummydata/product.js'
import {Link} from 'react-router-dom'

function UserShop() {
  return (
    <div>
        <Header />
        <Container className='py-4 px-4'>
            <h2 className='mb-4' style={{color:'red'}}>Product</h2>
            <Row className='card-group'>
                {productdata.map((product)=>(
                <Col>
                    <Card className='me-3 mb-3 card-item'>
                        <Link to='/detailshop'>
                        <Card.Img className='img-shop' variant="top" src={product.image} />
                        </Link>
                        <Card.Body>
                        <Card.Title style={{color:'white'}}>{product.title}</Card.Title>
                        <Card.Text style={{color:'white'}}>
                            {product.price}<br/>
                            Stock : {product.stock}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default UserShop