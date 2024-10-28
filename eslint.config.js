import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: [],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-empty-object-type': [
      'warn',
    ],
    '@typescript-eslint/no-empty-interface': [
      'warn',
    ],
    '@/no-empty-pattern': [
      'warn',
    ],
    '@typescript-eslint/no-explicit-any': [
      'warn',
    ],
  },
})
