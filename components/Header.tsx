import Image from "next/image";
import NavigationMenu from "./NavigationMenu";
import Wrapper from "./Wrapper";
import ButtonLink from "./ButtonLink";

const menuList = [
  { label: "Home", url: "#" },
  { label: "About", url: "#" },
  { label: "Services", url: "#" },
  { label: "Gallery", url: "#" },
];

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="flex items-center justify-center bg-[white] py-4">
      <Wrapper className="flex justify-between">
        <div className="flex items-center gap-[7px]">
          <Image
            src="/images/logo.svg"
            className="h-[31px] w-[34px] object-contain"
            alt="logo"
            width={34}
            height={31}
          />
          <p className="text-[25px] font-bold">Ddsgnr</p>
        </div>

        <div className="flex items-center gap-8">
          <NavigationMenu menuList={menuList} />

          <div className="flex items-center gap-4">
            <ButtonLink
              linkable
              variant="btn-border-dark"
              size="btn-size-small"
            >
              Sign In
            </ButtonLink>
            <ButtonLink linkable variant="btn-primary" size="btn-size-small">
              Get Started
            </ButtonLink>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
