import React from "react";
import { Row, Col, Container } from "reactstrap";
import { images } from "../assets/data";
import ImageSlider from "../components/elements/ImageSlider";
import logo from "../assets/logo.jpeg";
import SignInPage from "./SignInPage";

const HomePage = () => {
  return (
    <>
      <Row style={{ marginBottom: "10%" }}>
        <Col md="12">
          <ImageSlider images={images} />
          <SignInPage />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
