"use client"
import NavigationMenu from "../NavigationMenu"
import Wrapper from "../Wrapper"
import { usePathname } from "next/navigation"
import ButtonGroup from "../ButtonLink/ButtonGroup"
import Logo from "../Logo"
import { menuList } from "../../constants"
import { Bars3Icon } from "@heroicons/react/24/outline"

const Header = () => {
  const path = usePathname()
  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white py-4">
      <Wrapper className="flex items-center justify-between gap-8">
        <Logo
          imgSrc="/images/logo.svg"
          url="/"
          text="Ddsgnr"
          imgAlt="Ddsgnr Logo"
        />

        <div className="hidden md:flex md:flex-1 md:justify-end">
          <NavigationMenu menuList={menuList} path={path} />
        </div>

        <div className="hidden gap-4 md:flex md:items-center">
          <ButtonGroup
            buttons={[
              {
                url: "#",
                variant: "btn-border-dark",
                label: "Sign In",
                linkable: true,
                size: "btn-size-small",
              },
              {
                url: "#",
                variant: "btn-primary",
                label: "Get Started",
                linkable: true,
                size: "btn-size-small",
              },
            ]}
          />
        </div>

        <button type="button" className="md:hidden">
          <Bars3Icon className="h-6 w-6 text-black" />
        </button>
      </Wrapper>
    </header>
  )
}

export default Header
