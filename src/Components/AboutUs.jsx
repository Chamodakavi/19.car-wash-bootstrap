import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { motion, useAnimation, useInView } from 'framer-motion';
import AImg from '../imgs/automiraj-three-pillars.png';
import CAR from '../imgs/cars.jpg';

const AboutUs = () => {
  const controls = useAnimation(); // Controls animation state
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.4 }); // Detects when 40% of the section is visible

  useEffect(() => {
    if (isInView) {
      controls.start('visible'); // Start animation when in view
    } else {
      controls.start('hidden'); // Reset animation when out of view
    }
  }, [isInView, controls]);

  // Define animation variants for the left-to-right effect
  const textVariants = {
    hidden: { opacity: 0, x: -200 }, // Initially off-screen to the left
    visible: { opacity: 1, x: 0 }, // Slide into the center
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 200 }, // Initially off-screen to the right
    visible: { opacity: 1, x: 0 }, // Slide into the center
  };

  return (
    <section id='aboutus' ref={ref}>
      <Container>
        <motion.h1 
            className='my-5 fw-bold' 
            style={{ color: '#D90000' }}
            variants={textVariants}
              initial="hidden"
              animate={controls} // Connect the animation to `controls`
              transition={{ duration: 1, ease: 'easeOut' }}
        >
            About US</motion.h1>

        <Row className='g-5'>
          <Col xs={12} md={6}>
            <motion.h2
              variants={textVariants}
              initial="hidden"
              animate={controls} // Connect the animation to `controls`
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Over <span style={{ color: '#D90000' }}>28 Years</span> of Excellence in the automotive service industry
            </motion.h2>

            <motion.p
              className="lead mx-3"
              variants={textVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              Sparkle car wash being Sri Lanka’s largest and the best auto service network; has the most diverse service portfolio. Auto Miraj is your one stop station for all of your maintenance, repairs, and services. Auto Miraj Family drives to success based on three main pillars which are, Promptness, Respect & Oneness.
            </motion.p>

            <motion.img
              src={AImg}
              alt="Automiraj Three Pillars"
              className='img-fluid mt-4'
              variants={imageVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 1.4, ease: 'easeOut' }}
            />
          </Col>

          <Col xs={12} md={6}>
            <motion.h2
              className='fw-bold mb-3'
              style={{ color: '#D90000' }}
              variants={textVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              OUR NETWORK
            </motion.h2>

            <motion.h2
              variants={textVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              Over <span style={{ color: '#D90000' }}>40 State of the Art</span> Facilities to serve across the country
            </motion.h2>

            <motion.p
              className="lead mx-3"
              variants={textVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 1.4, ease: 'easeOut' }}
            >
              With a robust network of over 40 state-of-the-art facilities strategically located across the nation, we're committed to delivering exceptional service to customers nationwide. Our extensive reach ensures that we're always nearby to meet your needs, whether it's routine maintenance, specialized repairs, or innovative solutions.
            </motion.p>

            <motion.img
              src={CAR}
              alt="Our Network"
              className='img-fluid mt-4'
              variants={imageVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 1.6, ease: 'easeOut' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
