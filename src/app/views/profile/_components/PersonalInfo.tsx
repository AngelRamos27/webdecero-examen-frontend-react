import React from "react";

interface props {
  information: string;
  number: string;
}

const PersonalInfo = ({ information, number }: props) => {
  return (
    <div className="flex gap-2 text-sm justify-center lg:justify-normal">
      <p>Información personal {number}:</p> {information}
    </div>
  );
};

export default PersonalInfo;
