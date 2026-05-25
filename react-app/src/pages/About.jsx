import { NavLink } from 'react-router-dom';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ayo from '../assets/ayo.jpg';

export default function About() {
  return (
   <>
  
<section id="about">
  <div className="container">
    <div className="row g-5 align-items-center">
      <div className="col-lg-5 text-center">
        <div style={{ background: '#f3f4f6', borderRadius: '16px', height: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8rem' }}>
         <img
  src={ayo}
  alt="Ayo"
  style={{ borderRadius: '16px', height: '380px', width: '100%', objectFit: 'cover' }}
/>
        </div>
      </div>
      <div className="col-lg-7">
        <p className="text-warning fw-semibold" style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>About Me</p>
        <h2 className="section-title">Who Am <span>I?</span></h2>
        <div className="underline-gold"></div>
        <p className="text-muted mb-4">I'm a passionate Full Stack Developer with over 5 years of experience building modern web applications. I love turning complex problems into simple, beautiful solutions. When I'm not coding, I'm exploring new technologies and contributing to open source.</p>
        <div className="row g-3 mb-4">
          <div className="col-sm-6">
            <div className="skill-bar-label">HTML / CSS</div>
            <div className="progress"><div className="progress-bar" style={{ width: '95%' }}></div></div>
            <div className="skill-bar-label">JavaScript</div>
            <div className="progress"><div className="progress-bar" style={{ width: '90%' }}></div></div>
            <div className="skill-bar-label">React</div>
            <div className="progress"><div className="progress-bar" style={{ width: '75%' }}></div></div>
          </div>
          <div className="col-sm-6">
            <div className="skill-bar-label">Node.js</div>
            <div className="progress"><div className="progress-bar" style={{ width: '80%' }}></div></div>
            <div className="skill-bar-label">PHP</div>
            <div className="progress"><div className="progress-bar" style={{ width: '75%' }}></div></div>
            <div className="skill-bar-label">UI/UX Design</div>
            <div className="progress"><div className="progress-bar" style={{ width: '70%' }}></div></div>
          </div>
        </div>
        <a href='https://drive.google.com/file/d/1Q1R5kk6U8BsV75g_9SNCS7TdiZKwsuov/view?usp=sharing'>  <NavLink to="https://drive.google.com/file/d/1Q1R5kk6U8BsV75g_9SNCS7TdiZKwsuov/view?usp=sharing" className="btn btn-gold">Download CV <i className="bi bi-download ms-1"></i></NavLink></a>
       
      </div>
    </div>
  </div>
</section>
 

<section id="services">
  <div className="container">
    <div className="text-center mb-5">
      <p className="text-warning fw-semibold" style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>What I Do</p>
      <h2 className="section-title">My <span>Services</span></h2>
      <div className="underline-gold mx-auto"></div>
    </div>
    <div className="row g-4">
      <div className="col-md-6 col-lg-4">
        <div className="service-card">
          <div className="service-icon"><i className="bi bi-code-slash"></i></div>
          <h5>Web Development</h5>
          <p>Building responsive, fast, and scalable web applications using modern frameworks and best practices.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="service-card">
          <div className="service-icon"><i className="bi bi-palette"></i></div>
          <h5>UI/UX Design</h5>
          <p>Crafting beautiful, intuitive interfaces with a focus on user experience and accessibility.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="service-card">
          <div className="service-icon"><i className="bi bi-phone"></i></div>
          <h5>Mobile-First Design</h5>
          <p>Designing apps that work flawlessly on all screen sizes and devices.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="service-card">
          <div className="service-icon"><i className="bi bi-cloud-upload"></i></div>
          <h5>API Development</h5>
          <p>Building robust RESTful APIs and backend services with Node.js and Python.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="service-card">
          <div className="service-icon"><i className="bi bi-bar-chart-line"></i></div>
          <h5>SEO Optimization</h5>
          <p>Improving site visibility through technical SEO and performance tuning.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="service-card">
          <div className="service-icon"><i className="bi bi-shield-check"></i></div>
          <h5>Web Security</h5>
          <p>Implementing security best practices to protect your app from vulnerabilities.</p>
        </div>
      </div>
    </div>
  </div>
</section>
 
   
   </>
  );
}
