// import required data
import React from 'react'
import '../index.css';

// component:
const About = () => {
  return (

    // parent div
    <div className="about-container">
      <div className="about-card">
        <h1>I am what you are looking for!</h1>
        <img
          className="profile-picture"
          src="https://thatonemhmd.github.io/02-MyProtfolio-MuhammadAtrach-/assets/images/Muhammad%20in%20UofT%20hoodie%20cropped.jpg"
          alt="Profile Picture"
        />
        <div className="about-content">
          <p>
            I am a passionate and highly skilled full-stack software engineer
            with a strong expertise in web development. My dedication to
            creating efficient, scalable, and innovative solutions has led me
            to excel in my field and deliver top-notch projects to clients.
          </p>
          <p>
            <strong>What Sets Me Apart</strong>
          </p>
          <ul>
            <li>🚀 Unstoppable Drive: I thrive on challenges and embrace the opportunity to solve complex problems.</li>
            <li>💡 Innovative Mindset: I'm constantly exploring new technologies and best practices to stay at the forefront of the ever-evolving tech landscape.</li>
            <li>🎯 Precision and Detail: My attention to detail is unmatched. I meticulously design, code, and test every aspect of my projects.</li>
            <li>🤝 Collaborative Spirit: As a team player, I excel in fostering open communication and working collaboratively with cross-functional teams.</li>
            <li>🌟 Passion for Learning: Learning is at the core of my journey. I'm continuously seeking opportunities to expand my knowledge and expertise.</li>
          </ul>
        
        </div>
      </div>
    </div>
    
  )
}

// export component
export default About