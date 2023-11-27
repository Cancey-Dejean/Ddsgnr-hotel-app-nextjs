import { FieldError, Input, Label, TextField } from "react-aria-components"

type Props = {
  label: string
  id: string
  type: string
  defaultValue?: string
  placeholder?: string
  isRequired?: boolean
  isDisabled?: boolean
} & React.ComponentProps<typeof TextField>

const InputField = ({
  label = "Label",
  name = "name",
  id = "inputID",
  type = "text",
  defaultValue = "Default Value",
  placeholder,
  isRequired = false,
  isDisabled = false,
}: Props) => {
  return (
    <>
      {/* <TextField
        name={name}
        className="flex flex-col rounded-[4px]"
        isRequired={isRequired}
        isDisabled={isDisabled}
      >
       
      </TextField> */}

      {/* Label */}
      {label !== "" && (
        <Label htmlFor={id} className="mb-2 text-base">
          {label}
        </Label>
      )}

      {/* Input */}
      <Input
        className="border rounded-[4px] border-black/20 h-[47px] w-full data-[hovered]:border-black py-4 px-[14px]"
        type={type}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />

      {/* Error Text */}
      <FieldError />
    </>
  )
}

export default InputField
