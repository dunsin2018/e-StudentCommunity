import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "reactstrap";

const SignUpPage = () => {
  return (
    <Container className="mt-5 center-div">
      <Card>
        <CardHeader>
          <h3 className="text-center text-uppercase">Sign up</h3>
        </CardHeader>
        <CardBody>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First name"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last name"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="department">Department</Label>
                  <Input type="select" name="department" id="department">
                    <option>select category</option>
                    <option>Ambassador</option>
                    <option>Reps</option>
                    <option>Student</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="emailSignUp">Email</Label>
                  <Input
                    type="email"
                    name="emailSignUp"
                    id="emailSignUp"
                    placeholder="email"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup tag="fieldset" className="d-flex ">
                  <legend>Gender</legend>
                  <FormGroup check className="mr-2">
                    <Label check>
                      <Input type="radio" name="radio1" /> Male
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" /> Female
                    </Label>
                  </FormGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="program">Program</Label>
                  <Input
                    type="select"
                    name="program"
                    id="program"
                    placeholder="Program"
                  >
                    <option>select program</option>
                    <option>Bachelors</option>
                    <option>Masters</option>
                    <option>Phd</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="country">Country</Label>
                  <Input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="country"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
        <CardFooter>
          <div className="text-center">
            <Button size="lg" color="primary">
              Sign Up
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default SignUpPage;
