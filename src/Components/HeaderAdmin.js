import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './HeaderAdmin.css'

function HeaderAdmin() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" >
        <Container>

        <Navbar.Brand href="#home">
            <img src="assets/Logo.png" width="30" height="30" className="d-inline-block align-top" alt="logo"/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav" >
            <Nav>
              <Link className='link-admin me-3' to='/chatuser'>
                Complain
              </Link>
              <Link className='link-admin me-3' to='/categorylist'>
                Category
              </Link>
              <Link className='link-admin me-3' to='/listproduct'>
                Product
              </Link>
              <Link className='link-admin me-3' to='/'>
                Logout
              </Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  )
}

export default HeaderAdmin