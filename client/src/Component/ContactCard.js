import React from "react";
import { Card } from "react-bootstrap";
const ContactCard = ({ el }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{el.Fullname}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{el.Email}</Card.Subtitle>
          <Card.Text>{el.PhoneNumber}</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard;
