module.exports = {
    extends: [
        'eslint:recommended'
    ],
    rules: {
        // 使用 === 和 !==
        'eqeqeq': [2, 'always'],
        // 禁用不必要的布尔转换
        'no-extra-boolean-cast': 2,
        // 设置对 this 的引用
        'consistent-this': [2, 'ctx'],
        // 最深嵌套 4 层
        'max-depth': [2, { max: 4 }],
        // 最大行长
        'max-len': [
            2,
            {
                code: 120,
                ignoreUrls: true,
                ignoreComments: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true
            }
        ],
        // 文件最大行数
        'max-lines': [
            2,
            {
                max: 600,
                skipBlankLines: true,
                skipComments: true
            }
        ],
        // 函数最多参数
        'max-params': [2, { max: 10 }],
        // 每行最大语句条数为 2
        'max-statements-per-line': [2, { max: 2 }],
        // 函数最大语句条数
        'max-statements': [0, { max: 16 }],
        // 使用 new 实例化对象，类名大写字母开头
        'new-cap': 2,
        // 不使用 Array 构造函数
        'no-array-constructor': 2,
        'no-lonely-if': 2,
        // 禁用 Object 构造函数
        'no-new-object': 2,
        // 禁用不需要的三元表达式
        'no-unneeded-ternary': 2,
        // 单独使用声明
        'one-var': [
            2,
            {
                var: 'never',
                let: 'never',
                const: 'never'
            }
        ]
    }
}
