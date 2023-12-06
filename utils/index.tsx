import { FormEvent } from "react"

export const useFormReset = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("form submitted")
    e.preventDefault()
    e.currentTarget.reset()
  }

  return onSubmit
}
