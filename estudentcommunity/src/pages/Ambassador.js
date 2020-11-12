import React from "react";
import { Container } from "reactstrap";
import { ambassadors } from "../assets/studentAmbData";
import StudentAmbassador from "../components/StudentAmbassador";

const Ambassador = () => {
  return (
    <Container className="mt-5" style={{ marginBottom: "10%" }}>
      <StudentAmbassador
        ambassadors={ambassadors}
        title="MEET ALL OUR STUDENT AMBASSADORS"
      />
    </Container>
  );
};

export default Ambassador;
