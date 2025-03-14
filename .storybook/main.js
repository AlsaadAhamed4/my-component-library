module.exports = {
  stories: ['../src/**/*.(js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    "@storybook/addon-knobs",
    '@storybook/addon-contexts/register',
    '@storybook/addon-backgrounds/register',
    "@storybook/addon-a11y/register",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ],
};
