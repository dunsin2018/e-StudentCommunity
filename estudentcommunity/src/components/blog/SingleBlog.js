import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardSubtitle,
} from "reactstrap";
import moment from "moment";
import { useParams } from "react-router-dom";
import { blogs } from "../../assets/data";

const SingleBlog = () => {
  const [selected, setSelected] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const data = blogs.find((item) => item.id === id);
      setSelected(data);
    }
  }, [id]);

  return (
    <Container>
      {selected ? (
        <>
          <h3>{selected.title}</h3>
          <Row>
            <Col md="12">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={selected.image}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle>
                    <span className="text-muted">
                      {moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")},
                    </span>{" "}
                    <span className="text-muted">by Author</span>
                  </CardSubtitle>
                  <CardText>{selected.details}</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </>
      ) : null}
    </Container>
  );
};

export default SingleBlog;
