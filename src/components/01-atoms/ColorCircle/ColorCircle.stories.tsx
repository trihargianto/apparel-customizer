import type { Meta, StoryObj } from "@storybook/react";

import ColorCircle, { colors } from "./ColorCircle";

const meta = {
  title: "components/ColorCircle",
  component: ColorCircle,
  argTypes: {
    color: {
      control: "select",
      options: colors,
    },
  },
  args: {
    color: "black",
  },
} satisfies Meta<typeof ColorCircle>;

export default meta;

type Story = StoryObj<typeof ColorCircle>;

export const Default: Story = {
  render: ({ ...props }) => <ColorCircle {...props}>Click Me</ColorCircle>,
};

export const Colors: Story = {
  render: () => (
    <>
      <ColorCircle color="black" />
      <ColorCircle color="gray" />
      <ColorCircle color="navy" />
      <ColorCircle color="white" />
    </>
  ),
};
