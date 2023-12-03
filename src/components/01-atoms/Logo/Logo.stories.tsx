import type { Meta, StoryObj } from "@storybook/react";

import Logo from "./Logo";

const meta = {
  title: "components/Atoms/Logo",
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  render: (props) => <Logo />,
};
