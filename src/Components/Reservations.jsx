import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Reservations = () => {
  return (
    <section className="reserve-sec">
      <Container>
        <div>
          <h1 className="text-center text-secondary">
            Make your Reservation Right Now !
          </h1>

          <div className="booking-container">
            <Form className="mt-4 px-3">
              <Row>
                <Col sm={12} md={6}>
                  <h4>Name :</h4>
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
                  <h4>Contact info :</h4>
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

                <h4>Vehicle info :</h4>
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

                <h4>Select services :</h4>
                <Col sm={12} md={6}>
                  <div class="services-container">
                    <Form.Group className="mb-3">
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="wash-and-grooming"
                          name="services"
                          value="wash-and-grooming"
                        />
                        <Form.Label>Wash and Grooming</Form.Label>
                      </div>
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="lube-services"
                          name="services"
                          value="lube-services"
                        />
                        <Form.Label>Lube Services</Form.Label>
                      </div>
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="exterior-interior-detailing"
                          name="services"
                          value="exterior-interior-detailing"
                        />
                        <Form.Label>Exterior & Interior Detailing</Form.Label>
                      </div>
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="engine-tune-ups"
                          name="services"
                          value="engine-tune-ups"
                        />
                        <Form.Label>Engine Tune ups</Form.Label>
                      </div>
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="wash-and-grooming-2"
                          name="services"
                          value="wash-and-grooming"
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
                        />
                        <Form.Label>Hybrid Services</Form.Label>
                      </div>
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="lube-services"
                          name="services"
                          value="lube-services"
                        />
                        <Form.Label>Wheel Alignment</Form.Label>
                      </div>
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="exterior-interior-detailing"
                          name="services"
                          value="exterior-interior-detailing"
                        />
                        <Form.Label>Battery Services</Form.Label>
                      </div>
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="engine-tune-ups"
                          name="services"
                          value="engine-tune-ups"
                        />
                        <Form.Label>Inspection Reports</Form.Label>
                      </div>
                      <div class="service-item">
                        <input
                          type="checkbox"
                          id="wash-and-grooming-2"
                          name="services"
                          value="wash-and-grooming"
                        />
                        <Form.Label>Part Replacements</Form.Label>
                      </div>
                    </Form.Group>
                  </div>
                </Col>
                <h4>Date & Time</h4>
                <Col>
                  <div class="datetime-container">
                    <div class="datetime-item">
                      <input type="date" id="date" name="date" />
                      <label for="date">Date</label>
                    </div>
                    <div class="datetime-item">
                      <input type="time" id="time" name="time" />
                      <label for="time">Time</label>
                    </div>
                  </div>
                </Col>
              </Row>

              <Button variant="primary" type="submit" name="submit" id="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Reservations;
