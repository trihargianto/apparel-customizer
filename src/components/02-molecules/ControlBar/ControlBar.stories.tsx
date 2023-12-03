import type { Meta, StoryObj } from "@storybook/react";

import ControlBar from "./ControlBar";

const meta = {
  title: "components/Molecules/ControlBar",
  component: ControlBar,
} satisfies Meta<typeof ControlBar>;

export default meta;

type Story = StoryObj<typeof ControlBar>;

export const Default: Story = {
  render: (props) => <ControlBar />,
};
