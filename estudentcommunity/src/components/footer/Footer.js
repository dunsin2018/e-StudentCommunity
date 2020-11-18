import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container className="footer-content">
          <div>
            <Link to="/contact">Contact Us</Link>
            <Link className="ml-3" to="/blog">
              Blogs
            </Link>
          </div>
          <div>
            &copy; {new Date().getFullYear()} E-Community, all rights reserved
          </div>
        </Container>
      </div>
    );
  }
}
