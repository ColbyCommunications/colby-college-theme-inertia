/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import tailwindcss from "@tailwindcss/vite";
const config = {
  stories: [
    "../resources/js/components/**/*.stories.mdx",
    "../resources/js/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/vue3-vite",
  async viteFinal(config) {
    config.plugins.push(tailwindcss());

    if (configType === "PRODUCTION") {
      config.base = "./";
    }
    return config;
  },
};
export default config;
