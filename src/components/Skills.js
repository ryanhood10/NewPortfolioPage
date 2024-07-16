import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import Splash from '../assets/img/splash.png';
import Pill from '../assets/img/pill4.png';
import Recycle from '../assets/img/recycle.png';
import Flex from '../assets/img/flex.png';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>My Skills: Building Maintainable and Efficient Code</h2>
              <p>
                I leverage Object-Oriented Programming (OOP) principles to create well-structured, reusable, and adaptable code. Here are some key OOP concepts I use:
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={Pill} alt="Encapsulation" style={{ height: "48px", width: "48px" }} />
                  <h5>Encapsulation</h5>
                  <p>By keeping data and methods private within classes, I ensure data security and control.</p>
                </div>
                <div className="item">
                  <img src={Splash} alt="Abstraction" style={{ height: "48px", width: "48px" }} />
                  <h5>Abstraction</h5>
                  <p>I focus on user-facing functionalities, hiding complex implementation details for a cleaner interface.</p>
                </div>
                <div className="item">
                  <img src={Recycle} alt="Inheritance" style={{ height: "48px", width: "48px" }} />
                  <h5>Inheritance</h5>
                  <p>I reuse existing code by creating new classes that inherit properties and behavior from parent classes.</p>
                </div>
                <div className="item">
                  <img src={Flex} alt="Polymorphism" style={{ height: "48px", width: "48px" }} />
                  <h5>Polymorphism</h5>
                  <p>I write code that can adapt to different situations, making it more flexible and maintainable.</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}
