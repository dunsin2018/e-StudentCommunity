import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  Button,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  CardFooter,
} from "reactstrap";
import { useAuthState } from "../context/auth";

const Dashboard = () => {
  const { currentUser } = useAuthState();

  return (
    <Container className="mt-5" style={{ marginBottom: "10%" }}>
      <Row>
        <Col md="8">
          <Card>
            <CardHeader>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Button size="sm" color="info">
                  Add Member
                </Button>
                <Button className="ml-3" size="sm" color="warning">
                  Create Community
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <Row>
                <Col
                  ma="6"
                  style={{ borderRight: "1px solid rgba(0,0,0,.125)" }}
                >
                  <div>
                    <Button color="info" size="sm" className="float-right">
                      UPDATE
                    </Button>
                  </div>
                  <CardImg
                    src="/projectImages/windows-p74ndnYWRY4-unsplash.jpg"
                    className="avatar"
                  />
                  <div className="mt-4">
                    <FormGroup>
                      <Label for="fname">First Name</Label>
                      <Input
                        type="text"
                        name="fname"
                        id="fname"
                        placeholder="first name"
                        value={currentUser && currentUser.firstName}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="fname">Last Name</Label>
                      <Input
                        type="text"
                        name="lname"
                        id="lname"
                        placeholder="last name"
                        value={currentUser && currentUser.lastName}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="department">Department</Label>
                      <Input
                        type="text"
                        name="department"
                        id="department"
                        placeholder="department"
                        value={currentUser && currentUser.department}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="year">Year</Label>
                      <Input
                        type="text"
                        name="year"
                        id="year"
                        placeholder="year"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="country">Country</Label>
                      <Input
                        type="text"
                        name="country"
                        id="country"
                        placeholder="country"
                        value={currentUser && currentUser.country}
                      />
                    </FormGroup>
                  </div>
                </Col>
                <Col ma="6">
                  <h4 className="text-center border-bottom">
                    CHAT COMMUNITIES
                  </h4>
                  <div className="mt-4">
                    <h6 className="mb-3 border communities"># Politics</h6>
                    <h6 className="mb-3 border communities"># Politics</h6>
                    <h6 className="mb-3 border communities"># Politics</h6>
                    <h6 className="mb-3 border communities"># Politics</h6>
                    <h6 className="mb-3 border communities"># Politics</h6>
                    <h6 className="mb-3 border communities"># Politics</h6>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardHeader>Selected Community</CardHeader>
            <CardBody></CardBody>
            <CardFooter>
              <div className="d-flex align-items-center">
                <Input placeholder="Your message" />
                <Button size="sm" color="primary" className="ml-3">
                  Send
                </Button>
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
