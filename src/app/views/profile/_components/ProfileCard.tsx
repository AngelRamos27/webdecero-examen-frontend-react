import MarkerIcon from "@/app/Components/Icons/MarkerIcon";
import TitleLabel from "@/app/Components/Ui/TitleLabel";
import React from "react";
import TwoLinesLabel from "./TwoLinesLabel";
import PersonalInfo from "./PersonalInfo";
import ProfilePhoto from "./ProfilePhoto";

interface ProfileCardProps {
  username?: string;
  email?: string;
  city?: string;
  country?: string;
  birthDate?: string;
  age?: string;
  phone?: string;
  personalInfo1?: string;
  personalInfo2?: string;
  personalInfo3?: string;
}

const ProfileCard = ({
  username,
  email,
  city,
  country,
  birthDate,
  age,
  phone,
  personalInfo1,
  personalInfo2,
  personalInfo3,
}: ProfileCardProps) => {
  return (
    <div className="lg:w-3/8 w-80 lg:h-3/5 h-96 p-1 bg-white rounded-md flex flex-col  justify-center items-center">
      <div className="absolute lg:top-[10%]  top-[13%] left-1/2 transform -translate-x-1/2 lg:w-30 w-26 z-[10]">
        <ProfilePhoto alt="photo user" position="" />
      </div>
      <div className="w-full flex justify-center flex-col gap-8">
        <div className="flex flex-col w-full  justify-center items-center pt-14">
          <TitleLabel
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
              text={city ?? "Ciudad"}
              color="black"
              isBold={true}
              size="text-sm"
            />
            -
            <TitleLabel
              text={country ?? "País"}
              color="black"
              isBold={true}
              size="text-md"
            />
          </div>
        </div>
        {/* Primera sección */}
        <div className="flex w-full lg:gap-20 gap-5 justify-center items-center">
          <TwoLinesLabel
            color="text-slate-700"
            data={birthDate ?? "2002-10-27"}
            isBold={true}
            size={"md:text-xl text-md"}
            secondLine="Cumpleaños"
          />
          <TwoLinesLabel
            color="text-slate-700"
            data={age ?? "22"}
            isBold={true}
            size={"md:text-xl text-md"}
            secondLine="Edad"
          />
          <TwoLinesLabel
            color="text-slate-700"
            data={phone ?? "4431723002"}
            isBold={true}
            size={"md:text-xl text-md"}
            secondLine="Teléfono"
          />
        </div>
        {/* segunda sección */}
        <div className="w-full flex-col flex gap-1 lg:pl-24 justify-center  pb-5">
          <PersonalInfo number={"1"} information={personalInfo1 ?? "usuario"} />
          <PersonalInfo number={"2"} information={personalInfo2 ?? "usuario"} />
          <PersonalInfo number={"3"} information={personalInfo3 ?? "usuario"} />
        </div>{" "}
        {/* Tercera sección */}
      </div>
    </div>
  );
};

export default ProfileCard;
