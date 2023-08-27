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
      <div className="h-12 w-12 [&_svg]:h-full [&_svg]:w-full" tabIndex={0}>
        {icon}
      </div>

      <h2 className="text-2xl font-bold text-black" tabIndex={0}>
        {title}
      </h2>

      {desc}
    </div>
  );
};

export default VacationFeatures;
