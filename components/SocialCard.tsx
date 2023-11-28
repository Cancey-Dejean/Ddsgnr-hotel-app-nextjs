import React from "react"

type Props = {
  dynamicLinkText?: string
  socialMediaPlatform1?: string
}

const SocialCard = ({ dynamicLinkText, socialMediaPlatform1 }: Props) => {
  return (
    <div
      className={`mt-[7.00px]  flex shrink-0 grow-0 basis-auto flex-row items-center justify-between gap-2 pr-[3.00px] first:mt-0`}
    >
      <p
        className={` shrink-0 grow-0 basis-auto text-sm font-normal text-black`}
      >
        {dynamicLinkText}
      </p>
      <div
        className={` flex shrink-0 grow-0 basis-auto flex-row items-center justify-start`}
      >
        <p
          className={`ml-3  shrink-0 grow-0 basis-auto text-sm font-normal text-black`}
        >
          {socialMediaPlatform1}
        </p>
      </div>
    </div>
  )
}

export default SocialCard
