import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CusImg from "../imgs/boy-with-envelope-his-hands_650542-1302.jpg";

const ContactUs = () => {
  return (
    <section className="mt-5" id="contactus">
      <Container>
        <div className="contact-container ">
          <Row>
            <Col sm={12} md={6}>
              <h1
                className="contact-title fw-bold"
                style={{ color: "#D90000" }}
              >
                Contact Us
              </h1>
              <Form className="mt-4 px-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name :</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message here"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  name="submit"
                  id="submit"
                >
                  Submit
                </Button>
              </Form>
            </Col>
            <Col md={6}>
              <img
                src={CusImg}
                alt=""
                srcset=""
                className="img-fluid d-none d-md-block"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
