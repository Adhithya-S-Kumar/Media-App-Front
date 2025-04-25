import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <>
   <Row className='mt-5 d-flex align-items-center justify-content-between w-100 '>
     <Col lg={3} className='align-items-center ml-3'>
     <h4><i class="fa-solid fa-play mr-2 "></i>Media-Player</h4>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam eaque suscipit doloribus? Facilis in consequatur vero, optio, modi maxime aperiam pariatur illo, perspiciatis cumque eum? Perferendis ratione explicabo tempora.</p>
     </Col>
     <Col lg={2}>
     <h4>Links</h4>
     <ul style={{listStyle:"none"}}>
     <li><a href="">Landing Page</a></li>
     <li><a href="">Home Page</a></li>
     <li><a href="">Watch History</a></li>
    
     </ul>
     </Col>
     <Col lg={2}>
     <h4>Guides</h4>
     <ul style={{listStyle:"none"}}>
     <li>React</li>
     <li>React Bootstrap</li>
     <li>Bootswatch</li>
     </ul>
     </Col>
     <Col lg={3}>
     <h4>Contcat US</h4>
     <input type="text" placeholder='email id' />
     <button className='btn btn-warning ml-2 btn-sm'>Subscribe</button>
     <div className='p-1 d-flex justify-content-between ml-4 mr-4'>
     <i class="fa-brands fa-facebook" style={{fontSize:'20px'}}></i>
     <i class="fa-brands fa-twitter" style={{fontSize:'20px'}}></i>
     <i class="fa-brands fa-instagram" style={{fontSize:'20px'}}></i>
     <i class="fa-brands fa-linkedin" style={{fontSize:'20px'}}></i>
     </div>
     </Col>
   </Row>
    </>
  )
}

export default Footer
