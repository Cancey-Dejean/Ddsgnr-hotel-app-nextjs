"use client";
import Image from "next/image";
import NavigationMenu from "./NavigationMenu";
import Wrapper from "./Wrapper";
import ButtonLink from "./ButtonLink";
import { usePathname } from "next/navigation";
import ButtonGroup from "./ButtonGroup";

const menuList = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Services", url: "/services" },
  { label: "Gallery", url: "/gallery" },
];

type Props = {};

const Header = ({}: Props) => {
  const path = usePathname();
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
          <NavigationMenu menuList={menuList} path={path} />

          <div className="flex items-center gap-4">
            <ButtonGroup
              buttons={[
                {
                  url: "/",
                  variant: "btn-border-dark",
                  label: "Sign In",
                  linkable: true,
                  size: "btn-size-small",
                },
                {
                  url: "/",
                  variant: "btn-primary",
                  label: "Get Started",
                  linkable: true,
                  size: "btn-size-small",
                },
              ]}
            />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
