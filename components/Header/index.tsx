import { sanityFetch } from "@/sanity/lib/fetch"
import HeaderContent from "./HeaderContent"
import { SanityDocument } from "next-sanity"
import { HEADER_FOOTER_QUERY, MAIN_NAV_QUERY } from "@/sanity/lib/queries"
import { menuListFake } from "@/constants/fakeData"

const Header = async () => {
  const navigation = await sanityFetch<SanityDocument>({
    query: HEADER_FOOTER_QUERY,
  })

  const menuList = navigation.header.menuList
  const navCTA = navigation.header.ctaButtons
  const logo = navigation.header.logoImage

  return (
    <HeaderContent
      menuList={menuList}
      navCTA={navCTA}
      logoSrc={logo.brandLogo}
      logoAlt={logo.brandLogoAlt}
      logoText={logo.logoText}
    />
  )
}

export default Header
