import React from "react";
import { Container } from "reactstrap";
import { events } from "../assets/data";
import RecentEvents from "../components/RecentEvents";

const Events = () => {
  return (
    <Container className="mt-5" style={{ marginBottom: "10%" }}>
      <RecentEvents events={events} heading="ALL EVENTS" />
    </Container>
  );
};

export default Events;
