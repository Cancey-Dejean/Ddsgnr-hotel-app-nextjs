import type { Meta, StoryObj } from "@storybook/react"
import CardRoom from "./"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  tags: ["autodocs"],
  title: "Components/CardRoom",
  component: CardRoom,
  args: {
    imgSrc: "/images/card-image.jpg",
    imgAlt: "card image",
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    className: "",
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CardRoom>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FeaturedCard: Story = {
  render: (args) => {
    return <CardRoom {...args} />
  },
}
export const SmallCard: Story = {
  render: (args) => {
    return <CardRoom smallCard {...args} />
  },
}
