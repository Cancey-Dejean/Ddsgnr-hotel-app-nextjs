import Image from "next/image"
import Wrapper from "../Wrapper"
import SectionHeader from "../SectionHeader"
import SectionTitle from "../SectionTitle"
import ButtonLink from "../ButtonLink"

const galleryImages = [
  {
    image: "/images/gallery1.jpg",
    alt: "Gallery Image 1",
  },
  {
    image: "/images/gallery2.jpg",
    alt: "Gallery Image 2",
  },
  {
    image: "/images/gallery3.jpg",
    alt: "Gallery Image 3",
  },
  {
    image: "/images/gallery4.jpg",
    alt: "Gallery Image 4",
  },
]

const GallerySection = ({
  imageOne = "https://dummyimage.com/618x618.png/dddddd/ffffff",
  imageTwo = "https://dummyimage.com/618x411.png/dddddd/ffffff",
  imageThree = "https://dummyimage.com/618x411.png/dddddd/ffffff",
  imageFour = "https://dummyimage.com/618x618.png/dddddd/ffffff",
  btnLabel = "Button",
  btnUrl = "/",
}: {
  imageOne?: string
  imageTwo?: string
  imageThree?: string
  imageFour?: string
  btnLabel?: string
  btnUrl?: string
}) => {
  return (
    <section className="py-10 sm:py-28">
      <Wrapper className="flex flex-col items-center gap-12">
        <SectionHeader
          title={<SectionTitle tag="h1">Our Gallery</SectionTitle>}
          desc=""
        />

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Column 1 */}
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

          {/* Column 2 */}
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

        {btnLabel !== "" ? (
          <ButtonLink variant="btn-border-dark" label={btnLabel} url={btnUrl} />
        ) : null}
      </Wrapper>
    </section>
  )
}

export default GallerySection
