import NewsletterSection from "./NewsletterSection";

type Props = {
  linkOptions?: {}[];
  socialCardsData?: {}[];
};

const Footer = ({ linkOptions, socialCardsData }: Props) => {
  return (
    <div
      className={`flex flex-col items-stretch justify-center bg-[white] p-16`}
    >
      <NewsletterSection
        linkOptions={linkOptions}
        socialCardsData={socialCardsData}
      />
      <div
        className={`mt-8 flex shrink-0 grow-0 basis-auto flex-row items-center justify-between gap-2`}
      >
        <p
          className={`shrink-0 grow-0 basis-auto text-sm font-normal text-[black]`}
        >
          2023 Ddsgnr. All right reserved.
        </p>
        <div
          className={`flex shrink-0 grow-0 basis-auto flex-row items-center justify-start gap-6`}
        >
          <p
            className={`shrink-0 grow-0 basis-auto  text-sm font-normal text-[black] underline`}
          >
            Privacy Policy
          </p>
          <p
            className={`shrink-0 grow-0 basis-auto  text-sm font-normal text-[black] underline`}
          >
            Terms of Service
          </p>
          <p
            className={`shrink-0 grow-0 basis-auto  text-sm font-normal text-[black] underline`}
          >
            Cookies Settings
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
