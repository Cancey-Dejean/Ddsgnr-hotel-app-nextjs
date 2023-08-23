import React from "react"
import SocialCard from "./SocialCard"

type Props = {
  socialCardsData?: {}[]
}

const SocialCardList = ({ socialCardsData = [] }: Props) => {
  return (
    <div
      className={`flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto box-border mt-6 [&>*:nth-child(2)]:items-start`}
    >
      {socialCardsData.map((data, index) => {
        return <SocialCard {...data} key={index} />
      })}
    </div>
  )
}

export default SocialCardList
