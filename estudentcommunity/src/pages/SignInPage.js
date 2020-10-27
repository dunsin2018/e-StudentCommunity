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

const SignInPage = () => {
  return (
    <Container className="mt-5 center-div">
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
              />
            </FormGroup>
          </Form>
        </CardBody>
        <CardFooter>
          <div className="text-center">
            <Button size="lg" color="primary">
              Sign in
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default SignInPage;
