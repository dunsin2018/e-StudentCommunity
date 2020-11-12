import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { ambassadors } from "../assets/studentAmbData";

const SingleAmbassador = () => {
  const [selected, setSelected] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const data = ambassadors.find((item) => item.id === parseInt(id));
      setSelected(data);
    }
  }, [id]);

  return selected ? (
    <Row>
      <Col md="6">
        <img width="100%" src={selected.image} alt={selected.name} />
      </Col>
      <Col md="6">
        <h1>{selected.name}</h1>
        <h6>Title</h6>
        <br />
        <span style={{ display: "block" }}>
          <strong>NAME:</strong> {selected.name}
        </span>
        <span style={{ display: "block" }}>
          <strong>E-MAIL:</strong> {selected.email}
        </span>
        <span style={{ display: "block" }}>
          <strong>Country:</strong> {selected.country}
        </span>
        <span style={{ display: "block" }}>
          <strong>PROGRAMME:</strong> {selected.programme}
        </span>
        <br />
        <h3>{selected.ques1.title}</h3>
        <p>{selected.ques1.answer}</p>
        <br />
        <h3>{selected.ques2.title}</h3>
        <p>{selected.ques2.answer}</p>
        <br />
        <h3> {selected.ques3.title}</h3>
        <p>{selected.ques3.answer}</p>
        <br />
      </Col>
    </Row>
  ) : null;
};

export default SingleAmbassador;
