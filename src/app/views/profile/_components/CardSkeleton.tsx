import MarkerIcon from "@/app/Components/Icons/MarkerIcon";
import React from "react";

const CardSkeleton = () => {
  //skeleton para cuando se hace el fetch del card del usuario
  return (
    <div className="max-w-md lg:max-w-lg h-auto p-7 bg-white rounded-md flex flex-col  justify-center items-center">
      <div className="w-full flex justify-center flex-col gap-8">
        <div className="flex flex-col w-full gap-2  justify-center items-center pt-14">
          <div className="h-5 rounded-md w-3/4 bg-gray-300 animate-pulse" />
          <div className="h-3 w-28 rounded-md bg-gray-300 animate-pulse" />

          <div className="flex justify-center items-center gap-1">
            <MarkerIcon className="w-5 h-5 text-black font-bold" />
            <div className="h-5 w-28 bg-gray-300 rounded-md animate-pulse" />
            -
            <div className="h-5 w-28 bg-gray-300 rounded-md animate-pulse" />
          </div>
        </div>
        {/* Primera sección */}
        <div className="flex w-full lg:gap-20 gap-5 justify-center items-center">
          <div className="flex flex-col w-auto text-center gap-2 justify-center items-center ">
            <div className="h-5 w-20 bg-gray-300 rounded-md animate-pulse" />
            <div className="h-3 w-20 bg-gray-300 rounded-md animate-pulse" />
          </div>
          <div className="flex flex-col w-auto text-center gap-2 justify-center items-center ">
            <div className="h-5 w-20 bg-gray-300 rounded-md animate-pulse" />
            <div className="h-3 w-20 bg-gray-300 rounded-md animate-pulse" />
          </div>
          <div className="flex flex-col w-auto text-center gap-2 justify-center items-center ">
            <div className="h-5 w-20 bg-gray-300 rounded-md animate-pulse" />
            <div className="h-3 w-20 bg-gray-300 rounded-md animate-pulse" />
          </div>
        </div>
        {/* segunda sección */}
        <div className="w-full flex-col flex gap-1 items-center lg:items-start  justify-center pb-5">
          <div className="h-5 w-56 bg-gray-300 rounded-md animate-pulse" />
          <div className="h-5 w-56 bg-gray-300 rounded-md animate-pulse" />
          <div className="h-5 w-56 bg-gray-300 rounded-md animate-pulse" />
        </div>
        {/* Tercera sección */}
      </div>
    </div>
  );
};

export default CardSkeleton;
