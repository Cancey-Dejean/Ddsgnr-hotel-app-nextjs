import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

type ButtonLinkProps = {
  /**
   * Description goes here
   */
  variant?:
    | "btn-primary"
    | "btn-inverted"
    | "btn-border-dark"
    | "btn-border-none"
    | "btn-border-light";
    /**
   * Description goes here
   */
  size?: "btn-size-base" | "btn-size-small";
  /**
   * Description goes here
   */
  label?: string;
  /**
   * Description goes here
   */
  url?: string;
  /**
   * Description goes here
   */
  className?: string;
  /**
   * Description goes here
   */
  linkable?: boolean;
  /**
   * Description goes here
   */
  onClick?: () => void;
  /**
   * Description goes here
   */
  icon?: boolean;
}  & AnchorHTMLAttributes<HTMLAnchorElement> &
ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonLink = ({
  variant = "btn-primary",
  size = "btn-size-base",
  label = "Label",
  url = "#",
  className = "",
  linkable = true,
  onClick,
  icon = false,
  ...props
}: ButtonLinkProps ) => {
  const iconContent = icon && <ChevronRightIcon className="h-5 w-5" />;

  return linkable ? (
    <Link href={url} className={twMerge("btn", variant, size, className)} {...props}>
      {label}
      {iconContent}
    </Link>
  ) : (
    <button
      {...props}
      onClick={onClick}
      className={twMerge("btn", variant, size, className)}
    >
      {label}
      {iconContent}
    </button>
  );
};

export default ButtonLink;
