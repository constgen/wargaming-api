'use strict';

module.exports = {
  use: [
    'neutrino-preset-eslintrc',
    ['neutrino-preset-umd', {
      library: 'wg',
      filename: 'wg'
    }],
    // '@neutrinojs/jest'
  ]
}