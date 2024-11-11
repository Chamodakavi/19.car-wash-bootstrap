import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Reservations = () => {
  return (
    <section className="reserve-sec" id="booking">
      <Container>
        <div>
          <h1 className="text-center text-secondary">
            Make your Reservation Now !
          </h1>

          <div className="booking-container">
            <Form className="mt-4 px-3">
              <Row>
                <Col sm={12} md={6}>
                  <h4 className="my-4">Owner info :</h4>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name :</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Last Name :</Form.Label>
                    <Form.Control type="email" placeholder="Enter Last Name" />
                  </Form.Group>
                </Col>

                <Col sm={12} md={6}>
                  <h4 className="my-4">Contact info :</h4>
                  <Form.Group className="mb-3">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control type="email" placeholder="Enter Last Name" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Mobile No :</Form.Label>
                    <Form.Control type="int" placeholder="070 453 1243" />
                  </Form.Group>
                </Col>

                <h4 className="my-4">Vehicle info :</h4>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Vehicle Type :</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Vehicle type (car , lorry , van)"
                    />
                  </Form.Group>
                </Col>

                <Col sm={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Vehicle Number :</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Vehicle Number ( BFO - **** )"
                    />
                  </Form.Group>
                </Col>

                <h4 className="my-4">Select services :</h4>
                <Col sm={12} md={6}>
                  <div class="services-container">
                    <Form.Group className="mb-3">
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="wash-and-grooming"
                          name="services"
                          value="wash-and-grooming"
                          style={{
                            marginRight:'10px'
                          }}
                        />
                        <Form.Label>Wash and Grooming</Form.Label>
                      </div>
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="lube-services"
                          name="services"
                          value="lube-services"
                          style={{
                            marginRight:'10px'
                          }}
                        />
                        <Form.Label>Lube Services</Form.Label>
                      </div>
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="exterior-interior-detailing"
                          name="services"
                          value="exterior-interior-detailing"
                          style={{
                            marginRight:'10px'
                          }}
                        />
                        <Form.Label>Exterior & Interior Detailing</Form.Label>
                      </div>
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="engine-tune-ups"
                          name="services"
                          value="engine-tune-ups"
                           style={{
                            marginRight:'10px'
                          }}
                        />
                        <Form.Label>Engine Tune ups</Form.Label>
                      </div>
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="wash-and-grooming-2"
                          name="services"
                          value="wash-and-grooming"
                           style={{
                            marginRight:'10px'
                          }}
                        />
                        <Form.Label>Wash and Grooming</Form.Label>
                      </div>
                    </Form.Group>
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div class="services-container">
                    <Form.Group className="mb-3">
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="wash-and-grooming"
                          name="services"
                          value="wash-and-grooming"
                           style={{
                            marginRight:'10px'
                          }}
                        />
                        <Form.Label>Hybrid Services</Form.Label>
                      </div>
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="lube-services"
                          name="services"
                          value="lube-services"
                           style={{
                            marginRight:'10px'
                          }}
                        />
                        <Form.Label>Wheel Alignment</Form.Label>
                      </div>
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="exterior-interior-detailing"
                          name="services"
                          value="exterior-interior-detailing"
                           style={{
                            marginRight:'10px'
                          }}
                        />
                        <Form.Label>Battery Services</Form.Label>
                      </div>
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="engine-tune-ups"
                          name="services"
                          value="engine-tune-ups"
                           style={{
                            marginRight:'10px'
                          }}
                        />
                        <Form.Label>Inspection Reports</Form.Label>
                      </div>
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="wash-and-grooming-2"
                          name="services"
                          value="wash-and-grooming"
                           style={{
                            marginRight:'10px'
                          }}
                        />
                        <Form.Label>Part Replacements</Form.Label>
                      </div>
                    </Form.Group>
                  </div>
                </Col>


                <h4 className="my-4">Date & Time</h4>

                <Col md={6} sm={12}>
                  <div class="datetime-container">
                    <div class="datetime-item">
                    <Form.Control
                      type="date"
                      placeholder="Enter Vehicle Number ( BFO - **** )"
                      style={{
                        border:'1px solid #DEE2E6' , 
                        borderRadius:'7px',
                        cursor:'pointer',
                        }}
                    />
                     
                      <label for="date">Date</label>
                    </div>
                    <div class="datetime-item">
                    <Form.Control
                      type="time"
                      placeholder="Enter Vehicle Number ( BFO - **** )"
                      style={{
                        border:'1px solid #DEE2E6' , 
                        borderRadius:'7px',
                        cursor:'pointer',
                        }}
                    />
                      <label for="time">Time</label>
                    </div>
                  </div>
                </Col>
              </Row>

              <button className='btn mt-2 text-light' style={{backgroundColor:'#D90000'}}>Submit</button>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Reservations;
