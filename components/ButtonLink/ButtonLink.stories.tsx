import type { Meta, StoryObj } from "@storybook/react"
import ButtonLink from "."

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/ButtonLink",
  component: ButtonLink,
  args: {
    size: "btn-size-base",
    url: "/",
    className: "",
    type: "button",
    icon: false,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "btn-primary",
        "btn-inverted",
        "btn-border-dark",
        "btn-border-none",
        "btn-border-light",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["btn-size-base", "btn-size-small"],
    },
  },
} satisfies Meta<typeof ButtonLink>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Single: Story = {
  render: (args) => {
    return <ButtonLink {...args} />
  },
}
