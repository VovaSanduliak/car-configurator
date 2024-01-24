import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-page">
      <div className="form-panel">
        <h3>Get in touch</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            className="input-name"
            type="text"
            name="Name"
            id="name"
            placeholder="Name"
            value={formData.firstName}
            onChange={handleChange}
          />

          <input
            className="input-subject"
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            className="input-message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />

          <div className="button-send">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <div style={{ display: "flex", width: "50%", margin: "0 auto" }}>
        <h3 style={{ textAlign: "center" }}>Contact us</h3>
      </div>
    </div>
  );
};

export default Contact;
