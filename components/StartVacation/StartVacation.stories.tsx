import type { Meta, StoryObj } from "@storybook/react"
import StartVacation from "./"
import { vacationButtonsFake } from "../../constants/fakeData"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Sections/StartVacation",
  component: StartVacation,
  args: {
    title: "Section Title",
    videoImg: "https://dummyimage.com/572x594.png/dddddd/ffffff",
    btnData: vacationButtonsFake,
  },
  argTypes: {
    btnData: {
      control: false,
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof StartVacation>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <StartVacation {...args} />
  },
}
