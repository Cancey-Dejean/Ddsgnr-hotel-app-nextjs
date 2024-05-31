import React from "react"
import { BsFillBoxFill } from "react-icons/bs"
import { CgGym } from "react-icons/cg"
import { MdOutlineFoodBank } from "react-icons/md"
import { TbMassage } from "react-icons/tb"

const VacationFeatures = ({
  icon,
  title,
  description,
}: {
  /**
   * Description goes here
   */
  icon?: React.ReactNode
  /**
   * Description goes here
   */
  title?: string
  /**
   * Description goes here
   */
  description?: string
}) => {
  const renderIcon = () => {
    switch (icon) {
      case "Swimmer":
        return <BsFillBoxFill className="text-xl" />
      case "Massage":
        return <TbMassage />
      case "Gym":
        return <CgGym />
      case "Food":
        return <MdOutlineFoodBank />
      case "None":
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="h-12 w-12 [&_svg]:h-full [&_svg]:w-full">
        {renderIcon()}
      </div>

      <h2 className="text-2xl font-bold text-black">{title}</h2>

      <p>{description}</p>
    </div>
  )
}

export default VacationFeatures
