import React from "react";

interface Props {
  //   border: string;
  //   color: string;
  children?: React.ReactNode; //html pass hogi
  //   height: string;
  onClick: () => void;
  //   radius: string;
  //   width: string;
}
//component ki type laga rahay hou tou react.fc lagayengay
const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      className="bg-orangee w-[100px] md:w-40 rounded h-8 hover:bg-orange-300 transition-all duration-400	 ease-in-out"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
