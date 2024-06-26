"use client"
import Wrapper from "../Wrapper"
import { usePathname } from "next/navigation"
import Logo from "../Logo"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

import MobileMenu from "./MobileMenu"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Link } from "next-view-transitions"
import { motion } from "framer-motion"

import { HeaderContentProps } from "@/types/HeaderContent"

export default function HeaderContent({
  menuList,
  navCTA,
  logoSrc,
  logoAlt,
  logoText,
}: HeaderContentProps) {
  const path = usePathname()
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
    document.body.classList.toggle("overflow-hidden")
  }

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white py-4">
      <Wrapper className="flex items-center justify-between gap-8">
        <Logo
          logoSrc={logoSrc}
          url="/"
          logoText={logoText}
          imgAlt={logoAlt || "No Logo Alt"}
          className={cn(showMenu && "z-[51]")}
        />

        {menuList && (
          <div className="hidden md:flex md:grow justify-end">
            <nav role="navigation">
              <ul className={cn("flex items-center  gap-8 ")}>
                {menuList.map((item) => (
                  <li className="" key={item._key}>
                    <Link href={item.url || "/"} className="relative py-1">
                      {item.url === path ? (
                        <motion.span
                          layoutId="underline"
                          className="absolute left-0 top-full block h-px w-full bg-black"
                        />
                      ) : null}
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}

        {navCTA && (
          <div className="hidden gap-4 md:flex md:items-center">
            {navCTA.slice(0, 2).map(({ variant, label }) => (
              <Button key={label} asChild variant={variant}>
                <Link href="/">{label}</Link>
              </Button>
            ))}
          </div>
        )}

        <button
          type="button"
          className="md:hidden relative z-[51]"
          onClick={toggleMenu}
        >
          {showMenu ? (
            <XMarkIcon className="h-6 w-6 text-black" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-black" />
          )}
        </button>
      </Wrapper>

      <MobileMenu
        menuList={menuList}
        navCTA={navCTA}
        toggleMenu={toggleMenu}
        showMenu={showMenu}
      />
    </header>
  )
}
