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
  FormText,
} from "reactstrap";
import { signInWithEmail } from "../api/Service";
import { useAuthDispatch, useAuthState } from "../context/auth";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useAuthDispatch();
  const { error } = useAuthState();

  console.log(error);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = () => {
    const { password, email } = formData;
    if (!password || !email) {
      alert("Password and confirm password must match");
      return;
    }

    signInWithEmail(formData, dispatch);
  };

  return (
    <Container className="mt-5 center-div" style={{ marginBottom: "10%" }}>
      <Card>
        <CardHeader>
          <h3 className="text-center text-uppercase">Sign In</h3>
        </CardHeader>
        <CardBody>
          <Form>
            <Row form>
              <Col md={12}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="studentCate">Student Categories</Label>
              <Input type="select" name="studentCate" id="studentCate">
                <option>select category</option>
                <option>Ambassador</option>
                <option>Reps</option>
                <option>Student</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
              />
              {error ? <FormText>{error.message}</FormText> : null}
            </FormGroup>
          </Form>
        </CardBody>
        <CardFooter>
          <div className="text-center">
            <Button size="lg" color="primary" onClick={handleSignIn}>
              Sign in
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default SignInPage;
