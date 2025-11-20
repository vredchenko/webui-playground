import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      // Automatically run accessibility tests on all stories
      config: {
        rules: [
          {
            // Enable color contrast checking
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
  },
};

export default preview;