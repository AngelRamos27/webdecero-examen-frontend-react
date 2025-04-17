import React from "react";

interface labelData {
  text: string;
  color: string;
  size: string;
  isBold: boolean;
}

const TitleLabel = ({ text, color, size, isBold }: labelData) => {
  return (
    <div
      className={`${color} ${
        isBold ? "font-semibold" : ""
      } ${size} flex items-center justify-center p-1`}
    >
      {text}
    </div>
  );
};

export default TitleLabel;
