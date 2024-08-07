import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Import photos
import DishMate from "../assets/img/DishMateScreenShot6.jpg";
import DishMateMobile from "../assets/img/DishMateMobile5.jpg";
import cybermart from "../assets/img/cybermart.jpg";
import BookSearch from "../assets/img/BookSearch1.jpg";
import Basketball from "../assets/img/BasketballPage.jpg";
import projImg4 from "../assets/img/ProjectPilot1.jpg";
import projImg5 from "../assets/img/WOTS2.png";
import projImg6 from "../assets/img/WeatherForecast2.png";
import coverLetter from "../assets/img/CoverLetterGenerator.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import chatgpt from "../assets/img/ChatGPTClone.jpg";
import employeeTracker from "../assets/img/EmployeeTracker.jpg";
import SherlockSocial from '../assets/img/SherlockSocial2.png';


export const Projects = () => {

  // Project items
  const projects = [
    {
      title: "DishMate",
      description: "Personal Chef's assistant powered by ChatGPT. Created using React, Javascript and Nodejs. Search and Save premade recipes, as well has have ChatGPT generate a recipe based off of your ingredients.",
      githubLink: "https://dish-mate.herokuapp.com/",
      imgUrl: DishMate,
    },
    {
      title: "Book Search Application",
      description: "Save and Search Google Books API to save to your user data. GraphQL API built with Apollo Server. This app was built using MERN stack- using React, APIs, MongoDB and Nodejs.",
      githubLink: "https://search4booksapplication.herokuapp.com/",
      imgUrl: BookSearch,
    },
    {
      title: "React Landing Page",
      description: 'Website for a youth basketball team. This is a basic React landing page that uses Nodejs and NodeMailer.',
      githubLink: "https://tnheat.herokuapp.com",
      imgUrl: Basketball,
    },
  ];

  const projects_tab_2 = [
    {
      title: "Project Pilot",
      description: "Project Manager Application written with Handlebars, SQL database, Nodejs and Express.",
      githubLink: "https://floating-bayou-84303.herokuapp.com/login",
      imgUrl: projImg4,
    },
    {
      title: "Social Media Application",
      description: "Social Chatroom- this application was built using MERN stack. It was built with an express server, React library, and MongoDB.",
      githubLink: "https://github.com/JuanMullert/WOTS_PROJECT",
      imgUrl: projImg5,
    },
    {
      title: "Weather Dashboard",
      description: "Weather API with custom icons for each temperate. This project was written solely in javascript and is using an API call.",
      githubLink: "https://ryanhood10.github.io/Module6Challenge/",
      imgUrl: projImg6,
    },
  ];
  const projects_tab_3 = [
    {
      title: "Cover Letter Generator",
      description: "Prompts ChatGPT to generate a Cover Letter for a job application. This project uses React, Nodejs, and calls ChatGPT's AI",
      githubLink: "https://coverletter-generator-a3175c86342a.herokuapp.com/",
      imgUrl: coverLetter,
    },
    {
      title: "ChatGPT Clone",
      description: "This project is a clone of ChatGPT built with React, Nodejs, and OpenAI's API.",
      githubLink: "https://ryanschatgpt-14a492da303f.herokuapp.com/",
      imgUrl: chatgpt,
    },
    {
      title: "SQL Database",
      description: "This is my back-end database for tracking employees.",
      githubLink: "https://github.com/ryanhood10/EmployeeManager",
      imgUrl: employeeTracker,
    },
  ];
  const projects_tab_4 = [
    {
      title: "DishMate Mobile",
      description: "Mobile Application written in flutter/dart. Takes user input to prompt ChatGPT for a recipe. Click for GitHub repo",
      githubLink: "https://github.com/ryanhood10/FlutterProject",
      imgUrl: DishMateMobile,
    },
    {
      title: "CyberMart",
      description: "Mock online Robot store. Built with TailwindCSS, React, Nodejs, and a JSON database. All images (besides products) were generated using MidjourneyAI.",
      githubLink: "https://cybermart-0a118a0c627e.herokuapp.com/",
      imgUrl: cybermart,
    }
  ];

  // Define the single card for the empty div
  const mvpProject = {
    title: "Most Valuable Project",
    description: "This is a full-stack project demonstrating a wide range of technologies, along with intricate data management and a robust user interface.",
    githubLink: "https://sherlocksocial.io/",
    imgUrl: SherlockSocial, // Replace with the appropriate image
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>A collection of projects that serves as a demonstration of technical skills and experience.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects_tab_2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects_tab_3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {projects_tab_4.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>

                  <h2>MVP</h2>
                  <p>My Most Valuable Project. This full-stack project demonstrates a wide arrange of technologies, along with intricate data management and a robust user interface.</p>
                  <div className="d-flex justify-content-center">

                  <ProjectCard {...mvpProject} />
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
}
