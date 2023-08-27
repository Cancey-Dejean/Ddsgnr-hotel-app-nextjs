import { BsStarFill } from "react-icons/bs";
import VideoImage from "./VideoImage";
import { ReactNode } from "react";

const ReviewBlock = ({
  desc,
  reviewer,
  imgSrc,
  imgAlt,
}: {
  imgSrc?: string;
  imgAlt?: string;
  desc?: ReactNode;
  reviewer?: string;
}) => {
  return (
    <div className="flex flex-1 flex-col items-center gap-10 lg:flex-row lg:gap-20">
      <div className="flex-1">
        <VideoImage imgSrc={imgSrc} imgAlt={imgAlt} />
      </div>

      <div className="flex flex-1 flex-col gap-6 text-center lg:gap-8 lg:text-left">
        <div className="flex items-center justify-center gap-[4px] lg:justify-start">
          <BsStarFill tabIndex={0} />
          <BsStarFill tabIndex={0} />
          <BsStarFill tabIndex={0} />
          <BsStarFill tabIndex={0} />
          <BsStarFill tabIndex={0} />
        </div>

        {desc}

        <p className="font-medium" tabIndex={0}>
          {reviewer}
        </p>
      </div>
    </div>
  );
};

export default ReviewBlock;
