import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  viteFinal: async (config) => {
    // Use relative paths so assets resolve correctly on GitHub Pages subpath deployments.
    config.base = './';

    // Storybook's mocker plugin injects vite-inject-mocker-entry.js with an absolute
    // root path that ignores Vite's base config, causing a 404 on subpath deployments.
    // This plugin rewrites it to a relative path after all other HTML transforms.
    config.plugins = config.plugins || [];
    config.plugins.push({
      name: 'fix-storybook-mocker-base-path',
      transformIndexHtml: {
        order: 'post',
        handler(html: string) {
          return html.replace(
            'src="/vite-inject-mocker-entry.js"',
            'src="./vite-inject-mocker-entry.js"',
          );
        },
      },
    });

    return config;
  }
};
export default config;