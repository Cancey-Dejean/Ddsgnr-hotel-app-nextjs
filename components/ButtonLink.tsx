import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
// import { ChevronRight } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

type ButtonProps = {
  variant?:
    | "btn-primary"
    | "btn-inverted"
    | "btn-border-dark"
    | "btn-border-none"
    | "btn-border-light";
  size?: "btn-size-base" | "btn-size-small" | "btn-size-large";
  label?: string | ReactNode;
  url?: string;
  className?: string;
  linkable?: boolean;
  onClick?: () => void;
  icon?: boolean;
};

const ButtonLink = ({
  variant = "btn-primary",
  size = "btn-size-base",
  label = "Button Link",
  url = "#",
  className = "",
  linkable,
  onClick,
  icon = false,
  ...props
}: ButtonProps) => {
  return linkable ? (
    <Link
      href={url}
      className={twMerge("btn", variant, size, className)}
      {...props}
    >
      {label || <span>Link</span>}
      {icon && <ChevronRightIcon className="h-6 w-6" />}
    </Link>
  ) : (
    <button
      // type={btnType}
      onClick={onClick}
      className={twMerge("btn", variant, size, className)}
      {...props}
    >
      {label || <span>Button</span>}
      {icon && <ChevronRightIcon className="h-6 w-6" />}
    </button>
  );
};

export default ButtonLink;
