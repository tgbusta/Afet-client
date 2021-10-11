import React from "react";
import {
  Form,
  Button,
  FloatingLabel,
  Container,
  FormGroup,
  Col,
  Row,
} from "react-bootstrap";

const SubmitAid = () => {
  return (
    <Container>
      <Form>
      <Form.Group as={Row} className="mb-3" controlId="FirstName">
          <Form.Label column sm={2}>
            Adı
          </Form.Label>
          <Col sm={10}>
            <Form.Control placeholder="Adını giriniz." />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="FirstName">
          <Form.Label column sm={2}>
            Soyadı
          </Form.Label>
          <Col sm={10}>
            <Form.Control placeholder="Soyadını giriniz." />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        
      </Form>
    </Container>
  );
};

export default SubmitAid;
