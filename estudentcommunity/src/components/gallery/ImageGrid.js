import React from "react";
import { motion } from "framer-motion";
import { galleryImage } from "../../assets/data";
import "./gallery.css";

const ImageGrid = ({ setSelectedImg }) => {
  return (
    <div className="img-grid">
      {galleryImage.map((image) => (
        <motion.div
          className="img-wrap"
          key={image.id}
          layout
          whileHover={{ opacity: 1 }}
          s
          onClick={() => setSelectedImg(image.url)}
        >
          <motion.img
            src={image.url}
            alt="image name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid;
