import React, { useState } from "react";
import {
  Form,
  Button,
  Col,
  Row,
  InputGroup,
  FormGroup,
  Container,
} from "react-bootstrap";

const SubmitUser = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="p-5 bg-gradient-dark text-dark">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomName">
            <Form.Label>Personel Adı</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Personel adını giriniz."
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomSurname">
            <Form.Label>Personel Soyadı</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Personel soyadını giriniz."
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomEmail">
            <Form.Label>E-Posta Adresi</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="example@aile.gov.tr"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Geçerli bir kullanıcı e-posta adresi giriniz.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>Kullanıcı Adı</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Kullanıcı adı giriniz."
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Bir şifre belirleyiniz.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustomPassword">
            <Form.Label>Şifre</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                placeholder="*******"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Geçerli bir kullanıcı adı giriniz.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="text-center pt-5">
          <FormGroup>
            <Button type="submit" className="bg-success">
              Kaydet
            </Button>
          </FormGroup>
        </Row>
      </Form>
    </div>
  );
};

export default SubmitUser;
