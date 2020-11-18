import React, { useState } from "react";
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
import { signUpNewUser } from "../api/Service";
import { useAuthDispatch, useAuthState } from "../context/auth";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    department: "",
    email: "",
    program: "",
    country: "",
    gender: "",
    confirmPassword: "",
    password: "",
    year: "",
  });

  const dispatch = useAuthDispatch();
  const { error } = useAuthState();

  const {
    firstName,
    lastName,
    department,
    email,
    program,
    country,
    gender,
    password,
    confirmPassword,
    year,
  } = formData;

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSignUpUser = () => {
    if (password !== confirmPassword) {
      alert("Password and confirm password must match");
      return;
    }

    signUpNewUser(formData, dispatch);
  };

  return (
    <Container className="mt-5 center-div" style={{ marginBottom: "10%" }}>
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
                    onChange={handleChange}
                    value={firstName}
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
                    onChange={handleChange}
                    value={lastName}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="department">Department</Label>
                  <Input
                    type="select"
                    name="department"
                    id="department"
                    onChange={handleChange}
                    value={department}
                  >
                    <option>select category</option>
                    <option>Software Development and Entrepreneurship</option>
                    <option>Game Design and Development</option>
                    <option>Creativity and Business Innovation</option>
                    <option>Start-up Entrepreneurship</option>
                    <option>International Business Administration</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    onChange={handleChange}
                    value={email}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup tag="fieldset" className="d-flex ">
                  <legend>Gender</legend>
                  <FormGroup check className="mr-2" name="gender">
                    <Label check>
                      <Input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleChange}
                      />{" "}
                      Male
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        value="Female"
                        name="gender"
                        onChange={handleChange}
                      />{" "}
                      Female
                    </Label>
                  </FormGroup>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="year">Year</Label>
                  <Input
                    type="text"
                    name="year"
                    id="year"
                    placeholder="year"
                    onChange={handleChange}
                    value={year}
                  />
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
                    onChange={handleChange}
                    value={program}
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
                    onChange={handleChange}
                    value={country}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="program">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={password}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="confirmPassword">Confirm password</Label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    value={confirmPassword}
                  />
                </FormGroup>
              </Col>
            </Row>
            {error ? <span>{error.message}</span> : null}
          </Form>
        </CardBody>
        <CardFooter>
          <div className="text-center">
            <Button
              size="lg"
              color="primary"
              disabled={
                !firstName ||
                !lastName ||
                !department ||
                !email ||
                !program ||
                !country ||
                !gender ||
                !password ||
                !confirmPassword ||
                !year
              }
              onClick={handleSignUpUser}
            >
              Sign Up
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default SignUpPage;
