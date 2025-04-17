import TitleLabel from "@/app/Components/Ui/TitleLabel";
import React from "react";
interface dataProps {
  data: string;
  size: string;
  secondLine: string;
  color: string;
  isBold: boolean;
}

const TwoLinesLabel = ({
  data,
  size,
  secondLine,
  color,
  isBold,
}: dataProps) => {
  return (
    <div className="flex flex-col w-auto text-center  justify-center items-center ">
      <TitleLabel text={data} color={color} isBold={isBold} size={size} />
      <p className="text-sm">{secondLine}</p>
    </div>
  );
};

export default TwoLinesLabel;
