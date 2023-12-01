import type { Meta, StoryObj } from "@storybook/react"
import VacationSection from "./"
import { featuresDataFake, perksButtonsFake } from "../../constants/fakeData"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  tags: ["autodocs"],
  title: "Sections/Vacation",
  component: VacationSection,
  args: {
    btnData: perksButtonsFake,
    featuresDataVacation: featuresDataFake,
    mainImg: "https://dummyimage.com/572x594.png/dddddd/ffffff",
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof VacationSection>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <VacationSection {...args} />
  },
}
