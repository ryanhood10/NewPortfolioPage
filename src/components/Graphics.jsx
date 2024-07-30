import { Container, Row, Col } from 'react-bootstrap';
import { BusinessCardComponent } from './BusinessCard';
import RocketIcon from '../assets/img/rocket2.jpeg';
import RobotIcon from '../assets/img/Roboticon.png';
import PlanningIcon from '../assets/img/planIcon.png';

export const Graphics = () => {
  return (
    <section className="bg-black py-6">
      <Container>
        <Row className="flex flex-col md:flex-row align-items-center">
          {/* Business Card Column (Full width on mobile, 1/3 on tablet and up) */}
          <Col xs={12} md={4} className="flex justify-center mb-4 md:mb-0">
            <BusinessCardComponent />
          </Col>

          {/* Process Steps Column (Full width on mobile, 2/3 on tablet and up) */}
          <Col xs={12} md={8}>
            <div className="process-steps">
              <h1 className="text-white mb-4 text-lg md:text-xl lg:text-2xl">
                From App Planning to Final Deployment, Ryan's got you covered!
              </h1>
              <p className="lead text-muted mb-4 text-xs md:text-sm lg:text-base">
                I will guide and work with you through every step of the app development process.
              </p>
              {/* Placeholder icons and text */}
              <div className="d-flex text-center flex-wrap mb-4">
                <div className="step-item me-4 mb-2 flex flex-col items-center">
                  <i className="bi bi-lightbulb-fill text-primary text-xl md:text-lg lg:text-2xl mb-2"></i> {/* Replace with relevant icon */}
                  <p className="text-muted text-xs md:text-sm lg:text-base">Planning & Strategy</p>
                  <div className='business-card'>
                    <img src={PlanningIcon} className='card-img' alt="Web App Planning" />
                  </div>
                </div>
                <div className="step-item me-4 mb-2 flex flex-col items-center">
                  <i className="bi bi-gear-fill text-primary text-xl md:text-lg lg:text-2xl mb-2"></i> {/* Replace with relevant icon */}
                  <p className="text-muted text-xs md:text-sm lg:text-base">Design & Prototyping</p>
                  <div className='business-card'>
                    <img src={RobotIcon} className='card-img' alt="Web Design" />
                  </div>
                </div>
                <div className="step-item flex flex-col items-center">
                  <i className="bi bi-code-slash text-primary text-xl md:text-lg lg:text-2xl mb-2"></i> {/* Replace with relevant icon */}
                  <p className="text-muted text-xs md:text-sm lg:text-base">Development & Testing</p>
                  <div className='business-card'>
                    <img src={RocketIcon} className='card-img' alt="Deployment Management" />
                  </div>
                </div>
              </div>

              {/* Button (Optional) */}
              {/* <a href="#" className="btn btn-primary">Let's Get Started</a> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
