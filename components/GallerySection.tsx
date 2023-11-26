import Image from "next/image";
import ButtonLink from "./Button";
import Wrapper from "./Wrapper";
import SectionHeader from "./SectionHeader";
import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";

const GallerySection = () => {
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
              src="/images/gallery1.jpg"
              width={640}
              height={640}
              alt=""
              className="rounded-[10px]"
            />

            <Image
              src="/images/gallery2.jpg"
              width={640}
              height={426}
              alt=""
              className="aspect-auto rounded-[10px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-8">
            <Image
              src="/images/gallery4.jpg"
              width={640}
              height={640}
              alt=""
              className="order-2 rounded-[10px]"
            />

            <Image
              src="/images/gallery3.jpg"
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
  );
};

export default GallerySection;
