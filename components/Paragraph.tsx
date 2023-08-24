import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <p className={twMerge(" text-lg", className)}>
      {children || <span>Paragraph goes Hero</span>}
    </p>
  );
};

export default Paragraph;
