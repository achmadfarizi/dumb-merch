import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './RightLanding.css'

function RightLanding() {
  return (
    <div className='right-landing'>
        <img className='logo' src="/assets/Logo.png" alt="logo" />
        <h2>Easy, Fast and Reliable</h2>
        <p>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>

        <div>
        <Link to='/'>
          <Button variant="danger" className='login'>
              Login
          </Button>
        </Link>

        <Link to='register'>
          <Button variant="dark" className='register'>
              Register
          </Button>
        </Link>
        </div>
    </div>
  )
}

export default RightLanding