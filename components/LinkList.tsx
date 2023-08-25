import React from "react";
import LinkParagraph from "./LinkParagraph";

type Props = {
  linkOptions?: {}[];
};

const LinkList = ({ linkOptions = [] }: Props) => {
  return (
    <div className={`mt-6 pr-[23.5px]`}>
      {linkOptions.map((data, index) => {
        return <LinkParagraph {...data} key={index} />;
      })}
    </div>
  );
};

export default LinkList;
