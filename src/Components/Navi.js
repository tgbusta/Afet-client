import React from "react";
import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {FaHandHoldingHeart} from 'react-icons/fa'
import ReactFileBase64 from 'react-file-base64'


const Navi = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="/"><Image src="../img/handshake-g750be11ee_1280.png" fluid />Afet Yardım Sistemi</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="/home">Anasayfa</Nav.Link>
              <Nav.Link href="/aids">Yardımlar</Nav.Link>
              <Nav.Link href="/donations">Bağışlar</Nav.Link>
              <Nav.Link href="/regions">Bölgeler</Nav.Link>
              <Nav.Link href="/case">Kasa</Nav.Link>
              <Nav.Link href="/users">Kullanıcı İşlemleri</Nav.Link>
                    <LinkContainer to='/signin'>
                    <Nav.Link>
                      <Button variant="outline-dark">
                        Giriş Yap
                      </Button>
                    </Nav.Link>
                    </LinkContainer>  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navi;
