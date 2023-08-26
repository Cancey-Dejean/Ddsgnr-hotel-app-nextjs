import React, { ReactNode } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const TextLink = ({
  url = "#",
  label = "Link",
  icon,
  className = "",
}: {
  url: string;
  className?: string;
  label: string;
  icon?: ReactNode;
}) => {
  return (
    <Link href={url} className={twMerge("flex items-center gap-3", className)}>
      {icon ? <span>{icon}</span> : null}
      {label}
    </Link>
  );
};

export default TextLink;
