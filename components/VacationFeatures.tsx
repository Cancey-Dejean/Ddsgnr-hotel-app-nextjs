import React, { ReactNode } from "react";
import { BsFillBoxFill } from "react-icons/bs";

const VacationFeatures = ({
  icon = <BsFillBoxFill />,
  title = "Title",
  desc,
}: {
  icon?: ReactNode;
  title?: string;
  desc?: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-12 w-12 [&_svg]:h-full [&_svg]:w-full">{icon}</div>

      <h3 className={` text-2xl font-bold text-[black]`}>{title}</h3>

      {desc}
    </div>
  );
};

export default VacationFeatures;
