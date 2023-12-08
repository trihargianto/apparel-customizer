import type { Meta, StoryObj } from "@storybook/react";

import ShapePicker from "./ShapePicker";

const meta = {
  title: "components/Molecules/ShapePicker",
  component: ShapePicker,
} satisfies Meta<typeof ShapePicker>;

export default meta;

type Story = StoryObj<typeof ShapePicker>;

export const Default: Story = {
  render: () => (
    <div className="w-[560px]">
      <ShapePicker />
    </div>
  ),
};
