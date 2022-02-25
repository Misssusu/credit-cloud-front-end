module.exports = {
  root: true,
  overrides: [
    {
      files: ['**/*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
      extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      env: {
        node: true,
        es2021: true,
      },
      rules: {},
    },
    {
      env: {
        'shared-node-browser': true,
        es2021: true,
      },
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      parser: 'espree',
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
      env: {
        node: true,
        es2021: true,
      },
      rules: {},
    },
  ],
  ignorePatterns: ['node_modules/', 'dist/'],
}
