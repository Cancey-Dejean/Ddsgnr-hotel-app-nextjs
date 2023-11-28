"use client"
import { useFormReset } from "../../utils"
import ButtonLink from "../Button"
import Paragraph from "../Paragraph"
import Link from "next/link"
import {
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "react-aria-components"

const NewsletterSection = () => {
  const onSubmit = useFormReset()
  return (
    <div className="flex flex-col justify-stretch gap-4">
      <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <Paragraph>
          Join our newsletter to stay up to date on features and releases.
        </Paragraph>

        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <TextField name="checkIn" className="w-full" isRequired>
            <Label className="input-label sr-only">Enter your email</Label>
            <Input
              id="email"
              type="email"
              className="input-base "
              placeholder="Enter your email"
              required
            />
            <FieldError className="input-error" />
          </TextField>

          <ButtonLink
            className="px-[11px] py-[12px] h-[47px]"
            label="Subscribe"
            linkable={false}
            type="submit"
            variant="btn-border-dark"
          />
        </div>

        <div className="block">
          <Paragraph className="w-full text-xs lg:max-w-[481px]">
            By subscribing you agree to with our {""}
            <Link href="#" className="underline">
              Privacy Policy
            </Link>{" "}
            and provide consent to receive updates from our company.
          </Paragraph>
        </div>
      </Form>
    </div>
  )
}

export default NewsletterSection
