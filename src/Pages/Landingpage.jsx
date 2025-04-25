import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landingpage() {

    const navigateByUrl =useNavigate()
  return (
    <>
      <Row className='mt-5 d-flex align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
        <h1 style={{color:"blueviolet", fontSize:"40px"}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laboriosam quisquam accusamus similique aspernatur, ea quo mollitia! Et quae voluptas qui! Commodi recusandae quidem exercitationem, reprehenderit harum unde. Aperiam, mollitia.</p>
        <Button onClick={()=>navigateByUrl('/home')} className='btn btn-info'>Get Started</Button>
        </Col>
        <Col lg={5}>
        <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
        </Col>
        <Col></Col>
    </Row>


    <div className='container mb-3 mt-5 d-flex flex-column align-items-center justify-content-center w-100'>
        <h5 className='text-warning' style={{fontSize:'40px'}}>Features</h5>
        
        <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={"300px"} width={"300px"} src="https://th.bing.com/th/id/R.2ff5aa643c905f9d5688ece7717bc5d6?rik=kroPZpZf3v0P6Q&riu=http%3a%2f%2fi787.photobucket.com%2falbums%2fyy158%2fDJSWAGER%2fAnimatedMusicBars-4.gif&ehk=Jt%2bHB8%2frVmnJ9EejP%2beX%2fwGWVfIi5UiQnVqScIe22ZU%3d&risl=&pid=ImgRaw&r=0" />
      <Card.Body className='text-danger fw-bolder bg-info'>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={"300px"} width={"300px"} src="https://media1.tenor.com/images/18a0a33c874e26a55fe2456347567ae9/tenor.gif?itemid=16911003" />
      <Card.Body className='text-danger fw-bolder bg-info'>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={"300px"} width={"300px"} src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1027.gif" />
      <Card.Body className='text-danger fw-bolder bg-info'>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
       </div>
        </div>

        
     <div className='container border rounded p-4 border-light mt-5 d-flex justify-content-center align-items-center'>
        <div className='col-lg-5'>
            <h4 className='text-warning'>Simple, Powerful & fast</h4>
            <h6 className='mb-5 mt-4'> <span className='text-warning'>Play Everything: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quo. Laudantium laboriosam illum ipsam distinctio eaque praesentium velit, repellat, vitae tenetur asperiores ullam nam? At amet quas assumenda numquam earum!</h6>
            <h6 className='mb-5 mt-4'> <span className='text-warning'>Categorize Videos: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quo. Laudantium laboriosam illum ipsam distinctio eaque praesentium velit, repellat, vitae tenetur asperiores ullam nam? At amet quas assumenda numquam earum!</h6>
            <h6 className='mb-5 mt-4'> <span className='text-warning'>Managing Videos: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quo. Laudantium laboriosam illum ipsam distinctio eaque praesentium velit, repellat, vitae tenetur asperiores ullam nam? At amet quas assumenda numquam earum!</h6>
        </div>
        <div className='col-lg-5 ms-5'>
        <iframe width="500" height="315" src="https://www.youtube.com/embed/l73SpIeI0ho?si=d8mxfF42G3gdjnaY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </div>

     </div>

    </>
  )
}

export default Landingpage
