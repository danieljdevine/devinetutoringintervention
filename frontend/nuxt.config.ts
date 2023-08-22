import { NuxtConfig } from '@nuxt/types';
import { Configuration as WebpackConfiguration } from 'webpack';

const config: NuxtConfig = {
  mode: 'universal',
  head: {
    title: 'Vue Nuxt Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ]
  },
  build: {
    publicPath: `/${require('./secrets.json').NODE_ENV}/_nuxt/`,
    extend(config: WebpackConfiguration, { isDev, isClient }: { isDev: boolean; isClient: boolean; }) {
      if (isDev && isClient) {
        if (!config.module) {
          config.module = { rules: [] };
        }
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(ts|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  buildModules: [
    '@nuxt/typescript-build',
  ],
  srcDir: 'client/',
  performance: {
    gzip: false
  },
  dev: false
}

export default config;
