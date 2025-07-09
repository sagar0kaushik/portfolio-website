import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import profileImg from './assets/profile.png';
import instagramLogo from './assets/instagram.png';
import linkedinLogo from './assets/linkedin.png';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);
    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="home-container">
      <img src={profileImg} alt="Sagar Kaushik" className="profile-img" />

      <div
        className={`text-section ${isVisible ? 'fade-in' : ''}`}
        ref={textRef}
      >
        <h1 className="header-name">
          <span className="first-name">Sagar</span><br />
          <span className="last-name">Kaushik</span>
        </h1>
        <h2 className="job-title">Website Developer</h2>
        <p className="experience-text">
          2 Years of experience in Website Development.
        </p>
        <button className="contact-button" onClick={handleContactClick}>
          Contact Me
        </button>
      </div>

      <div className="social-icons">
        <a
          href="https://www.instagram.com/justsagarthings_/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramLogo} alt="Instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/sagar-kaushik-21a833298/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default Home;
