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

const MainItem = () => {
  return (
    <Col md="8">
      <Row>
        <Col md="6">
          <Card>
            <CardImg
              top
              width="100%"
              src="/projectImages/pexels-andrea-piacquadio-787961.jpg"
              alt="Card image cap"
            />

            <CardBody>
              <CardTitle>Title of blog</CardTitle>
              <CardSubtitle className="mb-3">
                <span className="text-muted">
                  {moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")}
                </span>
              </CardSubtitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                quos explicabo quis sunt, rem iure quia quas, doloremque
                pariatur obcaecati neque sapiente blanditiis distinctio tenetur
                numquam! Est ducimus veniam quam.
              </CardText>
            </CardBody>
            <CardFooter>
              {" "}
              <Link to="/blog/1">
                <Button color="info" size="sm">
                  Read more...
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardImg
              top
              width="100%"
              src="/ProjectImages/pexels-josh-sorenson-976866.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Title of blog</CardTitle>
              <CardSubtitle className="mb-3">
                <span className="text-muted">
                  {moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")}
                </span>
              </CardSubtitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                quos explicabo quis sunt, rem iure quia quas, doloremque
                pariatur obcaecati neque sapiente blanditiis distinctio tenetur
                numquam! Est ducimus veniam quam.
              </CardText>
            </CardBody>
            <CardFooter>
              <Link to="/blog/2">
                <Button color="info" size="sm">
                  Read more...
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};

export default MainItem;
