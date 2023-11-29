import Image from "next/image"
import Button from "../ButtonLink"
import Wrapper from "../Wrapper"
import SectionHeader from "../SectionHeader"
import Paragraph from "../Paragraph"
import SectionTitle from "../SectionTitle"
import ButtonLink from "../ButtonLink"

const GallerySection = ({
  imageOne = "https://dummyimage.com/618x618.png/dddddd/ffffff",
  imageTwo = "https://dummyimage.com/618x411.png/dddddd/ffffff",
  imageThree = "https://dummyimage.com/618x411.png/dddddd/ffffff",
  imageFour = "https://dummyimage.com/618x618.png/dddddd/ffffff",
}: {
  imageOne?: string
  imageTwo?: string
  imageThree?: string
  imageFour?: string
}) => {
  return (
    <section className="py-6 sm:py-28">
      <Wrapper className="flex flex-col items-center gap-12">
        <SectionHeader
          title={<SectionTitle tag="h1">Our Gallery</SectionTitle>}
          desc={
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Paragraph>
          }
        />

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-col gap-8">
            <Image
              src={imageOne}
              width={640}
              height={640}
              alt=""
              className="rounded-[10px]"
            />

            <Image
              src={imageTwo}
              width={640}
              height={426}
              alt=""
              className="aspect-auto rounded-[10px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-8">
            <Image
              src={imageFour}
              width={640}
              height={640}
              alt=""
              className="order-2 rounded-[10px]"
            />

            <Image
              src={imageThree}
              width={640}
              height={426}
              alt=""
              className="order-1 aspect-auto rounded-[10px] object-cover"
            />
          </div>
        </div>

        <ButtonLink variant="btn-border-dark" label="View more" linkable />
      </Wrapper>
    </section>
  )
}

export default GallerySection
