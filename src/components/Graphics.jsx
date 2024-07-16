import { Container, Row, Col } from 'react-bootstrap';
import { BusinessCardComponent } from './BusinessCard';
import RocketIcon from '../assets/img/rocket2.jpeg';
import RobotIcon from '../assets/img/Roboticon.png';
import PlanningIcon from '../assets/img/planIcon.png'

export const Graphics = () => {
  return (
    <section className="bg-black py-6">
      <Container>
        <Row className="align-items-center">
          {/* Business Card Column (Left 1/3) */}
          <Col xs={12} md={4} className="d-flex justify-content-center mb-md-0 mb-4">
    <BusinessCardComponent />
          </Col>

          {/* Process Steps Column (Right 2/3) */}
          <Col xs={12} md={8}>
            <div className="process-steps">
              <h1 className="text-white mb-4">From App Planning to Final Deployment, Ryan's got you covered!</h1>
              <p className="lead text-muted mb-4">I will guide and work with you through every step of the app development process.</p>
              {/* Placeholder icons and text (you can replace these) */}
              <div className="d-flex text-center flex-wrap mb-4">
                <div className="step-item me-4 mb-2">

                  <i className="bi bi-lightbulb-fill text-primary fs-3 mb-2"></i> {/* Replace with relevant icon */}
                  <p className="text-muted">Planning & Strategy</p>
                  <div className='business-card'>

                  <img src={PlanningIcon} className='card-img' alt="Web App Planning" style={{ height: "48px", width: "48px" }} />
</div>
                </div>
                <div className="step-item me-4 mb-2">
                  <i className="bi bi-gear-fill text-primary fs-3 mb-2"></i> {/* Replace with relevant icon */}
                  <p className="text-muted">Design & Prototyping</p>
                  <div className='business-card'>
                  <img src={RobotIcon} className='card-img' alt="Web Design" style={{ height: "48px", width: "48px" }} />
                  </div>
                </div>
                <div className="step-item">

                  <i className="bi bi-code-slash text-primary fs-3 mb-2"></i> {/* Replace with relevant icon */}
                  <p className="text-muted">Development & Testing</p>
                  <div className='business-card'>

                  <img src={RocketIcon} className='card-img' alt="Deployment Management" style={{ height: "48px", width: "48px" }} />
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