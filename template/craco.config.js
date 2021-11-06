const cracoAlias = require('craco-alias');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.path.json',
      },
    },
  ],
  style: {
    postcss: {
      plugins: [tailwind, autoprefixer],
    },
  },
};
