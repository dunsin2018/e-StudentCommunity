import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import SingleAmbassador from "../components/SingleAmbassador";
import ImageBackground from "../components/elements/ImageBackground";

const AmbassadorDetail = () => {
  return (
    <section>
      <ImageBackground pageTitle="NAME OF AMBASSADOR" />
      <Container className="mt-5" style={{ marginBottom: "10%" }}>
        <SingleAmbassador />
      </Container>
    </section>
  );
};

export default AmbassadorDetail;
