import NewsletterSection from "./NewsletterSection"

type Props = {
  linkOptions?: {}[]
  socialCardsData?: {}[]
}

const Footer = ({ linkOptions, socialCardsData }: Props) => {
  return (
    <div
      className={`bg-[white] flex justify-center items-stretch flex-col box-border p-16`}
    >
      <NewsletterSection
        linkOptions={linkOptions}
        socialCardsData={socialCardsData}
      />
      <div
        className={`flex justify-between items-center flex-row gap-2 grow-0 shrink-0 basis-auto box-border mt-8`}
      >
        <p
          className={`grow-0 shrink-0 basis-auto box-border text-sm font-normal text-[black]`}
        >
          2023 Ddsgnr. All right reserved.
        </p>
        <div
          className={`flex justify-start items-center flex-row gap-6 grow-0 shrink-0 basis-auto box-border`}
        >
          <p
            className={`grow-0 shrink-0 basis-auto box-border  text-sm font-normal underline text-[black]`}
          >
            Privacy Policy
          </p>
          <p
            className={`grow-0 shrink-0 basis-auto box-border  text-sm font-normal underline text-[black]`}
          >
            Terms of Service
          </p>
          <p
            className={`grow-0 shrink-0 basis-auto box-border  text-sm font-normal underline text-[black]`}
          >
            Cookies Settings
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
