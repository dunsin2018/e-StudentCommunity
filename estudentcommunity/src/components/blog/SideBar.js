import React, { useState } from "react";
import {
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  CardImg,
} from "reactstrap";
import classnames from "classnames";
import moment from "moment";
import { Link } from "react-router-dom";
import { blogs } from "../../assets/data";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <Col md="4">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            RECENT POST
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            POPULAR POST
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane
          tabId="1"
          style={{ border: "1px solid rgba(0,0,0,.125)", padding: "5px" }}
        >
          {blogs.map((blog) => {
            return (
              <Row className="mb-3 mt-3" key={blog.id}>
                <Col md="6">
                  <Card>
                    <CardImg
                      width="100%"
                      src={blog.image}
                      alt="Card image cap"
                    />
                  </Card>
                </Col>
                <Col md="6">
                  <h5>{blog.title}</h5>

                  <span className="text-muted">
                    {moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")}
                  </span>
                  <div className="mt-3">
                    <Link to={`/blog/${blog.id}`}>
                      <Button color="info" size="sm">
                        Read
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            );
          })}
        </TabPane>
        <TabPane
          tabId="2"
          style={{ border: "1px solid rgba(0,0,0,.125)", padding: "5px" }}
        >
          {blogs.map((blog) => {
            return (
              <Row className="mb-3 mt-3" key={blog.id}>
                <Col md="6">
                  <Card>
                    <CardImg
                      width="100%"
                      src={blog.image}
                      alt="Card image cap"
                    />
                  </Card>
                </Col>
                <Col md="6">
                  <h5>{blog.title}</h5>

                  <span className="text-muted">
                    {moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")}
                  </span>
                  <div className="mt-3">
                    <Link to={`/blog/${blog.id}`}>
                      <Button color="info" size="sm">
                        Read
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            );
          })}
        </TabPane>
      </TabContent>
    </Col>
  );
};

export default SideBar;
