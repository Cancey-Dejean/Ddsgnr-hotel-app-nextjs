import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const SectionTitle = ({
  children,
  tag,
  className,
}: {
  children: ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  const TagName = tag || "h1";
  return (
    <TagName
      className={twMerge(
        "w-full text-[56px] font-bold leading-[67px]",
        className || "",
      )}
    >
      {children}
    </TagName>
  );
};

export default SectionTitle;
