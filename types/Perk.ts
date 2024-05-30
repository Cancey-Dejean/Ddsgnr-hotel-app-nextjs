import { ButtonProps } from "@/components/ui/button"

export type PerkProps = {
  _key?: string
  title?: string
  description?: string
  icon?: "LiaSwimmerSolid" | "TbMassage" | "CgGym" | "MdOutlineFoodBank"
  ctaButtons: ButtonProps[]
}
