// import required data and libraries/features
import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Interests from "./components/Interests";

// Import the background image and video
import bgImg from "./assets/images/maxresdefault (1).jpg";
import bgVid from "./assets/videos/4k background footage (ideal for Blockchain Website).mp4";

function App() {

  // Add a loading state and set it to true by default (comes into play shortly after)
  const [loading, setLoading] = useState(true);

  // This makes sure the default active tab is the "about" section
  const [activeTab, setActiveTab] = useState("about");

  // this useEffect is used to set loading to false after the component has rendered
  useEffect(() => {
    setLoading(false);
  }, []);

  // Create a reference object to hold the video element in the DOM
  const videoRef = useRef(null);
  // State variable to track whether the video has been loaded or not,
  // initialized as false by default
  const [videoLoaded, setVideoLoaded] = useState(false);

  // We use an empty dependency array so that the effect will only run once after the initial render.
  useEffect(() => {
    // Get a reference to the video element
    const videoElement = videoRef.current;

    // Function to handle video loaded event
    const handleVideoLoaded = () => {
      // Set videoLoaded state to true when the video is loaded
      setVideoLoaded(true);
    };

    if (videoElement) {
      // Add an event listener to the video element to listen for "loadeddata" event
      videoElement.addEventListener("loadeddata", handleVideoLoaded);

      // Clean up the event listener when the component is unmounted
      return () => {
        videoElement.removeEventListener("loadeddata", handleVideoLoaded);
      };
    }
  }, []);

  return (
    <Router>
      <div className="App">
        {/* pass in activeTab state */}
        <NavBar setActiveTab={setActiveTab} activeTab={activeTab} />

        <Routes>
          {/* to set About tab as the default path: on `/` default path, or `/about`, or `/*` wild card!!! */}
          <Route path="*" element={<About />} />
          <Route path="/" element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />




          {/* <Route path="interests" element={<Interests />} /> */}


        </Routes>

        <div className="video-container">
          {/* Video element */}
          <video
            ref={videoRef} // Set the ref to videoRef
            autoPlay
            loop
            muted
            preload="auto"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              visibility: videoLoaded ? "visible" : "hidden", // Show video when loaded, hide when not loaded
            }}
          >
            <source src={bgVid} type="video/mp4" />
          </video>

          {/* Background image */}
          <img
            src={bgImg}
            alt="Background image to compensate for the loading time of the video"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              visibility: videoLoaded ? "hidden" : "visible", // Hide image when video is loaded, show when not loaded
            }}
          />
        </div>

        {/* curly wave element for styling (CSS) purposes only. Not implemented for now, but kept for the future! */}
        {/* <div class="wave-container"></div> */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;

// checkPoint
