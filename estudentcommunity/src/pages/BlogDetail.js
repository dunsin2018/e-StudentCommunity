import React from "react";
import { Container } from "reactstrap";
import SingleBlog from "../components/blog/SingleBlog";

const BlogDetail = () => {
  return (
    <Container className="mt-5" style={{ marginBottom: "10%" }}>
      <SingleBlog />
    </Container>
  );
};

export default BlogDetail;
