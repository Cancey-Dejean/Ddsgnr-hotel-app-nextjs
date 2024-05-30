import type { Meta, StoryObj } from "@storybook/react"
import VacationFeatures from "."
import { BsFillBoxFill } from "react-icons/bs"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  tags: ["autodocs"],
  title: "Sections/Vacation/Features",
  component: VacationFeatures,
  args: {
    icon: <BsFillBoxFill />,
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    icon: { control: false },
  },
} satisfies Meta<typeof VacationFeatures>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <VacationFeatures {...args} />
  },
}
