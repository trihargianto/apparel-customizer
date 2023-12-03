import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

const meta = {
  title: "components/Atoms/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (props) => <Card>Put the content here</Card>,
};
