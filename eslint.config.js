import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    // Ignore build folder, config files
    ignores: ['dist', 'eslint.config.js', 'vite.config.js', 'tailwind.config.js'],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // Core JS recommendations
      ...js.configs.recommended.rules,

      // React plugin recommendations
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat['jsx-runtime'].rules,

      // React Hooks plugin recommendations
      ...reactHooks.configs.recommended.rules,

      // Vite HOt Module Replacement (HMR) plugin recommendations
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true, },
      ],

      // stupid legacy prop-types validation rule
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: 'detect', // detects the version of React to use
      },
    },
  },
]