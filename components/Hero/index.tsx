import Wrapper from "../Wrapper"
import SectionTitle from "../SectionTitle"
import { HeroProps } from "@/types/HeroProps"
import { PortableText } from "next-sanity"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Link } from "next-view-transitions"

const Hero = ({ title, description, mainImage, ctaButtons }: HeroProps) => {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center bg-cover bg-center bg-no-repeat py-[80px] text-[white] lg:h-[940px] w-full",
        "after:absolute after:z-0 after:h-full after:w-full after:bg-black/60 after:content-['']"
      )}
      style={{
        backgroundImage: `url(${mainImage})`,
      }}
    >
      <Wrapper className="relative z-[1]">
        <div className="flex flex-col gap-6 max-md:text-center">
          <SectionTitle className="max-w-[467px] max-sm:text-[40px] max-sm:leading-[48px] max-md:mx-auto text-[56px] leading-[67px]">
            {title}
          </SectionTitle>

          <div className="w-full max-w-[549px] text-lg max-md:mx-auto">
            <PortableText value={description} />
          </div>

          <div className="flex items-center gap-4 max-md:justify-center">
            {ctaButtons.map(({ variant, label }) => (
              <Button key={label} asChild variant={variant}>
                <Link href="/">{label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Hero
