"use client";
import NavigationMenu from "./NavigationMenu";
import Wrapper from "./Wrapper";
import { usePathname } from "next/navigation";
import ButtonGroup from "./ButtonGroup";
import Logo from "./Logo";
import { menuList } from "@/constants";

const Header = () => {
  const path = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white py-4">
      <Wrapper className="flex items-center justify-between gap-8">
        <Logo
          imgSrc="/images/logo.svg"
          url="/"
          text="Ddsgnr"
          imgAlt="Ddsgnr Logo"
        />

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
