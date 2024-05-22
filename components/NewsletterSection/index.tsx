"use client"
// import { useFormReset } from "../../utils"
// import ButtonLink from "../ButtonLink"
// import Paragraph from "../Paragraph"
// import Link from "next/link"
// // import {
//   FieldError,
//   Form,
//   Input,
//   Label,
//   TextField,
// } from "react-aria-components"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { useState } from "react"
import Paragraph from "../Paragraph"
import Link from "next/link"

// const FormSchema = z.object({
//   email: email({
//     message: "Username must be at least 2 characters.",
//   }),
// })

const NewsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
})
const NewsletterSection = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const form = useForm<z.infer<typeof NewsletterSchema>>({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(data: z.infer<typeof NewsletterSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })

    setIsSubmitted(true)
  }
  // const onSubmit = useFormReset()
  return (
    <div className="flex flex-col justify-stretch gap-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full lg:max-w-[481px]"
        >
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      className="!mt-0"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="outline" className="border-black">
              Subscribe
            </Button>
          </div>

          <div className="block">
            <Paragraph className="text-xs ">
              By subscribing you agree to with our {""}
              <Link href="#" className="underline">
                Privacy Policy
              </Link>{" "}
              and provide consent to receive updates from our company.
            </Paragraph>
          </div>
        </form>
      </Form>

      {isSubmitted && (
        <div className="text-green-800 mt-4">
          Redirecting to booking page...
        </div>
      )}

      {/* <Form
        className="flex flex-col gap-4 w-full lg:max-w-[481px]"
        onSubmit={onSubmit}
      >
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
            type="submit"
            variant="btn-border-dark max-sm:w-full"
          />
        </div>

        <div className="block">
          <Paragraph className="text-xs ">
            By subscribing you agree to with our {""}
            <Link href="#" className="underline">
              Privacy Policy
            </Link>{" "}
            and provide consent to receive updates from our company.
          </Paragraph>
        </div>
      </Form> */}
    </div>
  )
}

export default NewsletterSection
