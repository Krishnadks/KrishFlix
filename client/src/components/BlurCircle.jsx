import React from "react";

const BlurCircle = ({
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto"
}) => {
  return (
    <div
      className="absolute z-0 h-80 w-80 rounded-full bg-red-600/30 blur-[50px]"
      style={{ top, left, right, bottom }}
    />
  );
};

export default BlurCircle;


