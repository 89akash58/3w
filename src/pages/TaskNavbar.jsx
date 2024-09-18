import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Offcanvas,
  Button,
  Image,
  Container,
  ListGroup,
  Collapse,
} from "react-bootstrap";
import {
  FaUser,
  FaWhatsapp,
  FaPhoneAlt,
  FaCogs,
  FaTasks,
  FaHistory,
  FaTrophy,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TaskNavbar.css";

const TaskNavbar = () => {
  const [show, setShow] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="data:image/png;base64,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"
              width="40"
              roundedCircle
            ></Image>
            Taskplanet
          </Navbar.Brand>
          <Nav className="mx-auto nav-container">
            <Nav.Link href="#home" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link href="#tasks" className="nav-link-custom">
              Tasks
            </Nav.Link>
            <Nav.Link href="#managetask" className="nav-link-custom">
              Manage Task
            </Nav.Link>
            <Nav.Link href="#winner" className="nav-link-custom">
              Winner
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto d-md-flex align-items-center">
            <Button
              variant="outline-light"
              onClick={handleShow}
              className="d-flex align-items-center"
            >
              <Image
                src="data:image/png;base64,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"
                roundedCircle
                width="40"
                height="40"
                alt="profile"
                className="me-2"
              />
              <span className="d-none d-lg-inline">John Doe</span>
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Image
              src="https://via.placeholder.com/60" // Profile Image Placeholder
              roundedCircle
              width="60"
              height="60"
              alt="profile"
            />
            <span className="ms-3">John Doe</span>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <ListGroup variant="flush">
            {/* My Profile */}
            <ListGroup.Item action href="#profile">
              <FaUser className="me-2" /> My Profile
            </ListGroup.Item>

            {/* Triplewols */}
            <ListGroup.Item action href="#triplewols">
              Triplewols
            </ListGroup.Item>

            {/* WhatsApp */}
            <ListGroup.Item action href="https://wa.me/your-whatsapp-number">
              <FaWhatsapp className="me-2" /> WhatsApp
            </ListGroup.Item>

            {/* Call */}
            <ListGroup.Item action href="tel:+123456789">
              <FaPhoneAlt className="me-2" /> Call
            </ListGroup.Item>

            {/* Leaderboard */}
            <ListGroup.Item action href="#leaderboard">
              <FaTrophy className="me-2" /> Leaderboard
            </ListGroup.Item>

            {/* Task History */}
            <ListGroup.Item action href="#task-history">
              <FaHistory className="me-2" /> All Task History
            </ListGroup.Item>

            {/* Expandable Settings */}
            <ListGroup.Item
              action
              onClick={() => setOpenSettings(!openSettings)}
            >
              <FaCogs className="me-2" /> Settings{" "}
              <FaChevronDown className="float-end" />
            </ListGroup.Item>
            <Collapse in={openSettings}>
              <ListGroup variant="flush" className="ms-4">
                <ListGroup.Item action href="#privacy">
                  Privacy
                </ListGroup.Item>
                <ListGroup.Item action href="#notifications">
                  Notifications
                </ListGroup.Item>
                <ListGroup.Item action href="#general">
                  General
                </ListGroup.Item>
              </ListGroup>
            </Collapse>

            {/* Logout */}
            <ListGroup.Item action href="#logout">
              <FaSignOutAlt className="me-2" /> Logout
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default TaskNavbar;
