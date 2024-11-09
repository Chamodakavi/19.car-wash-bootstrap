import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Data } from '../utils/Data';
import ServiceCard from './ServiceCard';

const OurServices = () => {
  const controls = useAnimation(); // Controls animation state
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.5}); // Detects when 20% of the section is visible

  useEffect(() => {
    if (isInView) {
      controls.start('visible'); // Start animation when in view
    } else {
      controls.start('hidden'); // Reset animation when out of view
    }
  }, [isInView, controls]);

  // Define animation variants for the bottom-to-top effect
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const textVariants = {
    hidden: { opacity: 0, x: -200 }, // Initially off-screen to the left
    visible: { opacity: 1, x: 0 }, // Slide into the center
  };

  return (
    <section id='ourservices' className="servce-section" ref={ref}>
      <Container>
        <motion.h1 
          className="fw-bold" 
          style={{ color: '#D90000' }}
          variants={textVariants}
              initial="hidden"
              animate={controls} // Connect the animation to `controls`
              transition={{ duration: 1, ease: 'easeOut' }}
        >
          OUR SERVICES
        </motion.h1>
        <motion.p 
          className="fs-2 fw-bold my-4"
          variants={textVariants}
              initial="hidden"
              animate={controls} // Connect the animation to `controls`
              transition={{ duration: 1, ease: 'easeOut' }}
        >
            Committed to provide the best care with supervision and trust.</motion.p>

        <Row className="g-5 mt-4">
          {Data.map((card, index) => (
            <Col sm={12} md={4} key={card.id}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={controls} // Connect the animation to `controls`
                transition={{ duration: 0.5, delay: index * 0.2 }}
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
