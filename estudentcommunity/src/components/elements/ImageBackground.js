import React from "react";

const ImageBackground = ({ pageTitle }) => {
  return (
    <div className="image-background">
      <img width="100%" src="https://via.placeholder.com/150" alt="" />
      <h3 className="pageTitle">{pageTitle}</h3>
    </div>
  );
};

export default ImageBackground;
