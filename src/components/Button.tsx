import React from "react";
interface ButtonProps {
  type: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ type, children, onClick }: ButtonProps) => {
  return (
    <div>
      <button className={`btn btn-${type}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
