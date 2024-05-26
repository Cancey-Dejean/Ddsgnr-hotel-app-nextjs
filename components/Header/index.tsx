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

  console.log(menuList)

  return (
    <div>
      <HeaderContent menuList={menuList} />
    </div>
  )
}

export default Header
