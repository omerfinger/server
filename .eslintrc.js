module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'warn',
    'class-methods-use-this': 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement']
  }
};
