import type { Meta, StoryObj } from "@storybook/react"
import ButtonGroup from "./"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  tags: ["autodocs"],
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  args: {
    buttons: [
      {
        label: "Button",
        variant: "btn-primary",
        url: "/",
        linkable: true,
        icon: false,
        className: "",
      },
      {
        label: "Button",
        variant: "btn-border-dark",
        url: "/",
        linkable: true,
        icon: false,
        className: "",
      },
    ],
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    buttons: {
      control: false,
    },
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <ButtonGroup {...args} />
  },
}
