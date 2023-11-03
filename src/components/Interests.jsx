import React from 'react';
import '../index.css';

const Interests = () => {
  // List of your interests with associated images
  const interestsList = [
    {
      text: 'Coding and Web Development',
      image: 'web-development-icon.png', // Replace with the image path
    },
    {
      text: 'Reading Fantasy Novels',
      image: 'fantasy-book-icon.png', // Replace with the image path
    },
    {
      text: 'Exploring the World of Neuroscience',
      image: 'neuroscience-icon.png', // Replace with the image path
    },
    {
      text: 'Psychology Researcher',
      image: 'psychology-researcher-icon.png', // Replace with the image path
    },
    {
      text: 'Martial Arts Enthusiast',
      image: 'martial-arts-icon.png', // Replace with the image path
    },
    {
      text: 'Aspiring Doctor',
      image: 'doctor-icon.png', // Replace with the image path
    },
    {
      text: 'Creating Full-Stack Apps',
      image: 'full-stack-icon.png', // Replace with the image path
    },
    {
      text: 'Intrigued by AI and Machine Learning',
      image: 'ai-ml-icon.png', // Replace with the image path
    },
  ];

  return (
    <div className="about-container">
      <div className="about-card">
            <div className="about-content">
                
                <h2 className="section-title">Interests</h2>

                <div className="interests-list">
                    {interestsList.map((interest, index) => (
                    <div key={index} className="interest-item">
                        <div className="interest-image">
                        <img src={interest.image} alt={interest.text} />
                        </div>
                        <p className="interest-text">{interest.text}</p>
                    </div>
                    ))}
                </div>
            </div>
      </div>
    </div>
  );
};

export default Interests;
