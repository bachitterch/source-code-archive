module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ['next/core-web-vitals', 'prettier', 'eslint:recommended'],
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
    'no-unused-vars': 0,
    'no-undef': 0,
    'no-console': 'warn',
    'react/prop-types': 0,
    'no-case-declarations': 0,
    'import/no-anonymous-default-export': [
      'error',
      { allowArrowFunction: true }
    ],
    '@next/next/no-img-element': 0
  }
}
