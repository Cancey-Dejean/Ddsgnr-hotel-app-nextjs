import { Button } from "@mui/material"
import React from "react"

type Props = {}

const GallerySection = (props: Props) => {
  return (
    <div
      className={`bg-[white] flex justify-start items-center flex-col gap-12 box-border pt-28 pb-[111px] px-16`}
    >
      <div
        className={`flex justify-start items-center flex-col self-stretch grow-0 shrink-0 basis-auto box-border`}
      >
        <p
          className={`grow-0 shrink-0 basis-auto box-border  text-[56px] font-bold text-[black]`}
        >
          Gallery
        </p>
        <p
          className={`grow-0 shrink-0 basis-auto box-border  text-lg font-normal text-[black] mt-6`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
      </div>
      <div
        className={`flex justify-start items-start flex-row grow-0 shrink-0 basis-auto box-border`}
      >
        {/* Image1 */}
        <div className={`grow-0 shrink-0 basis-auto box-border`}>
          <img
            className={`w-[640px] h-[640px] max-w-[initial] box-border object-cover block rounded-[5px] border-[none] content-[url('https://s3-alpha-sig.figma.com/img/07a0/1af0/128949601a50eda2a53031df899bd4c0?Expires=1693785600&Signature=iBpHiBwZGFGV0OEJdD4LgXXaaiXmnoalmW6p0g-vnPqeM6KsDwWj96-5e~dwGAFC6grRlwU7YcUazWLggtvQStnHE~vORS8Nb6koJFXWjyoJOMa5qa7S09aa56dsv3gqokmHNaJX3MheVwCI3S5ErgM0ZZ1viEbKQZwJ3ZJWPH2j6nq4LDXe3jXsqkDMHlDn-gne7CH0iKbKK1PvKrFK49XbApjjT8RH7DLg8B7s-mFx04cQI9okDZBPnMTZv3NCKs0tzK3j6xjmjIUSUsHo1FKhlgG0VPtt4op0OfvbzvvQXGQ~5jHxOQX3F6aCPPBBwYeB54KDDzf02GoBNIDMhg\_\_&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]`}
          />
          <div className={`box-border mt-8`}>
            <img
              className={`w-[640px] h-[426px] max-w-[initial] box-border object-cover block rounded-[5px] border-[none] content-[url('https://s3-alpha-sig.figma.com/img/d88e/a9f9/f02cf6b18e994683b3964fd64b0ce499?Expires=1693785600&Signature=avB3wvhpqfe5uQvykJvhayWc0~zkOqdoX3qUFTFBjUs8PXPy0hkfmZnvDRZULZFsB-MSZ7RG-0ZT1rnhC2YZSlegtnyDSenqk60qGZGpA~g1SR9d9ikFQ2EP5c~GUEWAGruyp-hvwzIOuRqn13bnytR3QNCG7-xzUpgf1YZS9ANqehe40BzZKTDqqhdFidrdvBKrAsHXc4M5jYrXScC8V~TZ8JV34LRnAbeD6dHVrdIfn03~~glm557WVNdGC957VQoU8BJPRTKWmF9tTGXfnLkWF2cyJsKGRhIbSjDOk0KGKWQAvB-hk4W1o7Utkzm3~pt395QoWGq4-cfZ-s3VUw\_\_&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]`}
            />
          </div>
        </div>

        {/* ImageGallery */}
        <div className={`grow-0 shrink-0 basis-auto box-border ml-8`}>
          <img
            className={`w-[640px] h-[426px] max-w-[initial] box-border object-cover block rounded-[5px] border-[none] content-[url('https://s3-alpha-sig.figma.com/img/b714/0015/f53ea4cae7a40fb7c0fff2604d5157e3?Expires=1693785600&Signature=a2mHjnFC~VCefojt6EWXF3T5VLeIX5t4Ca8JgUHlQAMVXK2ffR86ZtrijG~WbTS7UKwy7Dl9~ofagG0i6jjg80yMlBMQTdVAcbEJ6Pkn0d4SeijvtzvviZ~HxvnDARVuZciagYIQac~~pde5w7cgwoHPBuwkq~tUY43oKTxnQN0q9eBvjEoMOLTyhTOL~0qxdPbf44otkwlvkJGkb6HhL7frf640hXfQRIATepYVlxEiqr9Tp8QY0sx30STZqdhncSF62zE1hsGxqzZptjhUcNoZxLyGy8Hier76OqMXA2uM2pFwORS1oaRpGQZWKBzOdo0mKtNIdi~fVipp3sIB9w\_\_&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]`}
          />
          <div className={`box-border mt-8`}>
            <img
              className={`w-[640px] h-[640px] max-w-[initial] box-border object-cover block rounded-[5px] border-[none] content-[url('https://s3-alpha-sig.figma.com/img/eac4/4920/61a6671ca9308b80cdc80491fc111dfc?Expires=1693785600&Signature=SUP0RFtpWLWMjQ~~zQJlwZxIZNSGyDxerY4qFCWPD6ApzwsskBiJodBFRi4XjHctAQ2vQ9m~-HmTB~5pNwVkDSxKkbJ7qlKlw4hVldpemClByrUb0XMSofECLWtSAhcGzapWWP9l-5yFk6BESBHXd7F1N-7jqXnyc9mVhdzx5bgyoGyj7OMNkjOIZ8zE6rEMVFjPrsyXLYe2K62aq3KPPS2MgUrmy6L~G6Zvg2kbWykf1JZQouWRqMKDYxCgQkFyBOJWXq1ukFkD0UXpbPtgRKbwg~fsX90GVXaab6lbiV1O9h~lXCOjdne2i65g3E~cVk5qWnZC9OsTzuNYE9gAWw\_\_&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]`}
            />
          </div>
        </div>
      </div>
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="w-[126px] h-[50px] grow-0 shrink-0 basis-auto box-border border bg-transparent text-base font-normal text-[black] cursor-pointer block rounded-[5px] border-[black] border-solid">
        View more
      </Button>
    </div>
  )
}

export default GallerySection
