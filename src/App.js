import React, { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

// Video src: the second src will be later used as a theme change that will be conected to a button! (future improvements)
import bgVid from "./assets/videos/4k background footage (ideal for Blockchain Website).mp4";
// import bgVid from "./assets/videos/Wave of underwater for website background video - crackcodex.mp4";


function App() {
  const [activeTab, setActiveTab] = useState("about"); // Default active tab is "about"

  return (
    <Router>
      <div className="App">
        {/* pass in activeTab state */}
        <NavBar 
            setActiveTab={setActiveTab}
            activeTab={activeTab} 
        />

        <Routes>
          {/* to set About tab as the default path */}
          <Route path="/" element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
        </Routes>

        <div className="video-container">
          <video
            autoPlay
            loop
            muted
            preload="auto"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={bgVid} type="video/mp4" />
          </video>
        </div>
        
        {/* curly wave element for styling (CSS) purposes onlly. Not implemented for now, but kept for the future! */}
        {/* <div class="wave-container"></div> */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;

// Checkpoint!
