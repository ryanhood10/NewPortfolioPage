import React, { useState } from "react";
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { validateEmail } from '../utils/validators';

export function Contact() {
  // Set up state for form data, errors, and reCAPTCHA
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedErrors = { ...errors, [name]: value.trim() === '' ? 'Input is required.' : null };
    setErrors(updatedErrors);
    setFormData({ ...formData, [name]: value });
  };

  // Handle reCAPTCHA change
  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = Object.keys(formData).reduce((acc, key) => {
      if (formData[key].trim() === '') {
        acc[key] = 'Input field is required.';
      } else if (key === 'email' && !validateEmail(formData[key])) {
        acc[key] = 'Invalid email address.';
      }
      return acc;
    }, {});
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0 && recaptchaToken) {
      try {
        const emailData = {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          recaptchaToken: recaptchaToken,
        };
        const response = await axios.post('https://ryans-portfolio.herokuapp.com/contact', emailData);
        alert(response.data.message);
      } catch (error) {
        console.error(error);
        alert('Failed to send email.');
      }
    } else if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA.');
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Contact</h2>
                    {['name', 'email', 'message'].map((field) => (
                      <div key={field}>
                        <p>{field[0].toUpperCase() + field.slice(1)}:</p>
                        {field !== 'message' ? (
                          <input
                            type={field === 'email' ? 'email' : 'text'}
                            id={field}
                            name={field}
                            placeholder={field[0].toUpperCase() + field.slice(1)}
                            className={`${field}-input`}
                            value={formData[field]}
                            onChange={handleInputChange}
                            required
                          />
                        ) : (
                          <textarea
                            placeholder="Message"
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                          ></textarea>
                        )}
                        {errors[field] && <span className="error">{errors[field]}</span>}
                      </div>
                    ))}
                    <ReCAPTCHA
                      sitekey="6Ldo7BAqAAAAAEAM6cDjWvoDm6Tp9ryPorC5eeMV"
                      onChange={handleRecaptchaChange}
                    />
                    <button type="submit">Send</button>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
