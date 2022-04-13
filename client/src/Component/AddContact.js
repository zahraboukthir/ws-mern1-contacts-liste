import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addcontact } from "../redux/actions/contactactions";

const AddContact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState(0);
  const [bdate, setBdate] = useState(0);
  const dispatch = useDispatch();
  const handeladd = (e) => {
    e.preventDefault();
    dispatch(
      addcontact({
        Fullname: fullname,
        Email: email,
        Phonenumber: phonenumber,
        Birthdate: bdate,
      })
    );
  };
  return (
    <div className="Container">
      AddContact
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Fullname"
            onChange={(e) => setFullname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>PhoneNumber</Form.Label>
          <Form.Control
            type="number"
            placeholder="PhoneNumber"
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Birthdate</Form.Label>
          <Form.Control
            type="number"
            placeholder="Birthdate"
            onChange={(e) => setBdate(e.target.value)}
          />
        </Form.Group>

        <Button onClick={handeladd} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddContact;
