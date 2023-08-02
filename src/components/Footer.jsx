import React from 'react'
import '../index.css';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
    // javascript here
  return (
    
    <footer className="portfolio-footer">
      <div className="social-icons">
        <a href="https://github.com/thatOneMHMD" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-atrach-021ab8274" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://stackoverflow.com/users/22273617/thatonemhmd" target="_blank">
          <FaStackOverflow />
        </a>
      </div>
    </footer>
    
  )
}

export default Footer