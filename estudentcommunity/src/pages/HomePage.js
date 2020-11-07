import React from "react";
import { Row, Col, Container } from "reactstrap";
import { images } from "../assets/data";
import ImageSlider from "../components/elements/ImageSlider";
import logo from "../assets/logo.jpeg";
import SignInPage from "./SignInPage";
import StudentAmbassador from "../components/StudentAmbassador";
import RecentEvents from "../components/RecentEvents";

const HomePage = () => {
  return (
    <section style={{ marginBottom: "10%" }}>
      <Row className="mb-5">
        <Col md="12">
          <ImageSlider images={images} />
        </Col>
      </Row>
      <Container>
        <StudentAmbassador isHompage={true} />
        <RecentEvents isHompage={true} />
      </Container>
    </section>
  );
};

export default HomePage;
