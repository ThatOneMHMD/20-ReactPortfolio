// import required data
import React from 'react';
import '../index.css';

// FUTURE DEVELOPMENT: MAKE SURE PICUTRES LOAD BEFORE RENDERING PAGE ETC.
// FUTURE DEVELOPMENT: I WILL NOT BE changing the name (Projects) to PORTFOLIO since it sounds better the way it is right now!

const Projects = () => {
  
  // array of objects containing my projects
  const projectData = [
    {
      title: 'Event Hive',
      description: 'Your one-stop shop for all your event planning needs!',
      imageUrl: '../assets/images/eventHive.png',
      link: 'https://eventhive-d385699de8e6.herokuapp.com/',
      source: 'https://github.com/cynthiamory/EventHive'
    },
    {
      title: 'FitZone',
      description: 'A portal for those who want to become the best version of themselves!',
      imageUrl: 'https://thatonemhmd.github.io/02-MyProtfolio-MuhammadAtrach-/assets/images/fitZone%20landing%20page.png',
      link: 'https://rohitwho.github.io/Fit-Zone/',
      source: 'https://github.com/rohitwho/Fit-Zone.git'
    },
    {
      title: 'Weather Forcast',
      description: 'An effiecient and easy-to-use weather forcast app; for when you need it the most!',
      imageUrl: 'https://user-images.githubusercontent.com/126360257/236041982-4c2da339-9b20-4981-a79e-61c3a361c3ae.png',
      link: 'https://thatonemhmd.github.io/06-WeatherForcastApp/',
      source: 'https://github.com/ThatOneMHMD/06-WeatherForcastApp.git'
    },
    {
      title: 'Coding Quiz',
      description: 'Test your programming knowledge; strive to become the best software engineer!',
      imageUrl: 'https://user-images.githubusercontent.com/126360257/230804155-f5e772af-9d31-44e8-bd1a-565d4eea0305.png',
      link: 'https://thatonemhmd.github.io/04--CodingQuiz/',
      source: 'https://github.com/ThatOneMHMD/04--CodingQuiz.git'
    },
    {
      title: 'Work Day Scheduler',
      description: 'Manage your work day efficiently and in the most professional way!',
      imageUrl: 'https://user-images.githubusercontent.com/126360257/231563339-eab56be1-0605-4dab-bb07-f91e0ba53f78.png',
      link: 'https://thatonemhmd.github.io/05-WorkDayScheduler/',
      source: 'https://github.com/ThatOneMHMD/05-WorkDayScheduler.git'
    },
    {
      title: 'Password Generator',
      description: 'Generate secure, safe, and impossible to hack passwords for your peace of mind!',
      imageUrl: 'https://user-images.githubusercontent.com/126360257/226629203-c195fa4a-f188-452b-9f21-3de7ad46d479.png',
      link: 'https://thatonemhmd.github.io/03-PasswordGenerator/',
      source: 'https://github.com/ThatOneMHMD/03-PasswordGenerator.git'
    },
    {
      title: 'Horiseon Marketing',
      description: 'A website for when you are REALLY ready to optimize your product!',
      imageUrl: 'https://thatonemhmd.github.io/02-MyProtfolio-MuhammadAtrach-/assets/images/horiseon.png',
      link: 'https://thatonemhmd.github.io/01-Horiseon-Marketing/',
      source: 'https://github.com/ThatOneMHMD/01-Horiseon-Marketing.git'
    },

    // Add more project objects later on (future improvements!!)
  ];

  return (
    <div className="projects-grid">
      {/* future development: make it so that only pic appears, once u click on it it becomes blurry then src for app and repo appear, etc. */}
      {/* map out the project to appear in this format! */}
      {projectData.map((project, index) => (
        <div className="project-item" key={index}>

          <div>
          <a href={project.link}> <img src={project.imageUrl} alt={project.title} /> </a>
          </div>
          
          <div>

          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <div className='spaceBetween'>
            <a className="linkStyle" href={project.link}>View Project</a>
            <a className="linkStyle" href={project.source}>View Source Code</a>
          </div>
          

          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
