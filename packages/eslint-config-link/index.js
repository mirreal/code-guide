module.exports = {
    extends: [
        'eslint-config-link-base',
        './rules/react'
    ].map(require.resolve),
    rules: {}
}
