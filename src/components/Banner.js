import { useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-router-dom';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  // const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [delta, setDelta] = useState(160); // set delta to a constant value
  const [index, setIndex] = useState(1);
  const toRotate = ["Creative Web Developer", "Software Developer", "Database Engineer" ]; 
  const period = 900;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])
  

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(150);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <br></br>
                <br></br>
                <br></br>
                <h1> {`👋Hi! I'm Ryan Hood `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Software Developer", "Database Engineer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>⭐ Software Developer with a certificate in Full-Stack Web Development from Vanderbilt University and skilled in Javascript, 
                    Python, Dart/Flutter, TailwindCSS, BootstrapCSS, AI and Databases.  I have hands-on experience with REST APIs, AI API calls, MongoDB, Express, React, and Node.js.⭐
                    <br></br>
                    Available for hire and collaboration. Please send an email or connect with me on my Twitter or LinkedIn at the bottom of the page.
                    <br></br>
                    <br></br>
                    🌱 I believe the integration of technology into everyday business is a key driver for growth and advancement.
                    <br></br>
                    <br></br>
                    <br></br>
                    📫 You can find my contact information in my Resume, or send me an email through the Contact Form. 📫
                    
                    </p>
                    <a href="/Resume.pdf#zoom=125" target="_blank" rel="noopener noreferrer">
                    <button className="resume-btn" >Resume <ArrowRightCircle size={25} /></button>
                    </a>
                <br></br>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}