import React, { useState } from "react";
import { Container } from "reactstrap";
import ImageGrid from "../components/gallery/ImageGrid";
import Modal from "../components/gallery/Modal";
import Title from "../components/gallery/Title";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <Container className="mt-5" style={{ marginBottom: "10%" }}>
      <Title />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </Container>
  );
};

export default Gallery;
