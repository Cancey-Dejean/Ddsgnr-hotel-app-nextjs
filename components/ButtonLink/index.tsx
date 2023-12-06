"use client"
import { twMerge } from "tailwind-merge"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { Button, Link } from "react-aria-components"

const ButtonLink = ({
  variant = "btn-primary",
  size = "btn-size-base",
  label,
  url = "",
  className = "",
  type = "button",
  onClick,
  icon = false,
}: {
  /**
   * Description goes here
   */
  variant?:
    | "btn-primary"
    | "btn-inverted"
    | "btn-border-dark"
    | "btn-border-none"
    | "btn-border-light"
    | string
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
  type?: "button" | "reset" | "submit" | undefined
  /**
   * Description goes here
   */
  onClick?: () => void
  /**
   * Description goes here
   */
  icon?: boolean
}) => {
  const iconContent = icon && <ChevronRightIcon className="h-5 w-5" />

  return url !== "" ? (
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
