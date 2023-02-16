import React from "react";

type IconProps = {
  height: number;
  width: number;
  color: string;
};
export const Minus: React.FC<IconProps> = ({
  height = 30,
  width = 30,
  color = "#000",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7 12h10"
      ></path>
    </svg>
  );
};
export const Plus: React.FC<IconProps> = ({
  height = 30,
  width = 30,
  color = "#000",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 7v10m-5-5h10"
      ></path>
    </svg>
  );
};

export const MenuIcon: React.FC<IconProps> = ({
  height = 12,
  width = 15,
  color = "#000",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 15 12"
    >
      <rect width="15" height="2" fill="#fff" rx="1"></rect>
      <rect width="15" height="2" y="5" fill="#fff" rx="1"></rect>
      <rect width="15" height="2" y="10" fill="#fff" rx="1"></rect>
    </svg>
  );
};
export const CloseIcon: React.FC<IconProps> = ({
  height = 16,
  width = 15,
  color = "#000",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 15 16"
    >
      <rect
        width="18"
        height="2"
        x="1.843"
        y="0.939"
        fill="#fff"
        rx="1"
        transform="rotate(45 1.843 .94)"
      ></rect>
      <rect
        width="18"
        height="2"
        x="14.571"
        y="2.354"
        fill="#fff"
        rx="1"
        transform="rotate(135 14.571 2.354)"
      ></rect>
    </svg>
  );
};
