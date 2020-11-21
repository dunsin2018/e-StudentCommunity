import React from "react";
import { Row, Col, Button } from "reactstrap";
import moment from "moment";
import { Link } from "react-router-dom";

const RecentEvents = ({ isHompage, events, heading }) => {
  return (
    <section className="mb-3 mt-3">
      <h3 className="text-center mb-4">{heading}</h3>
      {events.map((event) => {
        return (
          <Row Row key={event.id} className="mb-4">
            <Col md="4">
              <img width="100%" src={event.image} alt="" />
            </Col>
            <Col>
              <h4>{event.title}</h4>
              <p>{event.details}</p>
              <span className="text-muted">
                {moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")}
              </span>
              <div className="mt-3">
                <Link to={`/events/${event.id}`}>
                  <Button size="sm" color="info">
                    Read more
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        );
      })}

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
