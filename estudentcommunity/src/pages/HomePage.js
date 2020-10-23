import React from "react";
import { Row, Col, Container } from "reactstrap";
import { images } from "../assets/data";
import ImageSlider from "../components/elements/ImageSlider";
import logo from "../assets/logo.jpeg";

const HomePage = () => {
  return (
    <>
      <Row>
        <Col md="12">
          <ImageSlider images={images} />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
