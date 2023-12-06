"use client"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

const PageWrapper = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <main className={twMerge("flex-1", className)} role="main">
      {children}
    </main>
  )
}

export default PageWrapper
