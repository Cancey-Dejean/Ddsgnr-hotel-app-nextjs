import { Button } from "@mui/material"

type HeroProps = {}

const Hero = ({}: HeroProps) => {
  return (
    <div
      className={`flex justify-center items-stretch flex-col box-border pl-[63px] pr-12 pt-[317px] pb-[316px] bg-black`}
    >
      <div className={`grow-0 shrink-0 basis-auto box-border`}>
        <p
          className={`max-w-[467px] box-border  text-[56px] font-bold leading-[102.40000915527344%] text-[white]`}
        >
          Enjoy Luxury Hotel Experience{" "}
        </p>
        <p
          className={`max-w-[549px] box-border  text-lg font-normal leading-[128%] text-[white] mt-6`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
      <div
        className={`flex justify-start items-start flex-row grow-0 shrink-0 basis-auto box-border mt-[39px]`}
      >
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="w-[123px] h-[50px] grow-0 shrink-0 basis-auto box-border border bg-[white]  text-base font-normal text-[black] cursor-pointer block rounded-[5px] border-[white] border-solid">
          Book Now
        </Button>

        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="w-[131px] h-[50px] grow-0 shrink-0 basis-auto box-border border bg-transparent  text-base font-normal text-[white] cursor-pointer block ml-3.5 rounded-[5px] border-[white] border-solid">
          Learn More
        </Button>
      </div>
    </div>
  )
}

export default Hero
