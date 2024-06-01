import { legalLinks, menuListData, socialList } from "../../constants"
import LinkList from "../LinkList"
import Logo from "../Logo"
import NewsletterSection from "../NewsletterSection"
import Wrapper from "../Wrapper"
import Paragraph from "../Paragraph"
import TextLink from "../TextLink"
import { sanityFetch } from "@/sanity/lib/fetch"
import { FOOTER_QUERY, HEADER_FOOTER_QUERY } from "@/sanity/lib/queries"
import { SanityDocument } from "next-sanity"
import { cn } from "@/lib/utils"
import { Link } from "next-view-transitions"
import { HeaderContentProps } from "@/types/HeaderContent"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6"

const Footer = async ({ menuList }: { menuList: HeaderContentProps }) => {
  const data = await sanityFetch<SanityDocument>({
    query: HEADER_FOOTER_QUERY,
  })

  const navMenu = data.header
  const footer = data.footer
  const logo = data.footer.logoImage
  // const navCTA = navigation.ctaButtons

  // console.log(navigation.logoImage)
  console.log(footer)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16" role="contentinfo">
      <Wrapper>
        <div className="flex flex-col gap-12 border border-black p-8 lg:flex-row lg:items-start lg:p-12">
          <div className="flex flex-col gap-6">
            <Logo
              logoSrc={logo.brandLogo}
              url="/"
              imgAlt={logo.brandLogoAlt}
              logoText={logo.logoText}
            />
            <NewsletterSection />
          </div>

          <div className="flex flex-1 items-start justify-end gap-10">
            {navMenu.menuList && (
              <div className="max-w-full flex-1 lg:max-w-[170px]">
                <LinkList title="Menu" links={navMenu.menuList} />
              </div>
            )}

            <div className="max-w-full flex-1 lg:max-w-[170px]">
              <div className="flex flex-col gap-4">
                <Paragraph className="font-semibold">Follow Us</Paragraph>
                <ul className="flex flex-col">
                  <li>
                    <TextLink
                      url={footer.instagram}
                      label="Facebook"
                      icon={<FaFacebookF />}
                      className="py-2"
                    />
                  </li>

                  <li>
                    <TextLink
                      url={footer.twitter}
                      label="Twitter"
                      icon={<FaTwitter />}
                      className="py-2"
                    />
                  </li>

                  <li>
                    <TextLink
                      url={footer.instagram}
                      label="Instagram"
                      icon={<FaInstagram />}
                      className="py-2"
                    />
                  </li>

                  <li>
                    {" "}
                    <TextLink
                      url={footer.linkedIn}
                      label="LinkedIn"
                      icon={<FaLinkedin />}
                      className="py-2"
                    />
                  </li>
                </ul>
              </div>
              {/* <LinkList title="Follow Us" links={socialList} /> */}
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
