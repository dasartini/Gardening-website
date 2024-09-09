import { useState } from 'react';
import FormStyle from '../styles/FormStyle';
import gardening3 from '../src/assets/gardening3.jpg'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await fetch('https://email-form-backend.onrender.com/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
 <FormStyle>
  <div class="form-container">
   
  <div class="form-left">
  <h1>Send us a enquiry</h1>
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div class="form-group">
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" class="submit-btn">Send</button>
    </form>
  </div>
  <div class="form-right">
    <img src={gardening3} alt="Contact Us Image" />
  </div>
</div>

    </FormStyle>
  );
};

export default ContactForm;