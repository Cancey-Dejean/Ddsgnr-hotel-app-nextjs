"use client"
import { Link } from "next-view-transitions"
import { motion } from "framer-motion"

export type MenuListItem = {
  label: string
  url: string
}

type NavigationMenuProps = {
  path: string
  menuList: MenuListItem[]
}

const NavigationMenu = ({ menuList = [], path }: NavigationMenuProps) => {
  return (
    <nav role="navigation">
      <ul className="flex items-center justify-start gap-8">
        {menuList.map((item, index) => (
          <li key={index} className="">
            <Link href={item.url} className="relative py-1">
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
  )
}

export default NavigationMenu
