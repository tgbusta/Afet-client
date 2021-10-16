import React, { validated, handleSubmit } from "react";
import { Form, Button, Row, InputGroup, Col, FormGroup } from "react-bootstrap";

const SubmitRegion = () => {
  return (
    <div className="p-5 bg-gradient-dark text-dark">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustomName">
            <Form.Label>Afet Bölgesi Adı</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Örneğin Kastamonu Sel Felaketi"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustomSurname">
            <Form.Label>Afet Türü</Form.Label>
            <Form.Control as="select">
              <option value="">Sel</option>
              <option value="">Deprem</option>
              <option value="">Yangın</option>
              <option value="">Toprak Kayması</option>
              <option value="">Çığ</option>
              <option value="">Fırtına</option>
              <option value="">Diğer</option>
            </Form.Control>
          </Form.Group>
        </Row>
        <Row className="mb-4">
          <Form.Group as={Col} md="4" controlId="validationCustomSurname">
            <Form.Label>Afet İli</Form.Label>
            <Form.Control as="select">
              <option value="">Ankara</option>
              <option value="">İstanbul</option>
              <option value="">İzmir</option>
              
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Afet İlçesi</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Afetten etkilenen ilçeyi giriniz."
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Bu alan boş bırakılamaz.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomSurname">
            <Form.Label>Afet Tarihi</Form.Label>

            <Form.Control
              type="date"
              aria-describedby="inputGroupPrepend"
              required
            />
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

export default SubmitRegion;
