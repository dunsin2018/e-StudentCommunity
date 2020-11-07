import React from "react";
import { Container } from "reactstrap";
import StudentAmbassador from "../components/StudentAmbassador";

const Ambassador = () => {
  return (
    <Container className="mt-5" style={{ marginBottom: "10%" }}>
      <StudentAmbassador />
    </Container>
  );
};

export default Ambassador;
