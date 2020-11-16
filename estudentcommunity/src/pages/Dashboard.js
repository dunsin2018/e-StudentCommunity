import React, { useState, useEffect } from "react";
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
import Messenger from "../components/messenger/Messenger";
import { useAuthState } from "../context/auth";
import { firestore } from "../api/firebase.config";
import Communities from "../components/messenger/Communities";
import CreateNewCommunity from "../components/messenger/CreateNewCommunity";

const Dashboard = () => {
  const [communites, setCommunity] = useState([]);
  const [communityName, setName] = useState("");
  const [isOpen, setIsopen] = useState(false);
  const { currentUser } = useAuthState();

  useEffect(() => {
    firestore
      .collection("communities")
      .onSnapshot((snapshot) =>
        setCommunity(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);

  const closeModal = () => {
    setIsopen(false);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const addCommunity = () => {
    if (communityName) {
      firestore.collection("communities").add({
        name: communityName,
      });
      closeModal();
      setName("");
    }
  };

  return (
    <div className="mt-5 mr-4 ml-4" style={{ marginBottom: "10%" }}>
      <Row>
        <Col md="7">
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
                <Button
                  className="ml-3"
                  size="sm"
                  color="warning"
                  onClick={() => setIsopen(true)}
                >
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
                    {communites.map((community) => (
                      <Communities
                        name={community.data.name}
                        id={community.id}
                        key={community.id}
                      />
                    ))}
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md="5">
          <Card>
            <CardHeader>Selected Community</CardHeader>
            <CardBody>
              <Messenger />
            </CardBody>
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
      <CreateNewCommunity
        isOpen={isOpen}
        toggle={closeModal}
        communityName={communityName}
        handleChange={handleChange}
        addCommunity={addCommunity}
      />
    </div>
  );
};

export default Dashboard;
