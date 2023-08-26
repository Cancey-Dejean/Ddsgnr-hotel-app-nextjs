import { ReactNode } from "react";
import Link from "next/link";
import Paragraph from "./Paragraph";
import TextLink from "./TextLink";

const LinkList = ({
  links,
  title = "Menu",
}: {
  title: string;
  links: {
    label: string;
    url: string;
    icon?: ReactNode;
    className?: string;
  }[];
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Paragraph className="font-semibold">{title}</Paragraph>
      <ul className="flex flex-col">
        {links.map((link, index) => (
          <li key={index}>
            <TextLink
              label={link.label}
              url={link.url}
              icon={link.icon}
              className="py-2"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkList;
