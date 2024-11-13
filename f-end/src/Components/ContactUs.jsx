import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import CusImg from "../imgs/boy-with-envelope-his-hands_650542-1302.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {



  const [message,setMessage] = useState(
    {name: "",
    email: "",
    message: ""}
  )
  const [error,setError] = useState(false)
  const navigate = useNavigate()
  const [success,setSuccess] = useState(false)

  const handleChange = (e) =>{
   setMessage(
    (prev) => ({ ...prev,[e.target.name]:e.target.value})
   )
  }

  const clearForm = ()=>{
    setMessage({
      name:"",
      email: "",
      message:""
    })
  }

  const handleClick= async (e)=>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/contactus", message)
      setSuccess(true)
      setError(false)
      clearForm()
    } catch (err) {
      console.log('submit error :'+err)
      setError(true)
      setSuccess(false)
      clearForm()
    }
  }

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
              <Form className="mt-4 px-3" onSubmit={handleClick}>
                <Form.Group className="mb-3" >
                  <Form.Label>Name :</Form.Label>
                  <Form.Control
                   type="text" 
                   name="name" 
                   placeholder="Enter Name" 
                   onChange={handleChange} 
                   value={message.name}
                   required/>
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Email address :</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    placeholder="Enter email"
                    value={message.email} 
                    required/>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Message :</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={handleChange}
                    placeholder="Enter your message here"
                    required
                    value={message.message}
                    name="message"
                  />
                </Form.Group>

                <Button type="submit">Submit</Button>
              </Form>
              {
                success && (
                  <Alert className="alert" variant="success" onClose={() => setSuccess(false)} dismissible>
                  Message sent successfully!
                </Alert>
                )
              }  
              {error && <p className="text-danger mt-3">Something went wrong. Please try again.</p>}


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
