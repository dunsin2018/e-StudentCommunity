import React from "react";
import { Container } from "reactstrap";
import RecentEvents from "../components/RecentEvents";

const Events = () => {
  return (
    <Container className="mt-5" style={{ marginBottom: "10%" }}>
      <RecentEvents />
    </Container>
  );
};

export default Events;
