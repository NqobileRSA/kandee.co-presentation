import React from "react";

const PixiesetGallery = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <iframe
        src="https://kandeephotography.pixieset.com/avbob65aliveliveonmetrofm/"
        style={{
          width: "100%",
          height: "110vh",
          border: "none",
          position: "absolute",
          top: "-10vh",
        }}
        title="Pixieset Gallery"
      ></iframe>
    </div>
  );
};

export default PixiesetGallery;
