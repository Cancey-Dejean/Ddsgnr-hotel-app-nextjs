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
import { useEffect, useState } from "react"
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
  const [showMessage, setShowMessage] = useState(false)

  const newsletterForm = useForm<z.infer<typeof NewsletterSchema>>({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(data: z.infer<typeof NewsletterSchema>) {
    newsletterForm.reset()
    setIsSubmitted(true)
    setShowMessage(true)
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false)
      }, 3000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [showMessage])

  return (
    <div className="flex flex-col justify-stretch gap-4">
      <Form {...newsletterForm}>
        <form
          onSubmit={newsletterForm.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full lg:max-w-[481px]"
        >
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={newsletterForm.control}
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

      {showMessage && (
        <div className="bg-green-100 text-green-800 py-2 px-5 rounded-md mt-4">
          Thank you for subscribing!
        </div>
      )}
    </div>
  )
}

export default NewsletterSection
