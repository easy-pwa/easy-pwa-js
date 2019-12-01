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
      '@typescript-eslint/no-inferrable-types': "off",
      '@typescript-eslint/no-var-requires': "off",
      'import/extensions': 'off',
      'class-methods-use-this': 'off',
      'max-len': ['error', {
        "code": 130
      }],
      'global-require': 'off',
      'import/prefer-default-export': 'off',
    },
    env: {
      browser: true,
    },
    'overrides': [{
      'files': ['service-worker-base.ts'],
      rules: {
        'no-restricted-globals': 'off',
        'no-throw-literal': 'off',
      }
    }],
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.ts', '.d.ts']
        }
      },
    },
    parserOptions:  {
        ecmaVersion:  2018,
        sourceType:  'module',
    },
};
