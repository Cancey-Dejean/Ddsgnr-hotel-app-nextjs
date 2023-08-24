import React from "react";

type Props = {
  linkText?: string;
};

const LinkParagraph = ({ linkText }: Props) => {
  return (
    <p
      className={`mt-[16.00px] box-border text-sm font-normal text-[black] first:mt-0`}
    >
      {linkText}
    </p>
  );
};

export default LinkParagraph;
