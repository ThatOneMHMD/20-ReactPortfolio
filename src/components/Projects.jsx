// import required data
import React from 'react';
import '../index.css';

// FUTURE DEVELOPMENT: MAKE SURE PICUTRES LOAD BEFORE RENDERING PAGE ETC.
// FUTURE DEVELOPMENT: I WILL NOT BE changing the name (Projects) to PORTFOLIO since it sounds better the way it is right now!

const Projects = () => {
  
  // array of objects containing my projects
  // NOTE FOR FUTURE SELF: images can be gotten by adding them to an 'issue' on github, then copying the link to the image and pasting it here!
  const projectData = [
    {
      title: 'Insulin & Dopamine',
      description: 'Unlock the secrets of insulin and dopamine with our comprehensive review research article!',
      imageUrl: 'https://github.com/ThatOneMHMD/research-insulin-dopamine/assets/126360257/e892c390-e655-4ece-948c-4ad2b6414ab8',
      link: 'https://thatonemhmd.github.io/research-insulin-dopamine/',
      source: 'https://github.com/ThatOneMHMD/research-insulin-dopamine.git'
    },
    {
      title: 'Recipe Finder',
      description: 'For when your appetite is bigger than your imagination!',
      imageUrl: 'https://github.com/ThatOneMHMD/20-ReactPortfolio/assets/126360257/1fcd40e0-b8ee-42a8-861c-d6900e8abd67',
      link: 'https://thatonemhmd.github.io/recipe-finder/',
      source: 'https://github.com/ThatOneMHMD/recipe-finder.git'
    },
    {
      title: 'Event Hive',
      description: 'Your one-stop shop for all your event planning needs!',
      imageUrl: 'https://user-images.githubusercontent.com/126360257/261478049-ec38221a-dcff-4a47-a0ea-9e643bd46ce3.png',
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
