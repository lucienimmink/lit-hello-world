import { createSpaConfig } from '@open-wc/building-rollup';
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import merge from 'deepmerge';
import filesize from 'rollup-plugin-filesize';

const baseConfig = createSpaConfig({
  // eslint-disable-next-line no-undef
  developmentMode: process.env.ROLLUP_WATCH === 'true',
  injectServiceWorker: false,
  workbox: false,
});

export default merge(baseConfig, {
  input: './index.html',
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled',
      presets: [
        [
          // eslint-disable-next-line no-undef
          require.resolve('@babel/preset-env'),
          {
            targets: [
              'last 3 Chrome major versions',
              'last 2 Firefox major versions',
              'last 3 Edge major versions',
              'last 2 Safari major versions',
            ],
            modules: false,
            bugfixes: true,
          },
        ],
      ],
      plugins: [
        [
          // eslint-disable-next-line no-undef
          require.resolve('babel-plugin-template-html-minifier'),
          {
            modules: { lit: ['html', { name: 'css', encapsulation: 'style' }] },
            failOnError: false,
            strictCSS: true,
            htmlMinifier: {
              collapseWhitespace: true,
              conservativeCollapse: true,
              removeComments: true,
              caseSensitive: true,
              minifyCSS: true,
            },
          },
        ],
      ],
    }),
    filesize(),
  ],
  manualChunks: moduleID => {
    if (moduleID.includes('node_modules')) {
      return 'vendor';
    }
    return 'main';
  },
  output: [
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name]-[hash].js',
      chunkFileNames: '[name]-[hash].js',
    },
  ],
});
