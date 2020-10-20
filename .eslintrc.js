// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['jsx-a11y', 'react', '@typescript-eslint', 'prettier', 'sonarjs'],
  extends: [
    'eslint:recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
  ],
};
