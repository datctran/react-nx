const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config) => {
  nrwlConfig(config);
  return {
    ...config,
    plugins: [...config.plugins],
    module: {
      rules: [
        ...config.module.rules,
        {
          test: /\.scss$/,
          loader: 'postcss-loader',
          options: {
            plugins: [
              require('postcss-import'),
              require('tailwindcss')('./tailwind.webpack.config.ts'),
              require('autoprefixer'),
            ],
          },
        },
      ],
    },
  };
};
