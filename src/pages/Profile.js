import React from 'react'
import Header from '../Components/Header'
import './Profile.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Card} from 'react-bootstrap'

function Profile() {
  return (
    <div className='Profile'>
        <Header />
        <Container className='d-flex'>
        <div className='left-side-profile'>
            <h2>Profile</h2>
            <div className='d-flex profile-user'>
                <div className='me-4'>
                    <img src="assets/people.png" alt="" />
                </div>
                <div className='information'>
                    <div>
                        <h6>Name</h6>
                        <p>Yosep</p>
                    </div>

                    <div>
                        <h6>Email</h6>
                        <p>Yosepgans@gmail.com</p>
                    </div>

                    <div>
                        <h6>Phone</h6>
                        <p>0892-3332-1212</p>
                    </div>

                    <div>
                        <h6>Gender</h6>
                        <p>Male</p>
                    </div>

                    <div>
                        <h6>address</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla adipisci laborum culpa accusamus totam quos.</p>
                    </div>
                </div>
            </div>

        </div>
        <div className='right-side-profile'>
            <h2>My Transaction</h2>
            <div className='d-flex shop-history'>
                <div>
                    <img className='image-shop' src="assets/Product1.png" alt="image" />
                </div>
                <div>
                    <h6>Mouse</h6>
                    <h6>Saturday, 14 Juli 2021</h6>
                    <p>Price : Rp.500.000</p>
                    <p>Sub Total : 500.000</p>
                </div>
                <div>
                    <img className='logo-image' src="assets/Logo.png" alt="logo" />
                </div>
            </div>

        </div>
        </Container>
    </div>
  )
}

export default Profile