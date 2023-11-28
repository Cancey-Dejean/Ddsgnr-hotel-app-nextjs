import type { Meta, StoryObj } from "@storybook/react"
import Hero from "./"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  tags: ["autodocs"],
  title: "Sections/Hero",
  component: Hero,
  args: {
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bgImage: "https://dummyimage.com/1440x960.png/dddddd/ffffff",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    buttonGroup: {
      control: false,
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <Hero {...args} />
  },
}
