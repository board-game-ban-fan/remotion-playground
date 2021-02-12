module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-knobs/register",
    "@storybook/addon-storysource",
  ],
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: ["style-loader", "css-loader", "sass-loader"],
  //     include: path.resolve(__dirname, "../")
  //   });

  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     loader: require.resolve("babel-loader"),
  //     options: {
  //       presets: [["react-app", { flow: false, typescript: true }]]
  //     }
  //   });
  //   config.resolve.extensions.push(".ts", ".tsx");

  //   return config;
  // }
};
