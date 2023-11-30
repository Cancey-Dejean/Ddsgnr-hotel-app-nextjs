import React, { ReactNode } from "react"
import { BsFillBoxFill } from "react-icons/bs"

const VacationFeatures = ({
  icon = <BsFillBoxFill />,
  title = "Title",
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}: {
  /**
   * Description goes here
   */
  icon?: ReactNode
  /**
   * Description goes here
   */
  title?: string
  /**
   * Description goes here
   */
  desc?: string
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-12 w-12 [&_svg]:h-full [&_svg]:w-full">{icon}</div>

      <h2 className="text-2xl font-bold text-black">{title}</h2>

      <p>{desc}</p>
    </div>
  )
}

export default VacationFeatures
