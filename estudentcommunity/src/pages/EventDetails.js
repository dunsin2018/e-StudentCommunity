import React from "react";
import { Container } from "reactstrap";
import ImageBackground from "../components/elements/ImageBackground";
import SingleEvent from "../components/SingleEvent";

const EventDetails = () => {
  return (
    <section>
      <ImageBackground pageTitle="EVENT TITLE" />
      <Container className="mt-5" style={{ marginBottom: "10%" }}>
        <SingleEvent />
      </Container>
    </section>
  );
};

export default EventDetails;
