import React from "react";

interface Props {
  children?: React.ReactNode; //html pass hogi

  // onClick: React.MouseEventHandler<HTMLButtonElement>;
}
//component ki type laga rahay hou tou react.fc lagayengay
const Button: React.FC<Props> = ({ children }) => {
  return (
    <button className="bg-orangee w-[100px] md:w-40 rounded h-8 hover:bg-orange-300 transition-all duration-400	 ease-in-out">
      {children}
    </button>
  );
};

export default Button;
