import React, { useState } from "react";
import {
  Form,
  Button,
  Col,
  Row,
  InputGroup,
  FormGroup,
  Container,
  FloatingLabel
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
    
    <Container>
        <h3 className="py-3">Kullanıcı Kaydı Oluştur</h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>       
        <Row className="mb-3">

<Form.Group as={Col} md="4" controlId="validationCustomName">
            <FloatingLabel
              controlId="floatingInput"
              label="Personel Adı"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Personel Adı" />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomSurname">
            <FloatingLabel
              controlId="floatingInput"
              label="Personel Soyadı"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Personel Soyadı" />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
            
        
          <Form.Group as={Col} md="4" controlId="validationCustomEmail">
            <FloatingLabel
              name = "eposta"
              controlId="floatingInput"
              label="E-Posta Adresi"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="E-Posta Adresi" />
              <Form.Control.Feedback type="invalid">
              Geçerli bir e-posta adresi giriniz.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

        </Row>
        <Row className="mb-3">

        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <FloatingLabel
              controlId="floatingInput"
              label="Kullanıcı Adı"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Kullanıcı Adı" />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustomPassword">
            <FloatingLabel
              controlId="floatingInput"
              label="Şifre"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="******" />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
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
    </Container>
  );
};

export default SubmitUser;
