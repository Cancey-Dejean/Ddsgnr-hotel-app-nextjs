import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Paragraph = ({
  children = <span>Paragraph goes here</span>,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p className={twMerge(" text-base", className)} tabIndex={0}>
      {children}
    </p>
  );
};

export default Paragraph;
