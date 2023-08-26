import { TextField } from "@mui/material";
import ButtonLink from "./ButtonLink";
import Paragraph from "./Paragraph";
import Link from "next/link";

const NewsletterSection = () => {
  return (
    <div className="flex flex-col justify-stretch gap-4">
      <Paragraph>
        Join our newsletter to stay up to date on features and releases.
      </Paragraph>

      <div className="flex items-stretch gap-4">
        <TextField
          hiddenLabel
          id="subscribe"
          fullWidth
          placeholder="Enter your email"
          type="email"
          className="newsletter-btn"
        />

        <ButtonLink
          className=""
          variant="btn-border-dark"
          label="Subscribe"
          type="submit"
        />
      </div>

      <Paragraph className="w-full max-w-[481px] text-xs">
        By subscribing you agree to with our {""}
        <Link href="#" className="underline">
          Privacy Policy
        </Link>{" "}
        {""}
        and provide consent to receive updates from our company.
      </Paragraph>
    </div>
    // <div className="flex border border-black p-12">
    //   <div className="flex flex-col gap-6">
    //     <Logo
    //       imgSrc="/images/logo.svg"
    //       url="/"
    //       text="Ddsgnr"
    //       imgAlt="Ddsgnr Logo"
    //     />

    //     <Paragraph>
    //       Join our newsletter to stay up to date on features and releases.
    //     </Paragraph>

    //     <div className="flex flex-col justify-stretch gap-4">
    //       <div className="flex items-stretch gap-4">
    //         <TextField
    //           hiddenLabel
    //           id="subscribe"
    //           fullWidth
    //           placeholder="Enter your email"
    //           type="email"
    //           className="newsletter-btn"
    //         />

    //         <ButtonLink
    //           className=""
    //           variant="btn-border-dark"
    //           label="Subscribe"
    //           type="submit"
    //         />
    //       </div>

    //       <Paragraph className="w-full max-w-[481px] text-xs">
    //         By subscribing you agree to with our {""}
    //         <Link href="#" className="underline">
    //           Privacy Policy
    //         </Link>{" "}
    //         {""}
    //         and provide consent to receive updates from our company.
    //       </Paragraph>
    //     </div>
    //   </div>

    //   <div className="flex flex-1 items-start justify-end gap-10">
    //     <div className="min-w-[170px]">
    //       <LinkList title="Menu" links={menuList} />
    //     </div>

    //     <div className="min-w-[170px]">
    //       <LinkList title="Follow Us" links={socialList} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default NewsletterSection;
