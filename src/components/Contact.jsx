import React, { useState, useEffect } from 'react';
import '../index.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [requiredFields, setRequiredFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [formMessage, setFormMessage] = useState([]);

  // useEffect for handling formMessage changes: FOR FUTURE IMPROVEMENTS (can use this to save messages or connect them to an API that sendds an actual email to a designated one, etc.)
  useEffect(() => {
    // This will stay as a console.log for now only
    console.log('Form Message Updated:', formMessage);
  }, [formMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
  
      // Clear the success message after one second
      setTimeout(() => {
        
        setSubmissionStatus(null);
      }, 500);
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
