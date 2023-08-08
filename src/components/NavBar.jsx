import React from 'react'
import '../index.css';
import { Link, useLocation } from "react-router-dom";

// component is using destrucutred props from APP.js:
// - activeTab: Currently active tab name.
// - setActiveTab: Function to set the active tab.
const NavBar = ({ activeTab, setActiveTab }) => {

  // Get the current location using the useLocation hook
  const location = useLocation();

  // Function to check if a given link is active based on the current location
  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  // Function to check if the current location matches the default path
  const isDefaultPath = () => {
    return location.pathname === '/' || location.pathname === '/20-ReactPortfolio/' || location.pathname === '/20-ReactPortfolio' || location.pathname === '';
  }; 

  return (
    <div className='nav'>
      
      <h1 className='headerTextWithShadow'>

        {/* Logo placholder: Apply the logo in the future and make it a link that connectes back to the default tab (img itself is ugly now so needs cropping...) */}
        {/* <img src="https://thatonemhmd.github.io/02-MyProtfolio-MuhammadAtrach-/assets/images/Muhammad%20full%20stack%20dev%20logo%202.png" alt="logo for Muhammad" /> */}

        Muhammad Atrach
        
      </h1>

      {/* Navigation links: set correct path corersponding to clicked link and make it the active tab then apply the active CSS class! */}
      <ul className="navLinks">
      <li>
          <Link to="/about" className={isLinkActive('/about') || isDefaultPath() ? "active" : ""}>About Me</Link>
        </li>
        <li>
          <Link to="/contact" className={isLinkActive('/contact') ? "active" : ""}>Contact</Link>
        </li>

        {/* This is kept as Projects by choice! If I "needed" to switch it to Portfolio for any reason, I would have simply changed it by typing in that... */}
        <li>
          <Link to="/projects" className={isLinkActive('/projects') ? "active" : ""}>Projects</Link>
        </li>
        <li>
          <Link to="/resume" className={isLinkActive('/resume') ? "active" : ""}>Resume</Link>
        </li>
      </ul>

      
      {/* Shape of a wave that is NOT used for now. Will later be used */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L14.1,213.3C28.2,171,56,85,85,80C112.9,75,141,149,169,165.3C197.6,181,226,139,254,101.3C282.4,64,311,32,339,21.3C367.1,11,395,21,424,58.7C451.8,96,480,160,508,202.7C536.5,245,565,267,593,229.3C621.2,192,649,96,678,69.3C705.9,43,734,85,762,128C790.6,171,819,213,847,229.3C875.3,245,904,235,932,224C960,213,988,203,1016,181.3C1044.7,160,1073,128,1101,138.7C1129.4,149,1158,203,1186,229.3C1214.1,256,1242,256,1271,224C1298.8,192,1327,128,1355,117.3C1383.5,107,1412,149,1426,170.7L1440,192L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"></path></svg> */}
        
    </div>
    
  )
}

export default NavBar

// checkpoint!!!