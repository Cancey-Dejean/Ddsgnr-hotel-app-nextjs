import { selectOptions } from "../../../constants/fakeData"
import {
  Button,
  FieldError,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components"

import { TfiAngleDown } from "react-icons/tfi"

type SelectDropdownProps = {
  label?: string
  name: string
  id: string
  required?: boolean
  placeholder?: string
  selectOptions?: typeof selectOptions
}

const SelectDropdown = ({
  label = "Label",
  name = "select",
  id = "select",
  placeholder = "Choose one...",
  selectOptions = ["Option 1", "Option 2", "Option 3", "Option 4"],
  required = false,
}: SelectDropdownProps) => {
  return (
    <Select
      className="w-full"
      name={name}
      id={id}
      placeholder={placeholder}
      isRequired={required}
    >
      <Label className="block mb-2">{label}</Label>
      <Button className="min-w-[200px] h-[47px] px-[14px] w-full flex items-center gap-4 justify-between border rounded-[4px] border-black/20 aria-[invalid]:border-red-500">
        <SelectValue />
        <span aria-hidden="true">
          <TfiAngleDown />
        </span>
      </Button>

      <Popover className="max-w-[var(--trigger-width)] w-full rounded-[4px]">
        <ListBox className="bg-white shadow-select p-[6px] focus-visible:outline-0">
          {selectOptions.map((option) => (
            <ListBoxItem key={option} className="p-2 data-[hovered]:bg-black/5">
              {option}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </Select>
  )
}

export default SelectDropdown
