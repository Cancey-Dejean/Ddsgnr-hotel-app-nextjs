import { Button } from "@mui/material"

type NavigationMenuProps = {}

const NavigationMenu = ({}: NavigationMenuProps) => {
  return (
    <div
      className={`bg-[white] flex justify-start items-center flex-row grow-0 shrink-0 basis-auto box-border ml-[629px]`}
    >
      <div
        className={`flex justify-start items-center flex-row gap-8 grow-0 shrink-0 basis-auto box-border`}
      >
        <p
          className={`grow-0 shrink-0 basis-auto box-border  text-base font-normal text-[black]`}
        >
          Home
        </p>
        <p
          className={`grow-0 shrink-0 basis-auto box-border  text-base font-normal text-[black]`}
        >
          About
        </p>
        <p
          className={`grow-0 shrink-0 basis-auto box-border  text-base font-normal text-[black]`}
        >
          Services
        </p>
        <p
          className={`grow-0 shrink-0 basis-auto box-border  text-base font-normal text-[black]`}
        >
          Gallery
        </p>
      </div>
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="w-[91px] h-[42px] grow-0 shrink-0 basis-auto box-border border bg-transparent  text-base font-normal text-[black] cursor-pointer block ml-[31px] rounded-[5px] border-[black] border-solid">
        Sign In
      </Button>

      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="w-[123px] h-[42px] grow-0 shrink-0 basis-auto box-border border bg-[black]  text-base font-normal text-[white] cursor-pointer block ml-3.5 rounded-[5px] border-[black] border-solid">
        Get Started
      </Button>
    </div>
  )
}

export default NavigationMenu
