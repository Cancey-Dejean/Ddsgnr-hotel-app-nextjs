"use client"
import NavigationMenu from "../NavigationMenu"
import Wrapper from "../Wrapper"
import { usePathname } from "next/navigation"
import ButtonGroup from "../ButtonLink/ButtonGroup"
import Logo from "../Logo"
import { headerButtonsData, menuListData } from "../../constants"
import { Bars3Icon } from "@heroicons/react/24/outline"

const Header = ({
  menuListHeader = [],
  headerButtons = [],
}: {
  /**
   * Description goes here
   */
  menuListHeader: (typeof menuListData)[number][]
  /**
   * Description goes here
   */
  headerButtons?: (typeof headerButtonsData)[number][]
}) => {
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
          <NavigationMenu menuList={menuListHeader} path={path} />
        </div>

        <div className="hidden gap-4 md:flex md:items-center">
          <ButtonGroup buttons={headerButtons} />
        </div>

        <button type="button" className="md:hidden">
          <Bars3Icon className="h-6 w-6 text-black" />
        </button>
      </Wrapper>
    </header>
  )
}

export default Header