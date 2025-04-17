import React from "react";

interface colorType {
  colorType: string;
  text: string;
  type: "submit" | "reset" | "button";
  colorText?: string;
  onClick?: () => void;
} // interfaz de datos a recibir

const Button = ({ colorType, text, type, colorText, onClick }: colorType) => {
  //botón personalizado, que recibe distintos datos, reutilizable
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${colorType} ${
        colorText === undefined ? "text-white" : colorText
      } focus:scale-105 duration-500  flex items-center justify-center rounded-sm w-full p-4`}
    >
      {text}
    </button>
  );
};

export default Button;
