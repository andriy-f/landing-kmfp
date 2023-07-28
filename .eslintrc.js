module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'react-app',
    // 'react-app/jest',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'semi': ['warn', 'never'],
    'quotes': ['warn', 'single'],
  }
}
