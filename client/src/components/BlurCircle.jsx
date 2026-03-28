import React from "react";

const BlurCircle = ({
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto"
}) => {
  return (
    <div
      className="absolute z-0 h-70 w-70 rounded-full bg-blue-300/20 blur-[50px]"
      style={{ top, left, right, bottom }}
    />
  );
};

export default BlurCircle;


