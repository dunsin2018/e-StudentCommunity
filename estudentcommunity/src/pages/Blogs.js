import React from "react";
import { Container, Row } from "reactstrap";
import MainItem from "../components/blog/MainItem";
import SideBar from "../components/blog/SideBar";
import ImageBackground from "../components/elements/ImageBackground";

const Blogs = () => {
  return (
    <section>
      <ImageBackground pageTitle="BLOG" />
      <Container className="mt-5" style={{ marginBottom: "10%" }}>
        <Row>
          <MainItem />
          <SideBar />
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
