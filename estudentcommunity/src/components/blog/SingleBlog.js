import React from "react";
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

const SingleBlog = () => {
  return (
    <Container>
      <h3>Blog Title</h3>
      <Row>
        <Col md="12">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://via.placeholder.com/150"
              alt="Card image cap"
            />
            <CardBody>
              <CardSubtitle>
                <span className="text-muted">
                  {moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")},
                </span>{" "}
                <span className="text-muted">by Author</span>
              </CardSubtitle>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                modi quas dicta tempora veniam autem unde vero, voluptas quod
                dolorum et suscipit adipisci rem? Impedit dignissimos sequi
                pariatur itaque molestias. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Nisi, similique suscipit
                recusandae libero veniam et repellat voluptate voluptatibus
                atque velit eum excepturi est sed quae odit maiores ea laborum
                soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Saepe, modi quas dicta tempora veniam autem unde vero, voluptas
                quod dolorum et suscipit adipisci rem? Impedit dignissimos sequi
                pariatur itaque molestias. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Nisi, similique suscipit
                recusandae libero veniam et repellat voluptate voluptatibus
                atque velit eum excepturi est sed quae odit maiores ea laborum
                soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Saepe, modi quas dicta tempora veniam autem unde vero, voluptas
                quod dolorum et suscipit adipisci rem? Impedit dignissimos sequi
                pariatur itaque molestias. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Nisi, similique suscipit
                recusandae libero veniam et repellat voluptate voluptatibus
                atque velit eum excepturi est sed quae odit maiores ea laborum
                soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Saepe, modi quas dicta tempora veniam autem unde vero, voluptas
                quod dolorum et suscipit adipisci rem? Impedit dignissimos sequi
                pariatur itaque molestias. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Nisi, similique suscipit
                recusandae libero veniam et repellat voluptate voluptatibus
                atque velit eum excepturi est sed quae odit maiores ea laborum
                soluta.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBlog;
