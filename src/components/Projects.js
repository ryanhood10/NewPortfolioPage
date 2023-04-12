import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Project 1",
      description: "Impacts of the Pandemic on Phoenix Housing",
      githubLink: "https://github.com/Mun-Min/Project_One",
      imgUrl: projImg1,
    },
    {
      title: "Project 2",
      description: "Developing an Investment Portfolio via ChatBot",
      githubLink: "https://github.com/Mun-Min/Project_3",
      imgUrl: projImg2,
    },
    {
      title: "Project 3",
      description: "Stock Data Fetcher",
      githubLink: "https://github.com/Mun-Min/Stock_Data_Fetcher",
      imgUrl: projImg3,
    },
  ];

  const projects_tab_2 = [
    {
      title: "Project 4",
      description: "Crypto Currency FOMO (Fear-of-Missing-Out) Calculator",
      githubLink: "https://github.com/Mun-Min/Crypto_FOMO_Calculator",
      imgUrl: projImg4,
    },
    {
      title: "Project 5",
      description: "Forecasting Net Prophet",
      githubLink: "https://github.com/Mun-Min/Forecasting_Net_Prophet",
      imgUrl: projImg5,
    },
    {
      title: "Project 6",
      description: "Machine Learning Trading Bot",
      githubLink: "https://github.com/Mun-Min/ML_Trading_Bot",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A collection of projects that serves as a demonstration of technical skills and experience, providing potential clients or employers an overview of the showcased work.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects_tab_2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
