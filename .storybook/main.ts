import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@whitespace/storybook-addon-html",
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  docs: {},

  //👈 Configures the static asset folder in Storybook
  staticDirs: ["../public", "../public/images"],

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
}
export default config
