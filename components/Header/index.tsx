"use client"
import NavigationMenu from "./NavigationMenu"
import Wrapper from "../Wrapper"
import { usePathname } from "next/navigation"
import Logo from "../Logo"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import ButtonLink from "../ButtonLink"
import {
  headerButtonsFake,
  menuListFake,
  CTAButtonTypes,
} from "../../constants/fakeData"
import MobileMenu from "./MobileMenu"
import { useState } from "react"
import { cn } from "@/lib/utils"

const Header = ({
  menuListHeader = menuListFake,
  btnData = headerButtonsFake,
}) => {
  const path = usePathname()
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
    document.body.classList.toggle("overflow-hidden")
  }

  return (
    <>
      <header className="sticky top-0 left-0 w-full z-50 bg-white py-4">
        <Wrapper className="flex items-center justify-between gap-8">
          <div className={cn(showMenu && "z-[51]")}>
            <Logo
              imgSrc="/images/logo.svg"
              url="/"
              text="Ddsgnr"
              imgAlt="Ddsgnr Logo"
            />
          </div>

          <div className="hidden md:flex md:flex-1 md:justify-end">
            <NavigationMenu menuList={menuListHeader} path={path} />
          </div>

          <div className="hidden gap-4 md:flex md:items-center">
            {btnData.map((button, i) => (
              <ButtonLink
                key={i}
                label={button.label}
                url={button.url}
                variant={button.variant}
              />
            ))}
          </div>

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
          btnData={btnData}
          menuListData={menuListHeader}
          showMenu={showMenu}
        />
      </header>
    </>
  )
}

export default Header
