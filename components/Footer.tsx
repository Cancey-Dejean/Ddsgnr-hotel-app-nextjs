import { menuList, socialList } from "@/constants";
import LinkList from "./LinkList";
import Logo from "./Logo";
import NewsletterSection from "./NewsletterSection";
import Wrapper from "./Wrapper";
import Paragraph from "./Paragraph";
import TextLink from "./TextLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="py-16">
      <Wrapper>
        <div className="flex border border-black p-12">
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
            <div className="min-w-[170px]">
              <LinkList title="Menu" links={menuList} />
            </div>

            <div className="min-w-[170px]">
              <LinkList title="Follow Us" links={socialList} />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-6">
          <Paragraph className="text-sm">
            {currentYear} Ddsgnr. All right reserved.
          </Paragraph>

          <div className="mt-8 flex items-center gap-6">
            <TextLink url="#" label="Privacy Policy" />
            <TextLink url="#" label="Terms of Service" />
            <TextLink url="#" label="Cookies Settings" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Footer;
