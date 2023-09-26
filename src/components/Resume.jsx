import React from 'react'
import '../index.css';

const Resume = () => {
    
  // create a path to my resume stored in a pdfs folder inside the public folder
  const pdfFileName = 'Resume - 2023 Sep (Coding).pdf';
  const pdfPath = process.env.PUBLIC_URL + '/pdfs/' + pdfFileName;

  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-content">

          <p>
            Click the link below to download the PDF file:
            <br />
            {/* link to download resume */}
            <a href={pdfPath} download>
            Download Resume
            </a>
          </p>

          
          <ul>
            <li>Full-stack web development</li>
            <li>React, Node.js, Express.js</li>
            <li>Database management (SQL, NoSQL)</li>
            <li>RESTful API design</li>
          </ul>
          
          <p>
            <strong>My Expertise</strong>
          </p>

          <ul>
            <li>Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Vue.js, Redux, Sass, Bootstrap</li>
            <li>Backend: Node.js, Express.js, Python, Django, Ruby on Rails</li>
            <li>Databases: MongoDB, MySQL, PostgreSQL</li>
            <li>Tools: Git, Webpack, Babel, Jest, Mocha, Chai</li>
            <li>Deployment: Docker, AWS, Heroku, Netlify</li>
            <li>Languages: JavaScript, Python, Ruby</li>
            <li>And more...</li>
          </ul>
        
        </div>
      </div>
    </div>
  )
};

export default Resume