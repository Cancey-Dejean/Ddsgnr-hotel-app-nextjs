import { selectOptions } from "../../../constants/fakeData"
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components"

import { TfiAngleDown } from "react-icons/tfi"

type Option = (typeof selectOptions)[number]["name"]

type SelectDropdownProps = {
  label?: string
  selectOptions?: Option[]
}

const SelectDropdown = ({
  label = "Label",
  selectOptions = [],
}: SelectDropdownProps) => {
  return (
    <Select className="w-full">
      <Label className="block mb-2">{label}</Label>
      <Button className="min-w-[200px] h-[47px] px-[14px] w-full flex items-center gap-4 justify-between border rounded-[4px] border-black/20">
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
