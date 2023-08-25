import React from "react";
import SocialCardList from "./SocialCardList";
import LinkList from "./LinkList";
import { Button, TextField } from "@mui/material";

type Props = {
  linkOptions?: {}[];
  socialCardsData?: {}[];
};

const NewsletterSection = ({ linkOptions, socialCardsData }: Props) => {
  return (
    <div
      className={` flex shrink-0 grow-0 basis-auto flex-row items-start justify-start gap-[127px] border border-solid border-[black] px-[47px] pb-14 pt-12`}
    >
      <div
        className={` flex shrink-0 grow basis-[502px] flex-col items-stretch justify-start gap-[23px] pb-[14.5px]`}
      >
        <div
          className={` flex shrink-0 grow-0 basis-auto flex-row items-start justify-start`}
        >
          <div className={` shrink-0 grow-0 basis-auto`}>
            <img
              className={` block h-[31.5px] w-[34px] max-w-[initial] content-[url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%27111.1061%20111.3352%2033.9735%2031.5497%27%20fill%3D%27none%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20id%3D%2764612325%27%20x%3D%270%27%20y%3D%270%27%3E%3Cg%20id%3D%27Footer%20%2F%209%20%2F%27%3E%3Cg%20id%3D%27Card%27%3E%3Cg%20id%3D%27Newsletter%27%3E%3Cg%20id%3D%27Ddsgnr%20Themes%27%3E%3Cg%20id%3D%27Frame%201%27%3E%3Cpath%20id%3D%27Union%27%20d%3D%27M127.793%20115.786V115.787C127.776%20115.816%20124.295%20121.82%20119.951%20129.15C115.595%20136.498%20112%20142.381%20112%20142.381L124.331%20142.327L124.332%20142.327L124.33%20142.337C130.317%20142.221%20135.718%20138.284%20137.312%20132.336C137.81%20130.477%20137.885%20128.605%20137.596%20126.816C136.804%20121.549%20132.915%20117.265%20127.793%20115.786Z%27%20fill%3D%27black%27%2F%3E%3Cpath%20id%3D%27Union\_2%27%20d%3D%27M134.608%20112V112.001C134.591%20112.03%20131.11%20118.034%20126.766%20125.364C122.41%20132.712%20118.815%20138.595%20118.815%20138.595L131.146%20138.541L131.147%20138.541L131.145%20138.551C137.132%20138.435%20142.533%20134.498%20144.127%20128.55C144.625%20126.691%20144.7%20124.819%20144.411%20123.03C143.619%20117.763%20139.73%20113.479%20134.608%20112Z%27%20fill%3D%27%2310F2C5%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cdefs%2F%3E%3C%2Fsvg%3E')]`}
            />
          </div>
          <p
            className={`ml-[7px]  shrink-0 grow-0 basis-auto text-[25px] font-bold text-[black] [font-family:Inter]`}
          >
            Ddsgnr
          </p>
        </div>
        <p
          className={` shrink-0 grow-0 basis-auto  text-base font-normal text-[black]`}
        >
          Join our newsletter to stay up to date on features and releases.
        </p>
        <div
          className={` flex shrink-0 grow-0 basis-auto flex-row items-end justify-start`}
        >
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue="Normal"
            variant="filled"
            fullWidth
          />

          {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
          <Button className="ml-3.5  block h-[50px] w-[121px] shrink-0 grow-0 basis-auto  cursor-pointer rounded-[5px] border border-solid border-[black] bg-transparent text-base font-normal text-[black]">
            Subscribe
          </Button>
        </div>
        <p
          className={`-mt-2  max-w-[481px] shrink-0 grow-0  basis-auto text-xs font-normal leading-[128%] text-[black]`}
        >
          By subscribing you agree to with our
          <span
            className={`text-xs font-normal leading-[128%] underline [font-family:Roboto]`}
          >
            Privacy Policy
          </span>
          and provide consent to receive updates from our company.
        </p>
      </div>
      <div className={` shrink-0 grow-0 basis-auto`}>
        <p className={`  text-base font-semibold text-[black]`}>Column One</p>
        <LinkList linkOptions={linkOptions} />
      </div>
      <div
        className={` flex w-[309px] shrink-0 grow basis-[309px] flex-col items-stretch justify-start`}
      >
        <div
          className={` flex shrink-0 grow-0 basis-auto flex-row items-stretch justify-start`}
        >
          <p
            className={` w-[62.82%] shrink-0 grow-0 basis-auto  text-base font-semibold text-[black]`}
          >
            Column Two
          </p>
          <p
            className={`  w-[37.18%] shrink-0 grow-0 basis-auto px-[15px] text-base font-semibold text-[black]`}
          >
            Follow Us
          </p>
        </div>
        <SocialCardList socialCardsData={socialCardsData} />
        <p
          className={`mt-1  shrink-0 grow-0  basis-auto text-sm font-normal text-[black]`}
        >
          Link Ten
        </p>
      </div>
    </div>
  );
};

export default NewsletterSection;
