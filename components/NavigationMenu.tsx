"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type ListItem = {
  label: string;
  url: string;
};

type NavigationMenuProps = {
  path: string;
  menuList: ListItem[];
};

const NavigationMenu = ({ menuList = [], path }: NavigationMenuProps) => {
  return (
    <ul className="flex items-center justify-start gap-8">
      {menuList.map((item, index) => (
        <li key={index} className="">
          <Link href={item.url} className="relative">
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
  );
};

export default NavigationMenu;
