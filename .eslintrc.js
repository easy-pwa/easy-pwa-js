module.exports = {
    parser:  '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'airbnb-base',
      "plugin:@typescript-eslint/eslint-recommended",
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    rules: {
      '@typescript-eslint/no-var-requires': "off",
      'class-methods-use-this': 'off',
      'max-len': ['error', {
        "code": 130
      }],
      'global-require': 'off',
      'import/extensions': ['error', {
         'ts': 'never'
      }],
      'import/no-named-default': 'off',
      'no-unused-expressions': 'off',
      'quotes': 'error',
      'semi': 'error',
      'comma-dangle': ['error', {
        'arrays': 'always',
        'objects': 'always',
      }],
      '@typescript-eslint/ban-ts-ignore': 'off',
      'import/order': [
        'error',
        {
          "newlines-between": 'always',
          'groups': [['builtin', 'external',], ['internal', 'parent', 'sibling', 'index']]
        },
      ],
    },
    env: {
      browser: true,
    },
    'overrides': [{
      'files': ['sw-index.ts', 'src/ts/ServiceWorker/**/*'],
      env: {
        serviceworker: true
      },
      rules: {
        'no-restricted-globals': 'off',
        'no-throw-literal': 'off',
      }
    }, {
      'files': ['Configuration.ts'],
      rules: {
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }],
    settings: {
      'import/resolver': 'webpack',
    },
    parserOptions:  {
        ecmaVersion:  2018,
        sourceType:  'module',
    },
};
