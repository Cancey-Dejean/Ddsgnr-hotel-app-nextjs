import React from "react";
import SocialCard from "./SocialCard";

type Props = {
  socialCardsData?: {}[];
};

const SocialCardList = ({ socialCardsData = [] }: Props) => {
  return (
    <div
      className={`mt-6  flex shrink-0 grow-0 basis-auto flex-col items-stretch justify-start [&>*:nth-child(2)]:items-start`}
    >
      {socialCardsData.map((data, index) => {
        return <SocialCard {...data} key={index} />;
      })}
    </div>
  );
};

export default SocialCardList;
