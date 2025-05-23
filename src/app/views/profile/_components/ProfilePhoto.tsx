import React from "react";
import NImage from "next/image";
import PersonIcon from "@/app/Components/Icons/PersonIcon";

interface profileImageData {
  img?: string;
  alt: string;
  position?: string;
} // interfaz de datos

const ProfilePhoto = ({ img, alt, position }: profileImageData) => {
  return (
    <div
      className={`border-4 border-secondary rounded-full flex justify-center items-center w-auto shadow-secondary shadow-md bg-white  ${position}`}
    >
      {img ? <NImage src={img} alt={alt} width={200} height={200} /> : <PersonIcon />}
    </div>
  );
};

export default ProfilePhoto;

//componente de la foto del usuario