import Paragraph from "../Paragraph"
import TextLink from "../TextLink"
import { ReactNode } from "react"

const LinkList = ({
  links = [],
  title = "Menu",
}: {
  /**
   * Description goes here
   */
  title: string
  /**
   * Description goes here
   */
  links: { label: string; url: string; icon?: ReactNode }[]
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
  )
}

export default LinkList
