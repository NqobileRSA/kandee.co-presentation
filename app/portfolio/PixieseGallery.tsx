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
      className={`fixed w-full z-50 bg-[#343E48]/90 backdrop-blur-lg transition-all duration-500`}
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
