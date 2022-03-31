import React from 'react'
import Header from '../Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Chat.css'


function Chat() {
  return (
    <div className='chat'>
        <Header />
        <div className='d-flex'>

            <div className='d-flex admin-cht'>
                <img className='me-3' src="assets/admin.svg" alt="image" />
                <div>
                    <p>Admin</p>
                    <p className='text-muted p-admin'>Yes, Is there anything I can help</p>
                </div>
            </div>

            <hr className='vr' />

            <div>
                <div className='user-cht'><p>Hello Admin, I Need Your Help</p></div>
                <div className='d-flex admin-chat'>
                    <img className='me-3' src="assets/admin.svg" alt="image" />
                    <span className='triangle'></span>
                    <div className='cht'><p>Yes, Is there anyting I can help ?</p></div>
                </div>
                <div>
                    <input className='message' type="text" placeholder='Send Message'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Chat