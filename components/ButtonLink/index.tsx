"use client"
import { twMerge } from "tailwind-merge"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { Button, Link } from "react-aria-components"

type ButtonProps = {
  /**
   * Description goes here
   */
  variant?:
    | "btn-primary"
    | "btn-inverted"
    | "btn-border-dark"
    | "btn-border-none"
    | "btn-border-light"
  /**
   * Description goes here
   */
  size?: "btn-size-base" | "btn-size-small"
  /**
   * Description goes here
   */
  label?: string
  /**
   * Description goes here
   */
  url?: string
  /**
   * Description goes here
   */
  className?: string
  /**
   * Description goes here
   */
  linkable?: boolean
  /**
   * Description goes here
   */
  type?: "button" | "reset" | "submit" | undefined
  /**
   * Description goes here
   */
  onClick?: () => void
  /**
   * Description goes here
   */
  icon?: boolean
}

const ButtonLink = ({
  variant = "btn-primary",
  size = "btn-size-base",
  label,
  url = "/",
  className = "",
  linkable = true,
  type = "button",
  onClick,
  icon = false,
}: ButtonProps) => {
  const iconContent = icon && <ChevronRightIcon className="h-5 w-5" />

  return linkable ? (
    <Link href={url} className={twMerge("btn", variant, size, className)}>
      {label || "Link"}
      {iconContent}
    </Link>
  ) : (
    <Button
      onPress={onClick}
      className={twMerge("btn", variant, size, className)}
      type={type}
    >
      {label || "Button"}
      {iconContent}
    </Button>
  )
}

export default ButtonLink
