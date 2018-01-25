module.exports = {
    extends: [
        './rules/best-practices',
        './rules/node',
        './rules/style',
        './rules/variables',
        './rules/es6',
        './rules/imports',
        './rules/jsdoc'
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    rules: {
        strict: 2
    }
}
