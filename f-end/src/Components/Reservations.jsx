import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Reservations = () => {
  const [booking, setBooking] = useState({
    fname: "",
    lname: "",
    email: "",
    mobileno: "",
    vtype: "",
    vnumber: "",
    services: "",
    date: "",
    time: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const clearForm = () => {
    setBooking({
      fname: "",
      lname: "",
      email: "",
      mobileno: "",
      vtype: "",
      vnumber: "",
      services: "",
      date: "",
      time: "",
    });
  };
  const handleServiceChange = (e) => {
    const { value, checked } = e.target;

    setBooking((prev) => {
      const services = checked
        ? [...prev.services, value]
        : prev.services.filter((service) => service !== value);
      return { ...prev, services };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/booking", {
        ...booking,
        services: JSON.stringify(booking.services),
      });
      setError(false);
      clearForm();
    } catch (error) {
      console.log("add booking error :" + error);
      setError(true);
      clearForm();
    }
  };

  return (
    <section className="reserve-sec" id="booking">
      <Container>
        <div>
          <h1 className="text-center text-secondary">
            Make your Reservation Now !
          </h1>

          <div className="booking-container">
            <Form className="mt-4 px-3" onSubmit={handleClick}>
              <Row>
                <Col sm={12} md={6}>
                  <h4 className="my-4">Owner info :</h4>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name :</Form.Label>
                    <Form.Control
                      type="text"
                      value={booking.fname}
                      placeholder="Enter First Name"
                      name="fname"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Last Name :</Form.Label>
                    <Form.Control
                      type="text"
                      value={booking.lname}
                      placeholder="Enter Last Name"
                      name="lname"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col sm={12} md={6}>
                  <h4 className="my-4">Contact info :</h4>
                  <Form.Group className="mb-3">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      value={booking.email}
                      name="email"
                      onChange={handleChange}
                      required
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Mobile No :</Form.Label>
                    <Form.Control
                      type="int"
                      placeholder="070 453 1243"
                      value={booking.mobileno}
                      name="mobileno"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <h4 className="my-4">Vehicle info :</h4>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Vehicle Type :</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Vehicle type (car , lorry , van)"
                      onChange={handleChange}
                      required
                      value={booking.vtype}
                      name="vtype"
                    />
                  </Form.Group>
                </Col>

                <Col sm={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Vehicle Number :</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Vehicle Number ( BFO - **** )"
                      onChange={handleChange}
                      required
                      name="vnumber"
                      value={booking.vnumber}
                    />
                  </Form.Group>
                </Col>

                <h4 className="my-4">Select services :</h4>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3">
                    {[
                      {
                        label: "Wash and Grooming",
                        value: "wash-and-grooming",
                      },
                      { label: "Lube Services", value: "lube-services" },
                      {
                        label: "Exterior & Interior Detailing",
                        value: "exterior-interior-detailing",
                      },
                      { label: "Engine Tune-ups", value: "engine-tune-ups" },
                      { label: "Hybrid Services", value: "hybrid-services" },
                      { label: "Wheel Alignment", value: "wheel-alignment" },
                      { label: "Battery Services", value: "battery-services" },
                      {
                        label: "Inspection Reports",
                        value: "inspection-reports",
                      },
                      {
                        label: "Part Replacements",
                        value: "part-replacements",
                      },
                    ].map((service) => (
                      <div className="service-item" key={service.value}>
                        <input
                          type="checkbox"
                          id={service.value}
                          name="services"
                          value={service.value}
                          checked={booking.services.includes(service.value)}
                          onChange={handleServiceChange}
                          style={{ marginRight: "10px" }}
                        />
                        <Form.Label htmlFor={service.value}>
                          {service.label}
                        </Form.Label>
                      </div>
                    ))}
                  </Form.Group>
                </Col>

                {/* <h4 className="my-4">Select services :</h4>
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
                </Col> */}

                <h4 className="my-4">Date & Time</h4>

                <Col md={6} sm={12}>
                  <div class="datetime-container">
                    <div class="datetime-item">
                      <Form.Control
                        type="date"
                        name="date"
                        value={booking.date}
                        onChange={handleChange}
                        required
                      />

                      <label for="date">Date</label>
                    </div>
                    <div class="datetime-item">
                      <Form.Control
                        type="time"
                        name="time"
                        value={booking.time}
                        onChange={handleChange}
                        required
                      />
                      <label for="time">Time</label>
                    </div>
                  </div>
                </Col>
              </Row>

              <button
                className="btn mt-2 text-light"
                style={{ backgroundColor: "#D90000" }}
                type="submit"
              >
                Submit
              </button>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Reservations;
