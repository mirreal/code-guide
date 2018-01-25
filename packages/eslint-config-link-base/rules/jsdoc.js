module.exports = {
    rules: {
        // 需要使用 JSDoc
        // "require-jsdoc": [2, {
        //     "require": {
        //         "FunctionDeclaration": true,
        //         "MethodDefinition": false,
        //         "ClassDeclaration": false,
        //     },
        // }],
        // 配置 JSDoc 规则
        'valid-jsdoc': [
            2,
            {
                requireParamDescription: false,
                requireReturnDescription: false,
                requireReturn: false,
                prefer: { returns: 'return' }
            }
        ]
    }
}


