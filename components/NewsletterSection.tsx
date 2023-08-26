import React from "react";
import SocialCardList from "./SocialCardList";
import LinkList from "./LinkList";
import { Button, TextField } from "@mui/material";

type Props = {
  linkOptions?: {}[];
  socialCardsData?: {}[];
};

const NewsletterSection = ({ linkOptions, socialCardsData }: Props) => {
  return (
    <div className="flex border border-black">
      <div className="flex flex-col">
        <div className="flex items-start justify-start">
          <div className="">Image</div>
          <p
            className={`ml-[7px]  shrink-0 grow-0 basis-auto text-[25px] font-bold text-[black] [font-family:Inter]`}
          >
            Ddsgnr
          </p>
        </div>

        <p className="text-base font-normal text-black">
          Join our newsletter to stay up to date on features and releases.
        </p>
        <div className="flex items-end justify-start">
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue="Normal"
            variant="filled"
            fullWidth
          />

          {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
          {/* <Button className="  cursor-pointer rounded-[5px] border border-solid border-[black] bg-transparent text-base font-normal text-[black]">
            Subscribe
          </Button> */}
        </div>
        <p
          className={`max-w-[481px] shrink-0 grow-0  basis-auto text-xs font-normal leading-[128%] text-[black]`}
        >
          By subscribing you agree to with our
          <span className={`text-xs font-normal leading-[128%] underline`}>
            Privacy Policy
          </span>
          and provide consent to receive updates from our company.
        </p>
      </div>
      <div className={` shrink-0 grow-0 basis-auto`}>
        <p className={`  text-base font-semibold text-[black]`}>Column One</p>
        <LinkList linkOptions={linkOptions} />
      </div>
      <div
        className={` flex w-[309px] shrink-0 grow basis-[309px] flex-col items-stretch justify-start`}
      >
        <div className={` flex items-stretch justify-start`}>
          <p
            className={` w-[62.82%] shrink-0 grow-0 basis-auto  text-base font-semibold text-[black]`}
          >
            Column Two
          </p>
          <p
            className={`  w-[37.18%] shrink-0 grow-0 basis-auto px-[15px] text-base font-semibold text-[black]`}
          >
            Follow Us
          </p>
        </div>
        <SocialCardList socialCardsData={socialCardsData} />
        <p
          className={`mt-1  shrink-0 grow-0  basis-auto text-sm font-normal text-[black]`}
        >
          Link Ten
        </p>
      </div>
    </div>
  );
};

export default NewsletterSection;
