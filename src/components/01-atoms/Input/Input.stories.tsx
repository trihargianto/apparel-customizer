import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta = {
  title: "components/Atoms/Input",
  component: Input,
  argTypes: {
    label: { type: "string" },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (props) => (
    <div className="flex items-center gap-3">
      <Input size="xs" placeholder="Xtra Small" />
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    label: "With Label",
  },
};
