import React from "react"

type Props = {
  linkText?: string
}

const LinkParagraph = ({ linkText }: Props) => {
  return (
    <p
      className={`box-border text-sm font-normal text-[black] first:mt-0 mt-[16.00px]`}
    >
      {linkText}
    </p>
  )
}

export default LinkParagraph
