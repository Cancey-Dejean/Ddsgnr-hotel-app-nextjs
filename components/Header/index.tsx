import { sanityFetch } from "@/sanity/lib/fetch"
import HeaderContent from "./HeaderContent"
import { SanityDocument } from "next-sanity"
import { MAIN_NAV_QUERY } from "@/sanity/lib/queries"
import { menuListFake } from "@/constants/fakeData"

const Header = async () => {
  const navigation = await sanityFetch<SanityDocument>({
    query: MAIN_NAV_QUERY,
  })

  console.log(navigation)

  return <HeaderContent menuListHeader={menuListFake} />
}

export default Header
