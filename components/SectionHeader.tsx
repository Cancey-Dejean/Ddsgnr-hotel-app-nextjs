import React, { ReactNode } from "react";
import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";

const SectionHeader = ({
  topTitle = "Rooms",
  title = <SectionTitle tag="h1">Our Rooms</SectionTitle>,
  desc = (
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Paragraph>
  ),
}: {
  topTitle?: string;
  title?: ReactNode;
  desc?: ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      {topTitle === "Gallery" ? (
        <Paragraph className="mb-4 font-semibold">{topTitle}</Paragraph>
      ) : null}

      <div className="flex flex-col gap-6">
        {title}

        {desc}
      </div>
    </div>
  );
};

export default SectionHeader;
