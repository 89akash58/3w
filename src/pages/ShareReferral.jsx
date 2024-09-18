import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FaCopy, FaShareAlt } from "react-icons/fa";

const ShareReferral = () => {
  const [referralLink, setReferralLink] = useState(
    "https://taskapp.com/referral/ABC123"
  );

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied to clipboard!");
  };

  return (
    <Container className="my-5">
      <Card>
        <Card.Body>
          <h2 className="mb-4">Share Your Referral Link</h2>
          <InputGroup className="mb-3">
            <FormControl
              value={referralLink}
              readOnly
              aria-label="Referral Link"
            />
            <Button variant="outline-secondary" onClick={handleCopyLink}>
              <FaCopy /> Copy Link
            </Button>
            <Button variant="primary" className="ms-2">
              <FaShareAlt /> Share
            </Button>
          </InputGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ShareReferral;
