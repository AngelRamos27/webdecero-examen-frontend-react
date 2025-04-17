import MarkerIcon from "@/app/Components/Icons/MarkerIcon";
import TitleLabel from "@/app/Components/Ui/TitleLabel";
import React from "react";
import TwoLinesLabel from "./TwoLinesLabel";
import PersonalInfo from "./PersonalInfo";
import ProfilePhoto from "./ProfilePhoto";
import { UserDataProps } from "../page";



const ProfileCard = ({
  username,
  email,
  address,
  birthDate,
  age,
  phone,
  bloodGroup,
  gender,
  weight,
  image,
}: UserDataProps) => { //se exporta la interfaz de datos del componente padre
  return (
    <div className="max-w-md lg:max-w-lg h-auto p-7 bg-white rounded-md flex flex-col  justify-center items-center">
      <div className="absolute lg:top-[10%]  top-[13%] left-1/2 transform -translate-x-1/2 lg:w-30 w-26 z-[10]">
        <ProfilePhoto alt="photo user" img={image} />
      </div>
      <div className="w-full flex justify-center flex-col gap-8">
        <div className="flex flex-col w-full  justify-center items-center pt-14">
          <TitleLabel // componente para hacer etiquetas para titulos, adaptable y reusable
            text={username ?? "Nombre completo del usuario"}
            color="text-secondary"
            isBold={true}
            size="md:text-lg text-md"
          />
          <TitleLabel
            text={email ?? "Correo del usuario"}
            color="text-primary"
            isBold={false}
            size="text-sm"
          />
          <div className="flex justify-center items-center gap-1">
            <MarkerIcon className="w-5 h-5 text-black font-bold" />
            <TitleLabel
              text={address.city ?? "Ciudad"}
              color="black"
              isBold={true}
              size="text-sm"
            />
            -
            <TitleLabel
              text={address.country ?? "País"}
              color="black"
              isBold={true}
              size="text-sm"
            />
          </div>
        </div>
        {/* Primera sección */}
        <div className="flex w-full lg:gap-20 gap-5 justify-center items-center">
          <TwoLinesLabel // componente para evitar repetir varios divs y hacer el componente más pequeño
            color="text-slate-700"
            data={birthDate ?? "2002-10-27"}
            isBold={true}
            size={"md:text-lg text-md"}
            secondLine="Cumpleaños"
          />
          <TwoLinesLabel
            color="text-slate-700"
            data={age ?? "22"}
            isBold={true}
            size={"md:text-lg text-md"}
            secondLine="Edad"
          />
          <TwoLinesLabel
            color="text-slate-700"
            data={phone ?? "4431723002"}
            isBold={true}
            size={"md:text-lg text-md"}
            secondLine="Teléfono"
          />
        </div>
        {/* segunda sección */}
        <div className="w-full flex-col flex gap-1  justify-center  pb-5">
          <PersonalInfo // Mismo caso que el anterior, componente para reducir líneas en este card
            title={"Tipo de sangre"}
            information={bloodGroup ?? "usuario"}
          />
          <PersonalInfo title="Género " information={gender ?? "usuario"} />
          <PersonalInfo title="Peso en kg" information={weight ?? "usuario"} />
        </div>
        {/* Tercera sección */}
      </div>
    </div>
  );
};

export default ProfileCard;
