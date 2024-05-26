import { sanityFetch } from "@/sanity/lib/fetch"
import HeaderContent from "./HeaderContent"
import { SanityDocument } from "next-sanity"
import { MAIN_NAV_QUERY } from "@/sanity/lib/queries"
import { menuListFake } from "@/constants/fakeData"

const Header = async () => {
  const navigation = await sanityFetch<SanityDocument>({
    query: MAIN_NAV_QUERY,
  })

  const menuList = navigation.menuList
  const navCTA = navigation.ctaButtons

  console.log(navigation)
  console.log(navCTA)

  return (
    <HeaderContent
      menuList={menuList}
      navCTA={navCTA}
      logoSrc={navigation.logo}
      logoText={navigation.text}
    />
  )
}

export default Header
