/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import tailwindcss from "@tailwindcss/vite";

const config = {
  stories: [
    "../resources/js/components/**/*.mdx",
    "../resources/js/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/vue3-vite",
  async viteFinal(config, { configType }) {
    config.plugins.push(tailwindcss());

    if (configType === "PRODUCTION") {
      // Use the environment variable set by GitHub Actions, or fallback to your relative path
      config.base = process.env.STORYBOOK_BASE || "./";
    }
    return config;
  },
};
export default config;