import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    plugins: {
      'react-hooks': reactHooks.config,
      prettier: prettierPlugin,

    },
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/pro-type': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explict-module-boundary-types': 'off',
        'prettier/prettier': 'error'
      },
      settings: {
        'react': {
          'version': 'detect'
        }
      }
  },
  eslintConfigPrettier
];
