import type { Meta, StoryObj } from "@storybook/react"
import ReviewBlock from "./"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/ReviewBlock",
  component: ReviewBlock,
  args: {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    reviewer: "First Last",
    imgSrc: "https://dummyimage.com/572x594.png/dddddd/ffffff",
    imgAlt: "Image",
    stars: 5,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    stars: {
      control: {
        type: "range",
        min: 1,
        max: 5,
      },
    },
  },
} satisfies Meta<typeof ReviewBlock>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <ReviewBlock {...args} />
  },
}
