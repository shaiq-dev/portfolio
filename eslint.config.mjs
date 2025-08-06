import { defineConfig } from 'eslint/config'
import prettier from 'eslint-plugin-prettier'
import unusedImports from 'eslint-plugin-unused-imports'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default defineConfig([
  {
    extends: compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),

    plugins: {
      prettier,
      'unused-imports': unusedImports,
    },

    rules: {
      '@next/next/no-img-element': 'off',
      'unused-imports/no-unused-imports': 'error',
      'prettier/prettier': 'error',
      'no-empty': 'error',
      'no-multiple-empty-lines': 'error',
      'no-irregular-whitespace': 'error',
      'linebreak-style': ['error', 'unix'],
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],
      semi: ['error', 'never'],
      'prefer-const': 'error',
      '@typescript-eslint/no-empty-object-type': 'warn',
    },
  },
])
