import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AImg from '../imgs/automiraj-three-pillars.png'
import CAR from '../imgs/cars.jpg'
const AboutUs = () => {
  return (
    <section id='aboutus'>
        

        <Container>

        <h1 className='my-5 fw-bold' style={{color:'#D90000'}}>About US</h1>

            <Row>
                <Col xs={12} md={6}>
                    <h2>
                    Over <span style={{color:'#D90000'}}>28 Years</span> of Excellence in the automotive service industry
                    </h2>
                    <p className="lead mx-3">
                    Sparkle car wash being Sri Lanka’s largest and the best auto service network; has the most diverse service portfolio. Auto Miraj is your one stop station for all of your maintenance, repairs, and services. Auto Miraj Family drives to success based on three main pillars which are, Promptness, Respect & Oneness.
                    </p>
                    <img src={AImg} alt="" srcset="" className='img-fluid mt-4' />
                </Col>
                <Col xs={12} md={6}>
                    <h2 className='fw-bold mb-3' style={{color:'#D90000'}}>OUR NETWORK</h2>
                    <h2>Over <span style={{color:'#D90000'}}>40 State of the Art </span>Facilities to serve across the country</h2>
                    <p className="lead mx-3">
                    With a robust network of over 40 state-of-the-art facilities strategically located across the nation, we're committed to delivering exceptional service to customers nationwide. Our extensive reach ensures that we're always nearby to meet your needs, whether it's routine maintenance, specialized repairs, or innovative solutions.
                    </p>
                    <img src={CAR} alt="" srcset="" className='img-fluid mt-4' />
                </Col>
            </Row>

        </Container>
    </section>
  )
}

export default AboutUs
