import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ayo from '../assets/ayo.jpg';



export default function Home() {
  return (




  
  

  <>
  

<section id="hero">
  <div className="container">
    <div className="row align-items-center g-5">
      <div className="col-lg-7 order-2 order-lg-1">
        <div className="badge-hero"><i className="bi bi-yin-yang" style={{ color: "orange" }} ></i> Available for freelance work</div>
        <h1>Hi, I'm <span>Ayotah Endali</span><br/>Full Stack Developer</h1>
        <p className="my-4">I build beautiful, fast, and user-friendly web applications.<br/>Passionate about clean code and great user experiences.</p>
        <div className="d-flex flex-wrap gap-3">
          <Link to="/projects" className="btn btn-gold">View My Work</Link>
       <Link to="/contact" className="btn btn-outline-light">Contact Me</Link>
       

        </div>

       <div className="social-icons mt-4 d-flex gap-4">
  <a href="https://github.com/Ayotah" target="_blank" rel="noopener noreferrer">
  <i className="bi bi-github" style={{ fontSize: '2rem', color: '#b9b3b3' }}></i>
</a>

<a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
  <i className="bi bi-facebook" style={{ fontSize: '2rem', color: '#1877F2' }}></i>
</a>
</div>
      </div>
      <div className="col-lg-5 order-1 order-lg-2 text-center">
        <div className="hero-avatar">
       <img
  src={ayo}
  alt="Ayotah Endali"
  className="img-fluid"
  style={{
    borderRadius: '50%',
    height: '300px',
    width: '300px',
    objectFit: 'cover',
  
  }}
/>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="stats-section">
  <div className="container">
    <div className="row g-4 text-center">
      <div className="col-6 col-md-3">
        <div className="stat-box"><h2>5+</h2><p>Years Experience</p></div>
      </div>
      <div className="col-6 col-md-3">
        <div className="stat-box"><h2>48</h2><p>Projects Done</p></div>
      </div>
      <div className="col-6 col-md-3">
        <div className="stat-box"><h2>30</h2><p>Happy Clients</p></div>
      </div>
      <div className="col-6 col-md-3">
        <div className="stat-box"><h2>12</h2><p>Awards Won</p></div>
      </div>
    </div>
  </div>
</section>
{/* <div>
   <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faLinkedin} />
</div> */}
</>

  );
}
