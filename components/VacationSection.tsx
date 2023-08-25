import React from "react";
import VacationFeatures from "./VacationFeatures";
import { Button } from "@mui/material";

type Props = {};

const VacationSection = (props: Props) => {
  return (
    <div
      className={` flex flex-row items-stretch justify-start bg-[white] px-16 py-28`}
    >
      <div
        className={` flex w-[51.83%] shrink-0 grow-0 basis-auto flex-col items-center justify-center bg-cover bg-no-repeat pb-[268px] pt-[269px] [background:url(https://s3-alpha-sig.figma.com/img/eac4/4920/61a6671ca9308b80cdc80491fc111dfc?Expires=1693785600&Signature=SUP0RFtpWLWMjQ~~zQJlwZxIZNSGyDxerY4qFCWPD6ApzwsskBiJodBFRi4XjHctAQ2vQ9m~-HmTB~5pNwVkDSxKkbJ7qlKlw4hVldpemClByrUb0XMSofECLWtSAhcGzapWWP9l-5yFk6BESBHXd7F1N-7jqXnyc9mVhdzx5bgyoGyj7OMNkjOIZ8zE6rEMVFjPrsyXLYe2K62aq3KPPS2MgUrmy6L~G6Zvg2kbWykf1JZQouWRqMKDYxCgQkFyBOJWXq1ukFkD0UXpbPtgRKbwg~fsX90GVXaab6lbiV1O9h~lXCOjdne2i65g3E~cVk5qWnZC9OsTzuNYE9gAWw\_\_&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)]`}
      >
        <img
          className={` block h-[103px] w-[129px] max-w-[initial] shrink-0 grow-0 basis-auto content-[url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%27307.5000%20380.3000%20129.0000%20103.4000%27%20fill%3D%27none%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20id%3D%274d02b27f%27%20x%3D%270%27%20y%3D%270%27%3E%3Cg%20id%3D%27Layout%20%2F%20221%20%2F%27%3E%3Cg%20id%3D%27Placeholder%20%2F%20Lightbox%27%3E%3Cg%20id%3D%27Play%20Button%27%3E%3Cpath%20id%3D%27Vector%27%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M320.8%20380.8H423.2C430.269%20380.8%20436%20386.531%20436%20393.6V470.4C436%20477.469%20430.269%20483.2%20423.2%20483.2H320.8C313.731%20483.2%20308%20477.469%20308%20470.4V393.6C308%20386.531%20313.731%20380.8%20320.8%20380.8ZM366.688%20452.608L391.584%20435.968C392.925%20435.094%20393.734%20433.601%20393.734%20432C393.734%20430.399%20392.925%20428.906%20391.584%20428.032L366.688%20411.392C365.218%20410.399%20363.32%20410.297%20361.752%20411.128C360.185%20411.958%20359.203%20413.586%20359.2%20415.36V448.64C359.203%20450.414%20360.185%20452.042%20361.752%20452.872C363.32%20453.703%20365.218%20453.601%20366.688%20452.608Z%27%20fill%3D%27black%27%20fill-opacity%3D%270.15%27%2F%3E%3C%2Fg%3E%3Cg%20id%3D%27Play%20Button\_2%27%3E%3Cpath%20id%3D%27Vector\_2%27%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M345.333%20432C345.333%20417.272%20357.272%20405.333%20372%20405.333C379.072%20405.333%20385.855%20408.143%20390.856%20413.144C395.857%20418.145%20398.666%20424.928%20398.666%20432C398.666%20446.728%20386.727%20458.667%20372%20458.667C357.272%20458.667%20345.333%20446.728%20345.333%20432ZM367.12%20443.413L382.666%20433.707C383.248%20433.334%20383.6%20432.691%20383.6%20432C383.6%20431.309%20383.248%20430.666%20382.666%20430.293L367.066%20420.587C366.452%20420.199%20365.676%20420.176%20365.039%20420.524C364.402%20420.873%20364.004%20421.54%20364%20422.267V441.733C363.991%20442.477%20364.396%20443.165%20365.051%20443.517C365.706%20443.87%20366.503%20443.83%20367.12%20443.413Z%27%20fill%3D%27white%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cdefs%2F%3E%3C%2Fsvg%3E')]`}
        />
      </div>
      <div
        className={` flex w-[48.17%] shrink-0 grow-0 basis-auto flex-col items-stretch justify-center px-[15px] pb-[57px] pt-[70px]`}
      >
        {/* Vacation Details */}
        <div
          className={` flex shrink-0 grow-0 basis-auto flex-col items-stretch justify-center`}
        >
          {/* Vacation Section */}
          <div
            className={` flex shrink-0 grow-0 basis-auto flex-col items-stretch justify-center`}
          >
            <VacationFeatures />
            <div
              className={`ml-[-6.5px] mr-[-6.5px] mt-4  flex shrink-0 grow-0 basis-auto flex-row items-start justify-end`}
            >
              <p
                className={`mr-[33px]  shrink grow basis-[0.00] text-base font-normal leading-[128%] text-[black]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <p
                className={` shrink grow basis-[0.00] text-base font-normal leading-[128%] text-[black]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>

          {/* Facility Details */}
          <div
            className={`mt-[52px]  flex shrink-0 grow-0 basis-auto flex-col items-stretch justify-center`}
          >
            <div
              className={` flex shrink-0 grow-0 basis-auto flex-col items-stretch justify-center`}
            >
              <div
                className={` flex shrink-0 grow-0 basis-auto flex-row items-stretch justify-start px-[7px]`}
              >
                <div className={` w-[50.00%] shrink-0 grow-0 basis-auto`}>
                  <img
                    className={` block h-[41px] w-[37px] max-w-[initial] content-[url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%27765.5000%20415.5000%2037.0000%2041.0002%27%20x%3D%270%27%20y%3D%270%27%20fill%3D%27none%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20id%3D%27Vector\_5%27%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M801.46%20426.24L801.18%20425.74C800.819%20425.135%20800.309%20424.633%20799.7%20424.28L786.28%20416.54C785.672%20416.187%20784.983%20416.001%20784.28%20416H783.7C782.997%20416.001%20782.308%20416.187%20781.7%20416.54L768.28%20424.3C767.674%20424.651%20767.171%20425.154%20766.82%20425.76L766.54%20426.26C766.187%20426.868%20766.001%20427.557%20766%20428.26V443.76C766.001%20444.463%20766.187%20445.152%20766.54%20445.76L766.82%20446.26C767.18%20446.859%20767.681%20447.36%20768.28%20447.72L781.72%20455.46C782.325%20455.82%20783.016%20456.007%20783.72%20456H784.28C784.983%20455.999%20785.672%20455.813%20786.28%20455.46L799.7%20447.7C800.312%20447.357%20800.817%20446.852%20801.16%20446.24L801.46%20445.74C801.808%20445.131%20801.994%20444.442%20802%20443.74V428.24C801.999%20427.537%20801.813%20426.848%20801.46%20426.24ZM783.7%20420H784.28L796%20426.76L784%20433.68L772%20426.76L783.7%20420ZM786%20451L797.7%20444.24L798%20443.74V430.22L786%20437.16V451Z%27%20fill%3D%27black%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%2F%3E%3C%2Fsvg%3E')]`}
                  />
                </div>
                <div
                  className={` w-[50.00%] shrink-0 grow-0 basis-auto pl-[26px] pr-[24.5px]`}
                >
                  <img
                    className={` block h-[41px] w-[37px] max-w-[initial] content-[url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%271086.0000%20415.5000%2036.5000%2041.0002%27%20x%3D%270%27%20y%3D%270%27%20fill%3D%27none%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20id%3D%27Vector\_6%27%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M1121.46%20426.24L1121.18%20425.74C1120.82%20425.135%201120.31%20424.633%201119.7%20424.28L1106.28%20416.54C1105.67%20416.187%201104.98%20416.001%201104.28%20416H1103.7C1103%20416.001%201102.31%20416.187%201101.7%20416.54L1088.28%20424.3C1087.67%20424.651%201087.17%20425.154%201086.82%20425.76L1086.54%20426.26C1086.19%20426.868%201086%20427.557%201086%20428.26V443.76C1086%20444.463%201086.19%20445.152%201086.54%20445.76L1086.82%20446.26C1087.18%20446.859%201087.68%20447.36%201088.28%20447.72L1101.72%20455.46C1102.32%20455.82%201103.02%20456.007%201103.72%20456H1104.28C1104.98%20455.999%201105.67%20455.813%201106.28%20455.46L1119.7%20447.7C1120.31%20447.357%201120.82%20446.852%201121.16%20446.24L1121.46%20445.74C1121.81%20445.131%201121.99%20444.442%201122%20443.74V428.24C1122%20427.537%201121.81%20426.848%201121.46%20426.24ZM1103.7%20420H1104.28L1116%20426.76L1104%20433.68L1092%20426.76L1103.7%20420ZM1106%20451L1117.7%20444.24L1118%20443.74V430.22L1106%20437.16V451Z%27%20fill%3D%27black%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%2F%3E%3C%2Fsvg%3E')]`}
                  />
                </div>
              </div>
              <div
                className={`mt-5  flex shrink-0 grow-0 basis-auto flex-row items-stretch justify-start`}
              >
                <p
                  className={` w-[50.83%] shrink-0 grow-0 basis-auto text-2xl font-bold text-[black]`}
                >
                  Gym
                </p>
                <p
                  className={` w-[49.17%] shrink-0 grow-0 basis-auto px-[15px] text-2xl font-bold text-[black]`}
                >
                  Resturant
                </p>
              </div>
            </div>
            <div
              className={`ml-[-6.5px] mr-[-6.5px] mt-4  flex shrink-0 grow-0 basis-auto flex-row items-start justify-end`}
            >
              <p
                className={`mr-[33px]  shrink grow basis-[0.00] text-base font-normal leading-[128%] text-[black]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <p
                className={` shrink grow basis-[0.00] text-base font-normal leading-[128%] text-[black]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`mt-[47px]  flex shrink-0 grow-0 basis-auto flex-row items-center justify-start`}
        >
          {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
          <Button className=" block h-[50px] w-[123px] shrink-0 grow-0 basis-auto cursor-pointer rounded-[5px] border border-solid border-[black] bg-transparent text-base font-normal text-[black]">
            Book Now
          </Button>

          <div
            className={`ml-[23px]  flex shrink-0 grow-0 basis-auto flex-row items-center justify-start`}
          >
            <p
              className={` shrink-0 grow-0 basis-auto text-base font-normal text-[black]`}
            >
              Learn More
            </p>
            {/* <SvgIcon1 className="grow-0 shrink-0 basis-auto  w-6 h-6 flex ml-2" /> */}
            SVG Icon
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacationSection;
