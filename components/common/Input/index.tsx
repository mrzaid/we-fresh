import React, { FC } from "react";

interface InputProps {
  placeholder: string;
  type: string;
  id: string;
  className: string;
  name: string;
}

const Input: FC<InputProps> = ({
  placeholder,
  type = "text",
  name = "phone",
  id,
  className,
}) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      id={id}
      name={name}
    />
  );
};

export default Input;
