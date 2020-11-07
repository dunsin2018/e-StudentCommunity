import React from "react";
import {
  Col,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const StudentAmbassador = ({ isHompage }) => {
  return (
    <section className="mb-5">
      <h3 className="text-center">STUDENT AMBASSADORS</h3>
      <Row>
        <Col md="4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://via.placeholder.com/150"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">John Doe</CardTitle>

              <CardText>
                <ul>
                  <li>
                    {" "}
                    <strong>Email : </strong> text@gmail.com
                  </li>
                  <li>
                    {" "}
                    <strong>Department: </strong> text@gmail.com
                  </li>
                </ul>

                <div>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="mr-3" color="blue" size={24} />
                  </a>
                  <a
                    href="https://twitter.com/?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitterSquare color="#00acee" size={24} />
                  </a>
                </div>
              </CardText>
              <Button color="info" size="sm">
                View Profile
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://via.placeholder.com/150"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">John Doe</CardTitle>

              <CardText>
                <ul>
                  <li>
                    {" "}
                    <strong>Email : </strong> text@gmail.com
                  </li>
                  <li>
                    {" "}
                    <strong>Department: </strong> text@gmail.com
                  </li>
                </ul>

                <div>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="mr-3" color="blue" size={24} />
                  </a>
                  <a
                    href="https://twitter.com/?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitterSquare color="#00acee" size={24} />
                  </a>
                </div>
              </CardText>
              <Button color="info" size="sm">
                View Profile
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://via.placeholder.com/150"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">John Doe</CardTitle>

              <CardText>
                <ul>
                  <li>
                    {" "}
                    <strong>Email : </strong> text@gmail.com
                  </li>
                  <li>
                    {" "}
                    <strong>Department: </strong> text@gmail.com
                  </li>
                </ul>

                <div>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="mr-3" color="blue" size={24} />
                  </a>
                  <a
                    href="https://twitter.com/?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitterSquare color="#00acee" size={24} />
                  </a>
                </div>
              </CardText>
              <Button color="info" size="sm">
                View Profile
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {isHompage && (
        <div className="mt-3 mb-5 text-center">
          <Link to="/ambassador">
            <Button>View all</Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default StudentAmbassador;
