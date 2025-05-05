import React from "react";

interface ButtonProps {
  title: string;
  id: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerClass?: string;
}

const Button = ({ title, id, rightIcon, leftIcon, containerClass }: ButtonProps) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer rounded-full bg-violet-50 px-7 py-3 font-robert-medium text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general uppercase text-xs">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
