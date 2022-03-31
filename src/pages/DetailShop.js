import React from 'react'
import Header from '../Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Button} from 'react-bootstrap'
import './DetailShop.css'
import {Link} from 'react-router-dom'


function DetailShop() {
  return (
    <div>
        <Header />
        <Container className='d-flex detail-shop'>
            <div>
                <img src="assets/mouse-shop.png" alt="" />
            </div>
            <div className='Desc-shop'>
                <h2 className='danger'>Mouse</h2>
                <p className='mb-3'>stock: 600</p>
                <p>
                - Wireless Mouse<br/>
                - Konektivitas wireless 2.4 GHz<br/>
                - Jarak wireless hingga 10 m<br/>
                - Plug and Play<br/>
                - Baterai tahan hingga 12 bulan<br/>
                </p>
                <p>
                Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.
                Rp.300.900
                </p>
                <p className='price'>Rp.300.900</p>
            </div>
        </Container>
        <Link to='/checkout'>
          <Button variant='danger' className='mt-3 btn-buy'>Buy</Button>
        </Link>
    </div>
  )
}

export default DetailShop