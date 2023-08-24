import React from "react";

type Props = {
  dynamicLinkText?: string;
  socialMediaPlatform1?: string;
};

const SocialCard = ({ dynamicLinkText, socialMediaPlatform1 }: Props) => {
  return (
    <div
      className={`mt-[7.00px] box-border flex shrink-0 grow-0 basis-auto flex-row items-center justify-between gap-2 pr-[3.00px] first:mt-0`}
    >
      <p
        className={`box-border shrink-0 grow-0 basis-auto text-sm font-normal text-[black]`}
      >
        {dynamicLinkText}
      </p>
      <div
        className={`box-border flex shrink-0 grow-0 basis-auto flex-row items-center justify-start`}
      >
        SVG Icon
        {/* <SvgIcon1
          className="grow-0 shrink-0 basis-auto box-border w-6 h-6 flex"
          htmlOrSvgContent2={htmlOrSvgContent2}
        /> */}
        <p
          className={`ml-3 box-border shrink-0 grow-0 basis-auto text-sm font-normal text-[black]`}
        >
          {socialMediaPlatform1}
        </p>
      </div>
    </div>
  );
};

export default SocialCard;
