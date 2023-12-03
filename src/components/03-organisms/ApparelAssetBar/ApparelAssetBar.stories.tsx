import type { Meta, StoryObj } from "@storybook/react";

import ApparelAssetBar from "./ApparelAssetBar";

const meta = {
  title: "components/Organisms/ApparelAssetBar",
  component: ApparelAssetBar,
} satisfies Meta<typeof ApparelAssetBar>;

export default meta;

type Story = StoryObj<typeof ApparelAssetBar>;

export const Default: Story = {
  render: (props) => <ApparelAssetBar />,
};
