import type { StorybookConfig } from "@storybook/react-webpack5";


const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",

    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    
    if(config.module && config.module.rules){
      config.module.rules.push({
        test: /\.styl$/,
          use: [
               'style-loader',
              {
                  loader: "css-loader",
                  options: {
                      modules: {
                          localIdentName: '[name].[hash:base64:8]',
                      }
                  },
              },
            'stylus-loader',
          ],
      });
    }

    // Return the altered config
    return config;
  }
};
export default config;
