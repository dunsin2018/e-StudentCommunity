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

const StudentAmbassador = ({ isHompage, ambassadors, title }) => {
  return (
    <section className="mb-5">
      <h3 className="text-center">{title}</h3>
      <Row>
        {ambassadors.map((item) => {
          return (
            <Col md="4" key={item.id} className="mb-4">
              <Card>
                <CardImg top width="100%" src={item.image} alt={item.name} />
                <CardBody>
                  <CardTitle tag="h5">{item.name}</CardTitle>

                  <CardText>
                    <ul>
                      <li>
                        {" "}
                        <strong>Email : </strong> {item.email}
                      </li>
                      <li>
                        {" "}
                        <strong>Department: </strong> {item.department}
                      </li>
                    </ul>

                    <div>
                      <a
                        href={item.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook className="mr-3" color="blue" size={24} />
                      </a>
                      <a
                        href={item.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitterSquare color="#00acee" size={24} />
                      </a>
                    </div>
                  </CardText>
                  <Link to={`/ambassador/${item.id}`}>
                    <Button color="info" size="sm">
                      View Profile
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          );
        })}
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
