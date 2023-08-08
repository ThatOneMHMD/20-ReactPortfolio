// import needed data (and social media icons)
import React from 'react'
import '../index.css';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
  return (
    
    // each icon is linked to a corresponding profile! (target blank indicates opening the link on a new tab/page)
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