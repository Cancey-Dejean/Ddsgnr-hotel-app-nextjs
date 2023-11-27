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
  id = "inputID",
  type = "text",
  defaultValue = "Default Value",
  placeholder,
  isRequired = false,
  isDisabled = false,
}: Props) => {
  return (
    <>
      <TextField
        className="flex flex-col rounded-[4px]"
        isRequired={isRequired}
        isDisabled={isDisabled}
      >
        {/* Label */}
        {label !== "" && (
          <Label htmlFor={id} className="mb-2 text-base">
            {label}
          </Label>
        )}

        {/* Input */}
        <div>
          <Input
            className="border rounded-[4px] border-black/20 h-[47px] w-full data-[hovered]:border-black py-4 px-[14px]"
            type={type}
            id={id}
            defaultValue={defaultValue}
            placeholder={placeholder}
          />
        </div>

        {/* Error Text */}
        <div>
          <FieldError />
        </div>
      </TextField>
    </>
  )
}

export default InputField
