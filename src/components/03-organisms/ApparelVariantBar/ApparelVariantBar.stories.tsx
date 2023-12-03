import type { Meta, StoryObj } from "@storybook/react";

import ApparelVariantBar from "./ApparelVariantBar";

const meta = {
  title: "components/Organisms/ApparelVariantBar",
  component: ApparelVariantBar,
} satisfies Meta<typeof ApparelVariantBar>;

export default meta;

type Story = StoryObj<typeof ApparelVariantBar>;

export const Default: Story = {
  render: (props) => <ApparelVariantBar />,
};
