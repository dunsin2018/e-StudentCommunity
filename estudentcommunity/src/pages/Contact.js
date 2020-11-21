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
  FormText,
} from "reactstrap";

const Contact = () => {
  return (
    <Container className="mt-5" style={{ marginBottom: "10%" }}>
      <div className="contact-us">
        <h3>Send us your questions!</h3>

        <p>
          You can find our personal email addresses on our profiles. For general
          questions, please contact us via email: tallinn@eek.ee. You can also
          find us on Facebook: facebook.com/E-studentunioncommunity
        </p>
        <p>
          <strong>NB!</strong> If you have questions about application process,
          documents needed to apply, scholarships, etc., please email to
          study-center.
        </p>
      </div>
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
              <Label for="lastName">Last Name</Label>
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
              <Label for="subject">Subject</Label>
              <Input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                name="message"
                id="message"
                placeholder="Your message"
              />
            </FormGroup>
          </Col>
        </Row>
        <Button size="sm" color="info">
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
