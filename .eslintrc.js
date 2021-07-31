module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'prettier',
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'max-len': ['error', { code: 120, ignoreUrls: true }],
    semi: ['error', 'never'],
    'no-unexpected-multiline': '',
  },
}
