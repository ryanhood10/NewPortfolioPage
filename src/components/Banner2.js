import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export const Banner2 = () => {
  return (
    <section className="banner2" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
            <h1 className="text-white text-3xl font-bold leading-tight">
                Web App Development for Modern Businesses
              </h1>
              <p className="text-white text-lg mt-4">
                I build exceptional web applications tailored to your specific needs. Leverage the power of MongoDB, Express, React, and Node.js to create robust and scalable solutions.
              </p>
              <p className="text-white text-base mt-4">
                My expertise extends beyond MERN: JavaScript, Python, Dart/Flutter, TailwindCSS, BootstrapCSS, AI, and databases. I'm also proficient in building REST APIs, integrating AI APIs, and developing AI Chatbots using IBM Watson.
              </p>
              <a href="#connect">
                <button className="mt-4 px-6 py-3 border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-colors duration-300 flex items-center">
                  Connect <ArrowRightCircle size={25} className="ml-2" />
                </button>
              </a>
              <br></br>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* You can add any additional content or images here if needed */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}
