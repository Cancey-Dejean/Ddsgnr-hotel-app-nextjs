import { legalLinks, menuListData, socialList } from "../../constants"
import LinkList from "../LinkList"
import Logo from "../Logo"
import NewsletterSection from "../NewsletterSection"
import Wrapper from "../Wrapper"
import Paragraph from "../Paragraph"
import TextLink from "../TextLink"

const Footer = ({}) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16" role="contentinfo">
      <Wrapper>
        <div className="flex flex-col gap-12 border border-black p-8 lg:flex-row lg:items-start lg:p-12">
          <div className="flex flex-col gap-6">
            <Logo
              imgSrc="/images/logo.svg"
              url="/"
              text="Ddsgnr"
              imgAlt="Ddsgnr Logo"
            />
            <NewsletterSection />
          </div>

          <div className="flex flex-1 items-start justify-end gap-10">
            <div className="max-w-full flex-1 lg:max-w-[170px]">
              <LinkList title="Menu" links={menuListData} />
            </div>

            <div className="max-w-full flex-1 lg:max-w-[170px]">
              <LinkList title="Follow Us" links={socialList} />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <Paragraph className="text-sm">
            {currentYear} Ddsgnr. All right reserved.
          </Paragraph>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 [&_a]:text-sm">
            {legalLinks.map((link, index) => (
              <TextLink key={index} url={link.url} label={link.label} />
            ))}
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
