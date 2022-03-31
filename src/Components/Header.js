import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>

        <Navbar.Brand href="#home">
            <img src="assets/Logo.png" width="30" height="30" className="d-inline-block align-top" alt="logo"/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav" >
            <Nav>
              <Link className='link me-3' to='/chat'>
                Complain
              </Link>
              <Link className='link me-3' to='/profile'>
                Profile
              </Link>
              <Link className='link me-3' to='/'>
                Logout
              </Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header