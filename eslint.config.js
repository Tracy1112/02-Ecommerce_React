import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  // General rules for all JS/JSX files
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Allow unused React import (common in React 18 with new JSX transform)
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^(React|error|response)$',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      // Disable prop-types validation (using TypeScript-style props)
      'react/prop-types': 'off',
    },
  },
  // Override for pages and CheckoutForm that export React Router loaders/actions
  // This must come AFTER the general rules to override them
  {
    files: [
      'src/pages/**/*.{js,jsx}',
      'src/components/forms/CheckoutForm.jsx',
    ],
    rules: {
      // Disable Fast Refresh warning for pages with loaders/actions (React Router pattern)
      'react-refresh/only-export-components': 'off',
    },
  },
  // Test files configuration
  {
    files: ['**/*.test.{js,jsx}', '**/test/**/*.{js,jsx}', '**/setup.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        globalThis: 'readonly',
        global: 'readonly',
      },
    },
    rules: {
      'no-undef': 'off', // Allow global variables in test files
      'react-refresh/only-export-components': 'off',
    },
  },
]
