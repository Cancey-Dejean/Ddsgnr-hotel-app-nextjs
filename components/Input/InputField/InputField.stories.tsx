import type { Meta, StoryObj } from "@storybook/react"
import Input from "./"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  tags: ["autodocs"],
  title: "Components/Input/InputField",
  component: Input,
  args: {
    label: "Label",
    id: "inputID",
    type: "text",
    defaultValue: "Default Value",
    minLength: 1,
    placeholder: "Placeholder",
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: "text" },
    id: { control: "text" },
    type: {
      control: { type: "select" },
      options: ["text", "number", "email", "password", "date"],
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <Input {...args} />
  },
}
