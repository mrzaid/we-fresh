import React, { FC } from "react";

interface InputProps {
  placeholder: string;
  type: string;
  id: string;
  className: string;
  name: string;
  value: any;
  onChange: (e: any) => void;
}

const Input: FC<InputProps> = ({
  placeholder,
  type = "text",
  name = "phone",
  id,
  className,
  value,
  onChange,
}) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
