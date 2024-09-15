import { useState, useRef } from 'react';
import FormStyle from '../styles/FormStyle';
import gardening3 from '../src/assets/gardening3.jpg';

const ContactForm = () => {
  const [sending, setSending] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    sender: '',
    phoneNumber: '',
  });
  const [attachment, setAttachment] = useState(null);
  const fileInputRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    setAttachment(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true)
console.log('sending')
    const data = new FormData();
    data.append('email', formData.email);
    data.append('message', formData.message);
    data.append('sender', formData.sender);
    data.append('phoneNumber', formData.phoneNumber);
    if (attachment) {
      data.append('attachment', attachment);
    }
  
    fetch('https://email-form-backend.onrender.com/api/send-email', {
      method: 'POST',
      body: data,
    })
      .then(response => {
        if (response.ok) {
          alert('Email sent successfully!');
        } else {
          alert('Failed to send email.');
        }
      })
      .then(()=>{
          setSending(false)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  
  return (
    <FormStyle>
      <div className="form-container">
        <div className="form-left">
          <h1>Send us an enquiry</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name:</label>
              <input
                name="sender"
                value={formData.sender}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone number:</label>
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group attachment-group">
              <label>Attachment:</label>
              <input
                type="file"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              {attachment && (
                <button onClick={handleClick} className="cancel-btn">
                  Remove Attachment
                </button>
              )}
            </div>
            <div className='sendContainer'>
            <button type="submit" className="submit-btn">{sending? <div className="loaderMail"></div>:<>Send</>}</button>
            
            </div>
          </form>
        </div>
        <div className="form-right">
          <img src={gardening3} alt="Contact Us Image"/>
        </div>
      </div>
    </FormStyle>
  );
};

export default ContactForm;

