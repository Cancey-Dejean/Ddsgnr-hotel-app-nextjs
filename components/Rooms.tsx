import { Button } from "@mui/material";

type Props = {};

const Rooms = (props: Props) => {
  return (
    <div
      className={`box-border flex flex-col items-center justify-start bg-[white] px-16 py-28`}
    >
      <div
        className={`box-border flex shrink-0 grow-0 basis-auto flex-col items-center justify-start self-stretch`}
      >
        <p
          className={`box-border shrink-0 grow-0 basis-auto  text-base font-semibold text-[black]`}
        >
          Rooms
        </p>
        <p
          className={`mt-4 box-border shrink-0 grow-0  basis-auto text-5xl font-bold text-[black]`}
        >
          Our Rooms
        </p>
        <p
          className={`mt-6 box-border shrink-0 grow-0  basis-auto text-lg font-normal text-[black]`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className={`flex`}>
        <div
          className={`box-border flex shrink-0 grow-0 basis-auto flex-col items-center justify-start rounded-[5px] border-[0.5px] border-solid border-[#676767] bg-[white] pb-[31.5px]`}
        >
          <img
            className={`box-border block h-[488px] w-[640px] max-w-[initial] shrink-0 grow-0 basis-auto border-[none] object-cover content-[url('https://s3-alpha-sig.figma.com/img/c06b/c481/6cb8d68be2e95674f28f8bd1230f6291?Expires=1693785600&Signature=k9d0SukVYlQl4GZBmJRRtj6hgErh2xBWK7teDutVRteJz~voV6EKiVM0BKuff~Q4QDbGYhaSFGH~Lw16X4wIb5mvju4uv01p0EIxVqUlQtV385X23CL83faTUvFCbxv74qeVkSkPQmxLLc5xrMGH0cgXlWJeixiJ6oBHck101ilRznaVg35RKqtbLu~za2Vs371E~iCfbA2tdyCsMmuV2GbojBnmHEuJP6DnU1zMxTDVEKnXnN703YX0l-vDXYGVnqbH~rRaMhgxV~e~fEGQttJlyvZIKftZA2diSWlaQjIkfnkVSSWycEdiLL9tPF1xWONgDITueDOzX-JkNU3sFQ\_\_&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]`}
          />
          <div
            className={`mt-16 box-border shrink-0 grow-0 basis-auto self-stretch px-12`}
          >
            <div className={`box-border`}>
              <p
                className={`box-border max-w-[455px]  text-[40px] font-bold leading-[102.40000915527344%] text-[black]`}
              >
                Double exclusive 2 queen beds
              </p>
              <p
                className={`mt-6 box-border  max-w-[535px] text-base font-normal leading-[128%] text-[black]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div
              className={`mt-[31px] box-border flex flex-row items-center justify-start`}
            >
              {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
              <Button className="box-border block h-[50px] w-[120px] shrink-0 grow-0 basis-auto cursor-pointer  rounded-[5px] border border-solid border-[black] bg-transparent text-base font-normal text-[black]">
                $60/night
              </Button>

              <div
                className={`ml-[23px] box-border flex shrink-0 grow-0 basis-auto flex-row items-center justify-start`}
              >
                <p
                  className={`box-border shrink-0 grow-0 basis-auto  text-base font-normal text-[black]`}
                >
                  View room
                </p>
                {/* <SvgIcon1 className="grow-0 shrink-0 basis-auto box-border w-6 h-6 flex ml-2" /> */}
                svg Icon
              </div>
            </div>
          </div>
        </div>

        <div className={`ml-[31px] box-border shrink-0 grow-0 basis-auto`}>
          <div className={`box-border flex flex-row items-start justify-start`}>
            <div
              className={`box-border flex shrink-0 grow-0 basis-auto flex-col items-center justify-start rounded-[5px] border-[0.5px] border-solid border-[#676767] bg-[white] pb-[18.5px]`}
            >
              <img
                className={`box-border block h-[171px] w-[304px] max-w-[initial] shrink-0 grow-0 basis-auto border-[none] object-cover content-[url('https://s3-alpha-sig.figma.com/img/670d/3269/87d4c7643c3accb491a639511980d654?Expires=1693785600&Signature=jQNWrA96ADZMiCyxJIAH~R0up7gaooAYI72ARWl60~JH370CUnoJBfIcXQJVEaqlxudW0nQfAaORty0uTeqzzuti5KMuwrJpRWsSbu7JNOzAefHg-RBvOApvxeuxqW6csQDPjpJheBI187jbphmQofHvzHMu9irv6BVg0V-ieijcEwEFTUDUoDTj7aikwWIXwzRDIzgCO1XHE4Kj~Rh-cIG6baoafEXuW~k9JRIJD2eq~PjrOWIBa-2YHv5LIvvQfvAJN8W0XBixNWo9Bi997vwEjUh2PGBbA9M3elEFj6SsITeIRgrCZpz35-nx7c8iTrW~5qW4arPZwnF8lW2iEQ\_\_&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]`}
              />
              <div
                className={`mt-14 box-border shrink-0 grow-0 basis-auto self-stretch px-[23.5px]`}
              >
                <p className={`box-border  text-2xl font-bold text-[black]`}>
                  Double deluxe
                </p>
                <p
                  className={`mt-2 box-border  max-w-[198px] text-base font-normal leading-[128%] text-[black]`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
                <div
                  className={`mt-[23px] box-border flex flex-row items-center justify-start`}
                >
                  {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
                  <Button className="box-border block h-[42px] w-[114px] shrink-0 grow-0 basis-auto cursor-pointer  rounded-[5px] border border-solid border-[black] bg-transparent text-base font-normal text-[black]">
                    $45/Night
                  </Button>

                  <div
                    className={`ml-[23px] box-border flex shrink-0 grow-0 basis-auto flex-row items-center justify-start`}
                  >
                    <p
                      className={`box-border shrink-0 grow-0 basis-auto  text-base font-normal text-[black]`}
                    >
                      View room
                    </p>
                    {/* <SvgIcon1 className="grow-0 shrink-0 basis-auto box-border w-6 h-6 flex ml-2" /> */}
                    svg icon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
