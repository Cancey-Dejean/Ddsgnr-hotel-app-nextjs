import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  children?: ReactNode;
};

const Wrapper = ({ className, children }: Props) => {
  return (
    <div className={twMerge("mx-auto w-full max-w-wrapper px-4", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
