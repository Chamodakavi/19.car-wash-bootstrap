import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Data } from "../utils/Data";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const OurServices = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start slightly below and invisible
    visible: { opacity: 1, y: 0 }, // Animate to the final position and opacity
  };

  return (
    <section className="servce-section">
      <Container>
        <h1 className="fw-bold  " style={{ color: "#D90000" }}>
          OUR SERVICES
        </h1>
        <p className="fs-2 fw-bold my-4">
          Committed to provide the best care with supervision and trust.
        </p>

        <Row className="g-5 mt-4">
          {Data.map((card,index) => (
            <Col sm={12} md={4} key={card.id}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.2 }} // Adds a staggered delay for each card
              >
                <ServiceCard card={card} />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;
