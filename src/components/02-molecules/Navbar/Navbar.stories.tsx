import type { Meta, StoryObj } from "@storybook/react";

import Navbar from "./Navbar";

const meta = {
  title: "components/Molecules/Navbar",
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: (props) => <Navbar />,
};
