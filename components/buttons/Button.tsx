import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Button: React.FC<{
  variant: string;
  children: string;
}> = ({ variant, children }) => {
  switch (variant) {
    case "primary":
      return (
        <button className="font-bold bg-lamb border border-lamb py-4 px-8 uppercase tracking-widest text-xs text-white hover:bg-light-lamb hover:border-light-lamb">
          {children}
        </button>
      );
    case "secondary":
      return (
        <button className="font-bold bg-transparent border border-black dark:border-white dark:text-white py-4 px-8 uppercase text-black tracking-widest text-xs hover:bg-black hover:border-black">
          {children}
        </button>
      );
    case "tertiary":
      return (
        <button className="font-bold flex gap-1 justify-center items-center bg-transparent text-dark-gray dark:text-white uppercase tracking-widest text-xs hover:text-lamb animate-pulse">
          {children}
          <span className="text-lamb">
            <FontAwesomeIcon
              icon={faChevronRight}
              height={10}
              className="text-lamb"
            />
          </span>
        </button>
      );
    default:
      return <button>{children}</button>;
  }
};

export default Button;
