module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        process: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        // フォーマットの設定はここでは行わない。全て.prettierrc.jsで行う。
        'no-unused-vars': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        'react/prop-types': 'off',
        'react/self-closing-comp': [
            'error',
            {
                'component': true,
                'html': true,
            },
        ],
    },
};
