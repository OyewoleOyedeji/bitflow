module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    jquery: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  rules: {}
}
