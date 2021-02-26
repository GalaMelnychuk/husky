module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-nested-ternary': 2,
    'object-shorthand': [2, 'always'],
    'react/jsx-curly-brace-presence': [2, 'never'],
  },
};
