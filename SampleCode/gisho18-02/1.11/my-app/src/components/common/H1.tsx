import React from "react";

type H1Props = {
  children: React.ReactNode;
  className?: string;
};

const H1 = ({ children, className = "text-black-900" }: H1Props) => (
  <h1 className={`text-4xl font-bold text-center my-8 ${className}`}>
    {children}
  </h1>
);

export default H1;
