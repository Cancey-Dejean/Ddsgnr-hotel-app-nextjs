import { Button } from "@mui/material";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import ButtonLink from "./ButtonLink";

type ListItem = {
  label: string;
  url: string;
};

type NavigationMenuProps = {
  menuList: ListItem[];
};

const NavigationMenu = ({ menuList = [] }: NavigationMenuProps) => {
  return (
    <ul className="flex items-center justify-start gap-8">
      {menuList.map((item, index) => (
        <li key={index} className="">
          <Link href={item.url} className={twMerge()}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
