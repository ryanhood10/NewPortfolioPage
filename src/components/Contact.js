import React, { useState } from "react";
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { validateEmail } from '../utils/validators';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedErrors = { ...errors, [name]: value.trim() === '' ? 'Input is required.' : null };
    setErrors(updatedErrors);
    setFormData({ ...formData, [name]: value });
  };

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

    if (Object.keys(newErrors).length === 0) {
      try {
        const emailData = {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        };
        const response = await axios.post('https://ryans-portfolio.herokuapp.com', emailData);
        alert(response.data.message);
      } catch (error) {
        console.error(error);
        alert('Failed to send email.');
      }
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
                  <form onSubmit={handleSubmit}>
                    <h2>Get In Touch</h2>
                    <br></br>
                    <div className="get-in-touch">
                      <div>
                        <p style={{ color: 'white' }}>Name:</p>
                        <input
                          type="name"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="rounded-input"
                          style={{ color: 'white' }}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                      </div>
                      <div>
                        <p style={{ color: 'white' }}>Email:</p>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="rounded-input"
                          style={{ color: 'white' }}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                      </div>
                      <div>
                        <p style={{ color: 'white' }}>Message:</p>
                        <textarea
                          placeholder="Message"
                          name="message"
                          id="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="rounded-textarea"
                          style={{ color: 'white' }}
                        ></textarea>
                        {errors.message && <span className="error">{errors.message}</span>}
                      </div>
                      <button className="EmailButton" type="submit">Send</button>
                    </div>
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
