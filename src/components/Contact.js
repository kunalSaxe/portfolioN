import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "emailjs-com";
import { FaSpinner } from "react-icons/fa";
import "./contact.css"; // Import CSS for styling

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [loading, setLoading] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const validateForm = () => {
    if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.phone || !formDetails.message) {
      toast.error("All fields are required!");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formDetails.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const serviceID = "service_k8g430q";
    const templateID = "template_s9mkflj";
    const userID = "lCE1ayCmsxDGQlx9c";

    const templateParams = {
      name: `${formDetails.firstName} ${formDetails.lastName}`,
      email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message,
    };

    try {
      const response = await emailjs.send(serviceID, templateID, templateParams, userID);
      setLoading(false);
      setFormDetails(formInitialDetails);
      if (response.status === 200) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Something went wrong, please try again later.");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to send message, please try again.");
    }
  };

  return (
    <section className="contact-section" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="image-container">
            <TrackVisibility>
              {({ isVisible }) => (
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              )}
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`form-container ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <div style={{display:"flex",justifyContent:'center',marginTop:"10%"}}><h2>Get In Touch</h2></div>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6}>
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} />
                      </Col>
                      <Col sm={6}>
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                      </Col>
                      <Col sm={6}>
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate("email", e.target.value)} />
                      </Col>
                      <Col sm={6}>
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate("phone", e.target.value)} />
                      </Col>
                      <Col>
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)}></textarea>
                        <button type="submit" className="submit-btn" disabled={loading}>
                          {loading ? <FaSpinner className="spinner" /> : "Send"}
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <ToastContainer position="top-right" autoClose={3000} />
      </Container>
    </section>
  );
};
