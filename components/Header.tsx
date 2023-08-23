import NavigationMenu from "./NavigationMenu"

type Props = {}

const Header = ({}: Props) => {
  return (
    <header
      className={`bg-[white] flex justify-center items-center flex-row box-border py-4 px-16 border-t-0 border-x-0 border-b border-[#676767] border-solid`}
    >
      <div
        className={`flex justify-center items-start flex-row grow-0 shrink-0 basis-auto box-border`}
      >
        <div className={`grow-0 shrink-0 basis-auto box-border`}>
          <img
            src="/images/logo.svg"
            className={`w-[34px] h-[31.5px] max-w-[initial]`}
          />
        </div>
        <p
          className={`grow-0 shrink-0 basis-auto box-border text-[25px] font-bold text-[black] ml-[7px]`}
        >
          Ddsgnr
        </p>
      </div>
      <NavigationMenu />
    </header>
  )
}

export default Header
