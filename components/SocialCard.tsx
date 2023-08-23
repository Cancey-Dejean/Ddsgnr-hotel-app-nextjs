import React from "react"

type Props = {
  dynamicLinkText?: string
  socialMediaPlatform1?: string
}

const SocialCard = ({ dynamicLinkText, socialMediaPlatform1 }: Props) => {
  return (
    <div
      className={`flex justify-between flex-row gap-2 grow-0 shrink-0 basis-auto box-border first:mt-0 items-center mt-[7.00px] pr-[3.00px]`}
    >
      <p
        className={`grow-0 shrink-0 basis-auto box-border text-sm font-normal text-[black]`}
      >
        {dynamicLinkText}
      </p>
      <div
        className={`flex justify-start items-center flex-row grow-0 shrink-0 basis-auto box-border`}
      >
        SVG Icon
        {/* <SvgIcon1
          className="grow-0 shrink-0 basis-auto box-border w-6 h-6 flex"
          htmlOrSvgContent2={htmlOrSvgContent2}
        /> */}
        <p
          className={`grow-0 shrink-0 basis-auto box-border text-sm font-normal text-[black] ml-3`}
        >
          {socialMediaPlatform1}
        </p>
      </div>
    </div>
  )
}

export default SocialCard
