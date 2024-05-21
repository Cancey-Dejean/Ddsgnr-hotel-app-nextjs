import { menuListData } from "@/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"
import ButtonLink from "../ButtonLink"
import { CTAButtonTypes } from "@/constants/fakeData"
import { MenuListItem } from "./NavigationMenu"

export default function MobileMenu({
  showMenu,
  btnData,
  menuListData,
}: {
  showMenu: boolean
  btnData: CTAButtonTypes
  menuListData: MenuListItem[]
}) {
  return (
    <ul
      className={cn(
        "bg-white flex justify-center flex-col duration-300 absolute px-8 right-0 z-50 h-screen w-screen md:hidden",
        showMenu ? "top-0" : "-top-[100vh]"
      )}
    >
      {menuListData.map(({ label, url }, index) => (
        <li key={index} className={`${showMenu ? "opacity-100" : "opacity-0"}`}>
          <Link href={url} className="relative p-5 block text-center">
            {label}
          </Link>
        </li>
      ))}

      <div
        className={`mt-5 flex flex-col gap-5 ${showMenu ? "opacity-100" : "opacity-0"}`}
      >
        {btnData.map(({ label, url, variant }, i) => (
          <ButtonLink label={label} url={url} variant={variant} />
        ))}
      </div>
    </ul>
  )
}