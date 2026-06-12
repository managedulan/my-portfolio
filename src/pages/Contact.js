import React, { useState } from 'react';
import { IconMail, IconPhone, IconLocation } from '../components/Icons';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ type: '', message: '' });
    
    const { name, email, message } = formData;

    // Validation checks
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormStatus({
        type: 'error',
        message: 'Validation Error: Please fill in all fields before submitting.'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormStatus({
        type: 'error',
        message: 'Validation Error: Please enter a valid email address.'
      });
      return;
    }

    // Simulate network submission
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        type: 'success',
        message: 'Message Sent Successfully! Thank you, Dulan will get back to you shortly.'
      });
      setFormData({ name: '', email: '', message: '' }); // Clear fields on success
    }, 1200);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="animate-fade-in">
      <h2 id="contact-heading" className="section-title">Get In Touch</h2>
      <div className="contact-grid">
        <div className="contact-info-panel">
          <h3>Let's Connect!</h3>
          <p>
            I am open to internship and development opportunities where I can apply my IT knowledge and frontend skills. Let's build something awesome together!
          </p>
          
          <ul className="contact-details-list">
            <li className="contact-detail-item">
              <div className="contact-icon-wrapper">
                <IconMail />
              </div>
              <div>
                <div className="contact-detail-label">Email</div>
                <a href="mailto:gehandulan2001@gmail.com" className="contact-detail-text" style={{ color: 'inherit', textDecoration: 'none' }}>
                  gehandulan2001@gmail.com
                </a>
              </div>
            </li>
            <li className="contact-detail-item">
              <div className="contact-icon-wrapper">
                <IconPhone />
              </div>
              <div>
                <div className="contact-detail-label">Phone</div>
                <a href="tel:0722811725" className="contact-detail-text" style={{ color: 'inherit', textDecoration: 'none' }}>
                  0722811725
                </a>
              </div>
            </li>
            <li className="contact-detail-item">
              <div className="contact-icon-wrapper">
                <IconLocation />
              </div>
              <div>
                <div className="contact-detail-label">GitHub</div>
                <a href="https://github.com/managedulan" target="_blank" rel="noopener noreferrer" className="contact-detail-text" style={{ color: 'inherit', textDecoration: 'none' }}>
                  github.com/managedulan
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="glass-card contact-form">
          {formStatus.message && (
            <div 
              className={`alert-box ${formStatus.type === 'success' ? 'alert-success' : 'alert-error'}`}
              role="alert"
              aria-live="polite"
            >
              {formStatus.type === 'success' ? '✓' : '⚠'} {formStatus.message}
            </div>
          )}
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="form-name" className="form-label">Name</label>
              <input
                type="text"
                id="form-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Jane Doe"
                disabled={isSubmitting}
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <label htmlFor="form-email" className="form-label">Email Address</label>
              <input
                type="email"
                id="form-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="jane@example.com"
                disabled={isSubmitting}
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <label htmlFor="form-message" className="form-label">Message</label>
              <textarea
                id="form-message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                className="form-input"
                style={{ resize: 'vertical' }}
                placeholder="Tell me about your team and the project you're working on..."
                disabled={isSubmitting}
                aria-required="true"
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%' }}
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
