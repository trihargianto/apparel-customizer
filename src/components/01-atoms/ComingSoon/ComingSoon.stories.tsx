import type { Meta, StoryObj } from "@storybook/react";

import ComingSoon from "./ComingSoon";

const meta = {
  title: "components/Atoms/ComingSoon",
  component: ComingSoon,
} satisfies Meta<typeof ComingSoon>;

export default meta;

type Story = StoryObj<typeof ComingSoon>;

export const Default: Story = {};
