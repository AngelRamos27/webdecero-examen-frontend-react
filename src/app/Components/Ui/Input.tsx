import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
  type: "text" | "password" | "email";
  colorText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, type, colorText, ...rest }, ref) => {
    return (
      <div className="flex w-full bg-primary">
        <div className="bg-[#32363c] h-auto w-14 rounded-sm rounded-r-none"></div>
        <input
          ref={ref}
          className={`${
            colorText === undefined ? "text-white" : colorText
          } rounded-sm rounded-l-none w-full h-auto bg-[#363b41] p-4`}
          placeholder={placeholder}
          type={type}
          name={name}
          {...rest}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
