import React from "react";

interface props {
  information: string;
  title: string;
} //interfaz de datos 

const PersonalInfo = ({ title, information }: props) => {
  return (
    <div className="flex gap-2 text-sm justify-center lg:justify-normal">
      <p>{title}:</p>
      {information}
    </div>
  );
};

export default PersonalInfo;

// componente para ser reutilizado y reducir líneas de código en otro