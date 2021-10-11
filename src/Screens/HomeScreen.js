import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import ReactFileBase64 from 'react-file-base64'

const HomeScreen = () => {
  return (
    <div>
      <Container>
        <Carousel fade>
          <Carousel.Item>
          <Image src="holder.js/100px250" fluid />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Image src="../img/hands-gae62774af_1920.jpg" fluid />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Image src="../img/hands-gae62774af_1920.jpg" fluid />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default HomeScreen;
