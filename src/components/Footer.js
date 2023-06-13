import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col xs={12} sm={6}>
            <span className="navbar-logo">Ryan Hood</span>
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <br></br>
              
              <ul className="footer-icons">
                <li>
                  <a href="https://github.com/ryanhood10">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/DevRyanH">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ryan-hood-11aa2b239/">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@DeveloperRyan">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                  </a>
                </li>
               
              </ul>
            </div>
            <p>Connect with me furthur!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
