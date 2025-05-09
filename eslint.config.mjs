import antfu from '@antfu/eslint-config';

import nextPlugin from '@next/eslint-plugin-next';
import jestDom from 'eslint-plugin-jest-dom';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import playwright from 'eslint-plugin-playwright';
import testingLibrary from 'eslint-plugin-testing-library';

// import noduplicateTabValues from './src/eslint/no-duplicate-tab-values.mjs';

const eslintConfig = antfu({
  react: true,
  typescript: true,

  lessOpinionated: true,
  isInEditor: false,

  stylistic: {
    semi: true,
  },

  formatters: {
    css: true,
  },

  ignores: [
    'migrations/**/*',
    'next-env.d.ts',
  ],
}, jsxA11y.flatConfigs.recommended, {
  plugins: {
    '@next/next': nextPlugin,
    // 'no-duplicate-tab-values': noduplicateTabValues
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs['core-web-vitals'].rules,
  },
}, {
  files: [
    '**/*.test.ts?(x)',
  ],
  ...testingLibrary.configs['flat/react'],
  ...jestDom.configs['flat/recommended'],
}, {
  files: [
    '**/*.spec.ts',
    '**/*.e2e.ts',
  ],
  ...playwright.configs['flat/recommended'],
}, {
  rules: {
    'antfu/no-top-level-await': 'off', // Allow top-level await
    'style/brace-style': ['error', '1tbs'], // Use the default brace style
    'ts/consistent-type-definitions': ['error', 'type'], // Use `type` instead of `interface`
    'react/prefer-destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it"s a pain to add a new variable
    'node/prefer-global/process': 'off', // Allow using `process.env`
    'test/padding-around-all': 'error', // Add padding in test files
    'test/prefer-lowercase-title': 'off', // Allow using uppercase titles in test titles

    // Custom rules @locT
    // 'custom-rules/no-duplicate-tab-values': 'error',
    // 'react/no-unstable-context-value': 'off',
    'semi': ['error', 'always'],
    'indent': [0, 2],
    // "quotes": ["error", "single"],
    'jsx-quotes': ['error', 'prefer-double'],
    'space-in-parens': ['error', 'never'],
    'object-curly-spacing': [0, 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'space-before-blocks': ['error', 'always'],
    'spaced-comment': ['error', 'always'],
    'block-spacing': ['error', 'never'],
    'space-before-function-paren': [0, 'never'],
    'no-trailing-spaces': ['error', { ignoreComments: true }],
    'eol-last': ['error', 'always'],
    'jsx-a11y/no-static-element-interactions': 'off',

    // ES6 features
    'no-var': ['error'],
    'prefer-const': ['error', { destructuring: 'all' }],

    // Code style
    'curly': ['error', 'multi-line'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'no-mixed-spaces-and-tabs': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'space-infix-ops': 'error',
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'comma-style': ['error', 'last'],
    // 'comma-dangle': ['error', {
    //   arrays: 'always-multiline',
    //   objects: 'always-multiline',
    //   imports: 'never',
    //   exports: 'never',
    // }],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],

    // React rules
    'react-dom/no-unknown-property': ['error', { ignore: ['css', 'jsx'] }],
    'import/no-deprecated': 'error',
    'style/jsx-curly-spacing': ['error', { when: 'never', allowMultiline: true, children: true }],
    'style/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',

    // Unused imports
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'none',
        argsIgnorePattern: '^_',
      },
    ],

    // Others
    'no-console': 0,
    'eqeqeq': 'error',
    'keyword-spacing': 'error',
    'no-case-declarations': 'off',
  },
});

export default eslintConfig;
