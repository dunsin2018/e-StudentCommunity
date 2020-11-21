import React from "react";
import PropTypes from "prop-types";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  CardImg,
  Button,
  CardText,
} from "reactstrap";
import moment from "moment";
import { Link } from "react-router-dom";
import { blogs } from "../../assets/data";

const MainItem = () => {
  return (
    <Col md="8">
      <Row>
        {blogs.map((blog) => {
          return (
            <Col md="6" key={blog.id}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={blog.image}
                  alt="Card image cap"
                />

                <CardBody>
                  <CardTitle>{blog.title}</CardTitle>
                  <CardSubtitle className="mb-3">
                    <span className="text-muted">
                      {moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")}
                    </span>
                  </CardSubtitle>
                  <CardText>{blog.details}</CardText>
                </CardBody>
                <CardFooter>
                  {" "}
                  <Link to={`/blog/${blog.id}`}>
                    <Button color="info" size="sm">
                      Read more...
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Col>
  );
};

export default MainItem;
