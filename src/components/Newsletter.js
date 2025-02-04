import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import "./Newsletter.css"; // Import the CSS for styling

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("Please enter a valid email.");
      return;
    }
    alert("Subscribed successfully!");
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row className="align-items-center">
          <Col lg={6} md={12} className="text-center text-lg-start">
            <h3>Subscribe to our Newsletter</h3>
            <p>Never miss the latest updates. Stay connected with us.</p>
            {status === 'sending' && <Alert variant="info">Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col lg={6} md={12}>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
