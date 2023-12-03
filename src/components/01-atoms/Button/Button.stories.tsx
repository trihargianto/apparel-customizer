import type { Meta, StoryObj } from "@storybook/react";

import Button, { buttonVariants, buttonSizes } from "./Button";

const meta = {
  title: "components/Button",
  component: Button,
  argTypes: {
    size: {
      control: "select",
      options: buttonSizes,
    },
    variant: {
      control: "select",
      options: buttonVariants,
    },
  },
  args: {
    variant: "primary",
    size: "md",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: ({ ...props }) => <Button {...props}>Click Me</Button>,
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="naked">Naked</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
    </div>
  ),
};
