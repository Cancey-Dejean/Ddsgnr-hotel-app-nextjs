import { TextField } from "@mui/material";
import ButtonLink from "./Button";
import Paragraph from "./Paragraph";
import Link from "next/link";

const NewsletterSection = () => {
  return (
    <div className="flex flex-col justify-stretch gap-4">
      <Paragraph>
        Join our newsletter to stay up to date on features and releases.
      </Paragraph>

      <div className="flex flex-col items-stretch gap-4 sm:flex-row">
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
          btnType="submit"
        />
      </div>

      <Paragraph className="w-full text-xs lg:max-w-[481px]">
        By subscribing you agree to with our {""}
        <Link href="#" className="underline">
          Privacy Policy
        </Link>{" "}
        and provide consent to receive updates from our company.
      </Paragraph>
    </div>
  );
};

export default NewsletterSection;
