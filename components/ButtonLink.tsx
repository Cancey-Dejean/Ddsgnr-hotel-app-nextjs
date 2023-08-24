import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  variant?:
    | "btn-primary"
    | "btn-inverted"
    | "btn-border-dark"
    | "btn-border-light";
  size?: "btn-size-base" | "btn-size-small" | "btn-size-large";
  children?: ReactNode;
  url?: string;
  className?: string;
  linkable?: boolean;
  onClick?: () => void;
  btnType?: "button" | "submit" | "reset";
};

const ButtonLink = ({
  variant = "btn-primary",
  size = "btn-size-base",
  children,
  url = "#",
  className = "",
  linkable,
  onClick,
  btnType = "button",
  ...props
}: ButtonProps) => {
  return linkable ? (
    <Link
      href={url}
      className={twMerge("btn", variant, size, className)}
      {...props}
    >
      {children || <span>Linkable Button</span>}
    </Link>
  ) : (
    <button
      type={btnType}
      onClick={onClick}
      className={twMerge("btn", variant, size, className)}
      {...props}
    >
      {children || <span>Button</span>}
    </button>
  );
};

export default ButtonLink;
