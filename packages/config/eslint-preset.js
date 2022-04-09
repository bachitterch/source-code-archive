module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['next/core-web-vitals', 'prettier', 'eslint:recommended'],
  plugins: ['prettier'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/']
    }
  },
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': 1,
    'no-console': 1,
    'react/prop-types': 0
  }
}
