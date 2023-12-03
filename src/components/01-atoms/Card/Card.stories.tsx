import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

const meta = {
  title: "components/Atoms/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (props) => <Card {...props}>Put the content here</Card>,
};

export const Border: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <Card isBordered>Bordered</Card>
      <Card isBordered={false}>Borderless</Card>
    </div>
  ),
};
