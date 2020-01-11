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
      'import/no-named-default': 'off'
    },
    env: {
      browser: true,
    },
    'overrides': [{
      'files': ['service-worker-base.ts', 'src/ts/sw/**/*'],
      env: {
        serviceworker: true
      },
      rules: {
        'no-restricted-globals': 'off',
        'no-throw-literal': 'off',
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
