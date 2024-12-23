import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Img from '../imgs/wash.png'
import Bgimg from '../imgs/bb.jpg'
import { Link } from 'react-router-dom'
const Welcome = () => {
  return (
    <section className='ng-car pt-5 mb-5 pb-5'>
        <Container>
            <Row>
                <Col xs={12} md={9} lg={6} className='welcome-intro'>
                    <h1 className='fw-bold' style={{color:'#D90000'}}>Shine Brighter, Drive Smoother.</h1>
                    <p className='lead'>
                    Experience the ultimate car care with <span className='fw-bold text-danger'>Auto Details</span>
                    . Our expert team and advanced technology will restore your
                    vehicle's luster and protect it from the elements. Book your
                    appointment today and let us pamper your car.
                    </p>
                    <Link to='/booknow/#booking' className='btn mt-2 text-light' style={{backgroundColor:'#D90000'}}>Book Now</Link>
                </Col>
                {/* <Col xs={12} md={6}>
                    <img src={Bgimg} alt="" srcset="" className='img-fluid ' />
                </Col> */}
            </Row>
        </Container>
    </section>
  )
}

export default Welcome
