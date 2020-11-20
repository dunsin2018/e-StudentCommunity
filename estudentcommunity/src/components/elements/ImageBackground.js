import React from "react";

const ImageBackground = ({ pageTitle }) => {
  return (
    <div className="image-background">
      <img width="100%" src="/projectImages/school123.jpg" alt="" />
      <h3 className="pageTitle">{pageTitle}</h3>
    </div>
  );
};

export default ImageBackground;
