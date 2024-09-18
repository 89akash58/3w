import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  Nav,
} from "react-bootstrap";
import TaskNavbar from "./TaskNavbar";
import { FaPlus, FaPhone, FaEnvelope } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";
import ShareReferral from "./ShareReferral";

const TaskPage = () => {
  return (
    <div>
      <TaskNavbar />
      <Container className="text-center">
        <Row className="mb-5">
          <Col xs={4} xl={4}>
            <Card>
              <Card.Body>
                <Card.Title>Wallet</Card.Title>
                <Card.Text>₹2875.00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <Card.Body>
                <Card.Title>Earnings</Card.Title>
                <Card.Text>₹2875.00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <Card.Body>
                <Card.Title>Referrals</Card.Title>
                <Card.Text>2417</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="mb-4">
          <Card.Body className="d-flex justify-content-between">
            <div>
              <h2>Weekly Leaderboard</h2>
              <p>You can earn ₹150</p>
            </div>
            <Button variant="success" style={{ width: "120px" }}>
              Join
            </Button>
          </Card.Body>
        </Card>

        <Carousel className="mb-4">
          <Carousel.Item>
            <Card>
              <Card.Body>
                <h4>Tip #1</h4>
                <p>
                  Engage with more social media tasks to boost your earnings.
                </p>
              </Card.Body>
            </Card>
          </Carousel.Item>

          <Carousel.Item>
            <Card>
              <Card.Body>
                <h4>Tip #2</h4>
                <p>Refer more friends to earn bonus points and rewards.</p>
              </Card.Body>
            </Card>
          </Carousel.Item>

          <Carousel.Item>
            <Card>
              <Card.Body>
                <h4>Motivation</h4>
                <p>
                  Stay consistent to top the leaderboard and win the weekly
                  prize!
                </p>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>

        <Row className="text-center" style={{ marginBottom: "50px" }}>
          <h1 style={{ textAlign: "left" }}>Social Media Tasks</h1>
          <Col xs={6} md={4} className="mb-3">
            <Button
              variant="outline-primary"
              className="w-100 py-3 position-relative"
            >
              <FaInstagram
                style={{ color: "red", fontSize: "24px", margin: "10px" }}
              />{" "}
              Instagram{" "}
              <span
                style={{
                  position: "absolute",
                  right: "-10px",
                  top: "-10px",
                  background: "green",
                  color: "white",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                +300
              </span>
            </Button>
          </Col>
          <Col xs={6} md={4} className="mb-3">
            <Button
              variant="outline-primary"
              className="w-100 py-3 position-relative"
            >
              <FaFacebook
                style={{ color: "blue", fontSize: "24px", margin: "10px" }}
              />{" "}
              Facebook{" "}
              <span
                style={{
                  position: "absolute",
                  right: "-10px",
                  top: "-10px",
                  background: "green",
                  color: "white",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                +225
              </span>
            </Button>
          </Col>
          <Col xs={6} md={4} className="mb-3">
            <Button
              variant="outline-primary"
              className="w-100 py-3 position-relative"
            >
              <FaTwitter
                style={{ color: "blue", fontSize: "24px", margin: "10px" }}
              />{" "}
              X{" "}
              <span
                style={{
                  position: "absolute",
                  right: "-10px",
                  top: "-10px",
                  background: "green",
                  color: "white",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                +85
              </span>
            </Button>
          </Col>
          <Col xs={6} md={4} className="mb-3">
            <Button
              variant="outline-primary"
              className="w-100 py-3 position-relative"
            >
              <FaYoutube
                style={{ color: "red", fontSize: "24px", margin: "10px" }}
              />{" "}
              YouTube{" "}
              <span
                style={{
                  position: "absolute",
                  right: "-10px",
                  top: "-10px",
                  background: "green",
                  color: "white",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                +130
              </span>
            </Button>
          </Col>
          <Col xs={6} md={4} className="mb-3">
            <Button
              variant="outline-primary"
              className="w-100 py-3 position-relative"
            >
              <FaTelegram
                style={{ color: "blue", fontSize: "24px", margin: "10px" }}
              />{" "}
              Telegram{" "}
              <span
                style={{
                  position: "absolute",
                  right: "-10px",
                  top: "-10px",
                  background: "green",
                  color: "white",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                +60
              </span>
            </Button>
          </Col>
          <Col xs={6} md={4} className="mb-3">
            <Button
              variant="outline-primary"
              className="w-100 py-3 position-relative"
            >
              <FaLinkedin
                style={{ color: "blue", fontSize: "24px", margin: "10px" }}
              />{" "}
              LinkedIn{" "}
              <span
                style={{
                  position: "absolute",
                  right: "-10px",
                  top: "-10px",
                  background: "green",
                  color: "white",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                +30
              </span>
            </Button>
          </Col>
        </Row>
      </Container>
      <ShareReferral />

      <Button
        variant="primary"
        size="lg"
        className="position-fixed bottom-0 end-0 m-5 rounded-circle"
        style={{
          width: "60px",
          height: "60px",
          zIndex: 1030,
          marginBottom: "90px",
        }}
      >
        <FaPlus />
      </Button>

      <footer
        className="text-white py-4"
        style={{ backgroundColor: "black", marginTop: "auto" }}
      >
        <Container>
          <Row>
            <Col md={4}>
              <h5>Contact Us</h5>
              <p>
                <FaPhone /> +91 12345 67890 <br />
                <FaEnvelope /> contact@taskapp.com
              </p>
            </Col>
            <Col md={4}>
              <h5>Follow Us</h5>
              <div className="d-flex">
                <FaInstagram className="me-3" />
                <FaFacebook className="me-3" />
                <FaTwitter className="me-3" />
                <FaYoutube className="me-3" />
                <FaTelegram className="me-3" />
                <FaLinkedin className="me-3" />
              </div>
            </Col>
            <Col md={4}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default TaskPage;
