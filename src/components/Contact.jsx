import React, { useState, useEffect } from 'react';
import '../index.css';

const Contact = () => {

  // State to manage form data (name, email, and message)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to track whether required fields are filled or not
  const [requiredFields, setRequiredFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  // State to manage submission status message
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // State to store form messages for future improvements
  const [formMessage, setFormMessage] = useState([]);

  // useEffect for handling formMessage changes: FOR FUTURE IMPROVEMENTS (can use this to save messages or connect them to an API that sendds an actual email to a designated one, etc.)
  useEffect(() => {
    // This will stay as a console.log for now only
    console.log('Form Message Updated:', formMessage);
  }, [formMessage]);

  // Function to handle form input changes (name, email, and message)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle blur event on form inputs to check required fields (when losing focus on inputs: clicking somehwere else)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setRequiredFields((prevFields) => ({
        ...prevFields,
        [name]: true,
      }));
    } else {
      setRequiredFields((prevFields) => ({
        ...prevFields,
        [name]: false,
      }));
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the formMessage state with the new formData
    setFormMessage((prevFormMessage) => [...prevFormMessage, formData]);

    // Handle form submission here; Later on, I can send the data to a server or API
    console.log('Current submitted form:', formData);
      
    // Simulating a successful submission with a setTimeout function (replace this with actual server/API call)
    setTimeout(() => {
      setSubmissionStatus('Message successfully submitted!');
      
      // Clear the form after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
  
      // Clear the success message one second
      setTimeout(() => {
        
        setSubmissionStatus(null);
      }, 1000);
    }, 300);
  };


  return (
    <div className="contact-container">
      <div className="contact-card">

        <h1 className="contact-title">Contact Me</h1>

        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name" className="contact-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="contact-input"
            />
            {requiredFields.name && <p className="required-field-notification">Name is required</p>}
          </div>
          <div>
            <label htmlFor="email" className="contact-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="contact-input"
            />
            {requiredFields.email && <p className="required-field-notification">Email is required</p>}
          </div>
          <div>
            <label htmlFor="message" className="contact-label">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="contact-textarea"
            />
            {requiredFields.message && <p className="required-field-notification">Message is required</p>}
          </div>
          <button type="submit" className="contact-submit">Submit</button>
        </form>

        {submissionStatus && (
          <p className="submission-success">{submissionStatus}</p>
        )}

      </div>
    </div>
  );
};

export default Contact;
