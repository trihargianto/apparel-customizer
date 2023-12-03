import React from "react";
import type { Preview } from "@storybook/react";

import { ApparelProvider } from "../src/contexts/ApparelContext";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
      <ApparelProvider>
        <Story />
      </ApparelProvider>
    ),
  ],
};

export default preview;
