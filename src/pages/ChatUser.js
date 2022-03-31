import React from 'react'
import HeaderAdmin from '../Components/HeaderAdmin'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ChatUser.css'

function ChatUser() {
  return (
    <div>
        <HeaderAdmin />
        <Container className='d-flex'>
            <div className='mt-4 user-chat-admin'>
                <div className='d-flex'>
                    <img className='me-3' style={{width:'40px', height:'40px'}} src="assets/user1.png" alt="img" />
                    <div>
                        <p style={{color:'white'}}>User1 </p>
                        <p className='text-muted prg'>Hello Admin, I Need Your Help</p>
                    </div>
                </div>
                <div className='d-flex'>
                    <img className='me-3' style={{width:'40px', height:'40px'}} src="assets/user2.png" alt="img" />
                    <div>
                        <p style={{color:'white'}}>User2</p>
                        <p className='text-muted prg'>Hello Admin, This Problem Product to Me</p>
                    </div>
                </div>
            </div>

            <hr className='vr' />

            <div>
                <div className='d-flex admin-chat'>
                    <img className='me-3' src="assets/user1.png" alt="img" />
                    <span className='triangle'></span>
                    <div className='cht' style={{color:'white'}}><p>Hello Admin, I Need Your Help</p></div>
                </div>
                <div>
                    <input className='message' type="text" placeholder='Send Message'/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default ChatUser