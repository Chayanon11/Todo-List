"use client";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";

import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
}

const Button = ({ type, text, onClick, actionButton }: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          actionButton && "bg-teal-700 rounded-full p-2 text-white",
          "bg-teal-700 px-2 text-white"
        )}>
        {text}
      </button>
    </>
  );
};

export default Button;
