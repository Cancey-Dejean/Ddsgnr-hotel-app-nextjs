import { Button } from "@mui/material"

type Props = {}

const Rooms = (props: Props) => {
  return (
    <div
      className={`bg-[white] flex justify-start items-center flex-col box-border px-16 py-28`}
    >
      <div
        className={`flex justify-start items-center flex-col self-stretch grow-0 shrink-0 basis-auto box-border`}
      >
        <p
          className={`grow-0 shrink-0 basis-auto box-border  text-base font-semibold text-[black]`}
        >
          Rooms
        </p>
        <p
          className={`grow-0 shrink-0 basis-auto box-border  text-5xl font-bold text-[black] mt-4`}
        >
          Our Rooms
        </p>
        <p
          className={`grow-0 shrink-0 basis-auto box-border  text-lg font-normal text-[black] mt-6`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className={`flex`}>
        <div
          className={`bg-[white] flex justify-start items-center flex-col grow-0 shrink-0 basis-auto box-border pb-[31.5px] rounded-[5px] border-[0.5px] border-[#676767] border-solid`}
        >
          <img
            className={`w-[640px] h-[488px] max-w-[initial] grow-0 shrink-0 basis-auto box-border object-cover block border-[none] content-[url('https://s3-alpha-sig.figma.com/img/c06b/c481/6cb8d68be2e95674f28f8bd1230f6291?Expires=1693785600&Signature=k9d0SukVYlQl4GZBmJRRtj6hgErh2xBWK7teDutVRteJz~voV6EKiVM0BKuff~Q4QDbGYhaSFGH~Lw16X4wIb5mvju4uv01p0EIxVqUlQtV385X23CL83faTUvFCbxv74qeVkSkPQmxLLc5xrMGH0cgXlWJeixiJ6oBHck101ilRznaVg35RKqtbLu~za2Vs371E~iCfbA2tdyCsMmuV2GbojBnmHEuJP6DnU1zMxTDVEKnXnN703YX0l-vDXYGVnqbH~rRaMhgxV~e~fEGQttJlyvZIKftZA2diSWlaQjIkfnkVSSWycEdiLL9tPF1xWONgDITueDOzX-JkNU3sFQ\_\_&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]`}
          />
          <div
            className={`self-stretch grow-0 shrink-0 basis-auto box-border mt-16 px-12`}
          >
            <div className={`box-border`}>
              <p
                className={`max-w-[455px] box-border  text-[40px] font-bold leading-[102.40000915527344%] text-[black]`}
              >
                Double exclusive 2 queen beds
              </p>
              <p
                className={`max-w-[535px] box-border  text-base font-normal leading-[128%] text-[black] mt-6`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div
              className={`flex justify-start items-center flex-row box-border mt-[31px]`}
            >
              {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
              <Button className="w-[120px] h-[50px] grow-0 shrink-0 basis-auto box-border border bg-transparent  text-base font-normal text-[black] cursor-pointer block rounded-[5px] border-[black] border-solid">
                $60/night
              </Button>

              <div
                className={`flex justify-start items-center flex-row grow-0 shrink-0 basis-auto box-border ml-[23px]`}
              >
                <p
                  className={`grow-0 shrink-0 basis-auto box-border  text-base font-normal text-[black]`}
                >
                  View room
                </p>
                {/* <SvgIcon1 className="grow-0 shrink-0 basis-auto box-border w-6 h-6 flex ml-2" /> */}
                svg Icon
              </div>
            </div>
          </div>
        </div>

        <div className={`grow-0 shrink-0 basis-auto box-border ml-[31px]`}>
          <div className={`flex justify-start items-start flex-row box-border`}>
            <div
              className={`bg-[white] flex justify-start items-center flex-col grow-0 shrink-0 basis-auto box-border pb-[18.5px] rounded-[5px] border-[0.5px] border-[#676767] border-solid`}
            >
              <img
                className={`w-[304px] h-[171px] max-w-[initial] grow-0 shrink-0 basis-auto box-border object-cover block border-[none] content-[url('https://s3-alpha-sig.figma.com/img/670d/3269/87d4c7643c3accb491a639511980d654?Expires=1693785600&Signature=jQNWrA96ADZMiCyxJIAH~R0up7gaooAYI72ARWl60~JH370CUnoJBfIcXQJVEaqlxudW0nQfAaORty0uTeqzzuti5KMuwrJpRWsSbu7JNOzAefHg-RBvOApvxeuxqW6csQDPjpJheBI187jbphmQofHvzHMu9irv6BVg0V-ieijcEwEFTUDUoDTj7aikwWIXwzRDIzgCO1XHE4Kj~Rh-cIG6baoafEXuW~k9JRIJD2eq~PjrOWIBa-2YHv5LIvvQfvAJN8W0XBixNWo9Bi997vwEjUh2PGBbA9M3elEFj6SsITeIRgrCZpz35-nx7c8iTrW~5qW4arPZwnF8lW2iEQ\_\_&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]`}
              />
              <div
                className={`self-stretch grow-0 shrink-0 basis-auto box-border mt-14 px-[23.5px]`}
              >
                <p className={`box-border  text-2xl font-bold text-[black]`}>
                  Double deluxe
                </p>
                <p
                  className={`max-w-[198px] box-border  text-base font-normal leading-[128%] text-[black] mt-2`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
                <div
                  className={`flex justify-start items-center flex-row box-border mt-[23px]`}
                >
                  {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
                  <Button className="w-[114px] h-[42px] grow-0 shrink-0 basis-auto box-border border bg-transparent  text-base font-normal text-[black] cursor-pointer block rounded-[5px] border-[black] border-solid">
                    $45/Night
                  </Button>

                  <div
                    className={`flex justify-start items-center flex-row grow-0 shrink-0 basis-auto box-border ml-[23px]`}
                  >
                    <p
                      className={`grow-0 shrink-0 basis-auto box-border  text-base font-normal text-[black]`}
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
  )
}

export default Rooms
