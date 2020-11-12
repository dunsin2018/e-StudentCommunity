import React from "react";
import { Row, Col, Button } from "reactstrap";
import moment from "moment";
import { Link } from "react-router-dom";

const RecentEvents = ({ isHompage }) => {
  return (
    <section className="mb-3 mt-3">
      <h3 className="text-center mb-4">RECENT EVENTS</h3>
      <Row className="mb-4">
        <Col md="4">
          <img
            width="100%"
            src="/projectImages/pexels-visual-tag-mx-5612827.jpg"
            alt=""
          />
        </Col>
        <Col>
          <h4>This is news title</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            deserunt suscipit minima error ratione minus nobis, ducimus ipsum
            atque rem blanditiis cupiditate quo quidem mollitia laborum.
            Molestias sunt libero aliquid. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Consequatur iure quaerat maiores quia,
            quas, voluptates vel repellendus incidunt, cumque cupiditate
            necessitatibus quod. Necessitatibus, quas debitis fugiat ab
            laudantium impedit sint.
          </p>
          <span className="text-muted">
            {moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")}
          </span>
          <div className="mt-3">
            <Link to="/events/1">
              <Button size="sm" color="info">
                Read more
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md="4">
          <img
            width="100%"
            src="/projectImages/sam-balye-w1FwDvIreZU-unsplash.jpg"
            alt=""
          />
        </Col>
        <Col>
          <h4>This is news title</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            deserunt suscipit minima error ratione minus nobis, ducimus ipsum
            atque rem blanditiis cupiditate quo quidem mollitia laborum.
            Molestias sunt libero aliquid. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Consequatur iure quaerat maiores quia,
            quas, voluptates vel repellendus incidunt, cumque cupiditate
            necessitatibus quod. Necessitatibus, quas debitis fugiat ab
            laudantium impedit sint.
          </p>
          <span className="text-muted">
            {moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")}
          </span>
          <div className="mt-3">
            <Link to="/events/2">
              <Button size="sm" color="info">
                Read more
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md="4">
          <img
            width="100%"
            src="/projectImages/windows-p74ndnYWRY4-unsplash.jpg"
            alt=""
          />
        </Col>
        <Col>
          <h4>This is news title</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            deserunt suscipit minima error ratione minus nobis, ducimus ipsum
            atque rem blanditiis cupiditate quo quidem mollitia laborum.
            Molestias sunt libero aliquid. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Consequatur iure quaerat maiores quia,
            quas, voluptates vel repellendus incidunt, cumque cupiditate
            necessitatibus quod. Necessitatibus, quas debitis fugiat ab
            laudantium impedit sint.
          </p>
          <span className="text-muted">
            {moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")}
          </span>
          <div className="mt-3">
            <Link to="/events/3">
              <Button size="sm" color="info">
                Read more
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
      {isHompage && (
        <div className="mt-3 mb-5 text-center">
          <Link to="/events">
            <Button>View More Events</Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default RecentEvents;
