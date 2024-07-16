import profileIMG from '../assets/img/HeadShot.jpg'; // Update the path to your profile image
import { Linkedin, Github } from 'react-bootstrap-icons';

export const BusinessCardComponent = () => {
  return (
    <section className="py-5">
      <br/>
      <br/>
      <br/>
      <div className="py-6 text-center">
        <div className="business-card mx-auto">
          <div className="row no-gutters w-100">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <img src={profileIMG} className=" rounded-circle" alt="Profile" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            </div>
            <div className="col-md-8 text-white d-flex flex-column justify-content-center align-items-start">
              <div className="card-body">
                <h5 className="card-title">Ryan Hood</h5>
                <p className="card-text text-purple">Web Developer</p>
                <p className="card-text"><a href="mailto:ryanhood4@yahoo.com" className="text-white">ryanhood4@yahoo.com</a></p>
                <p className="card-text"><a href="tel:615-881-4675" className="text-white">615-881-4675</a></p>
                <a href="https://www.linkedin.com/in/ryan-hood-11aa2b239/" target="_blank" rel="noopener noreferrer" className="text-primary">
                  <Linkedin size={25} className='me-2'/>
                </a>
                <a href="https://github.com/ryanhood10" target="_blank" rel="noopener noreferrer" className="text-primary">
                  <Github size={25} className='ms-2'  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
