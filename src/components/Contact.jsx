import React, { useState} from 'react';
import emailjs from 'emailjs-com';
import '../index.css';

const Contact = () => {

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

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
  const [loading, setLoading] = useState(false);


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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set loading to true when the form is being submitted
    setLoading(true);

    emailjs
      .sendForm(
        serviceId,
        templateId, 
        e.target, 
        publicKey)  
      .then(
        (result) => {
          console.log(result.text);
          setSubmissionStatus('Message successfully submitted!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.log(error.text);
          setSubmissionStatus('Message submission failed.');
        }
      )
      .finally(() => {
        // Reset loading state whether it's successful or failed
        setLoading(false);
      });

      setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Contact Me</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name" className="contact-label">
              Name:
            </label>
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
            {requiredFields.name && (
              <p className="required-field-notification">Name is required</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="contact-label">
              Email:
            </label>
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
            {requiredFields.email && (
              <p className="required-field-notification">Email is required</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="contact-label">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="contact-textarea"
            />
            {requiredFields.message && (
              <p className="required-field-notification">Message is required</p>
            )}
          </div>
          <button type="submit" className={loading ? 'contact-loading' : 'contact-submit'} disabled={loading}>
            {loading ? 'Sending Message...' : 'Submit'}
          </button>

        </form>
        {submissionStatus && (
          <p className="submission-success">{submissionStatus}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;