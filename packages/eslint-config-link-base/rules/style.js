module.exports = {
    rules: {
        // 使用 4 个空格缩进
        'indent': [
            2,
            4,
            {
                SwitchCase: 1
            }
        ],
        // 使用驼峰命名或者 UPPERCASE_WITH_UNDERSCORES
        'camelcase': [2, { properties: 'never' }],
        // 使用单引号
        'quotes': [2, 'single', { allowTemplateLiterals: true }],
        // 使用分号
        'semi': [2, 'never'],
        // 单行可省略{}，其他情况不允许省略
        'curly': [2, 'multi-line'],
        // 数组中起始位置是否需要空格
        'array-bracket-spacing': [2, 'never'],
        // 设置{}风格
        'brace-style': [2, '1tbs', { allowSingleLine: true }],
        // 不允许在数组或对象最后一项使用逗号
        'comma-dangle': [2, 'never'],
        // 在分号前不适用空格，分号后使用空格
        'comma-spacing': 2,
        // 分号风格，默认放在行尾
        'comma-style': 2,
        // 在变量属性中禁用空格
        'computed-property-spacing': 2,
        // 优先使用点表示法
        'dot-notation': 2,
        // 文件以新行结尾
        'eol-last': 2,
        // 在函数标识和 () 之间禁用空格
        'func-call-spacing': 2,
        // JSX 使用双引号
        'jsx-quotes': [2, 'prefer-double'],
        // 在 key 和 value 之间的空格一个空格
        'key-spacing': 2,
        // 在关键字前后使用空格
        'keyword-spacing': 2,
        // "no-mixed-operators": 0,
        'no-mixed-spaces-and-tabs': 2, // eslint:recommended
        // 最大两行空白
        'no-multiple-empty-lines': [2, { max: 2 }],
        // 禁用多个空格
        'no-multi-spaces': 2,
        // 禁用 tabs
        'no-tabs': 2,
        // 禁用行末额外的空白
        'no-trailing-spaces': 2,
        // 属性前没有空白
        'no-whitespace-before-property': 2,
        // 在对象 {} 中使用空格
        'object-curly-spacing': [2, 'always'],
        // 在块中禁用大量空白填充
        'padded-blocks': [2, 'never'],
        // 在需要使用引号时该对象所有属性都使用引号
        'quote-props': [2, 'consistent'],
        'semi-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        // 在块语句前使用空格
        'space-before-blocks': 2,
        // 在函数声明后禁用空格
        'space-before-function-paren': [2, 'never'],
        // 在中缀操作符之间需要空格
        'space-infix-ops': [2, { int32Hint: false }],
        // 在一元运算符前后禁用空格
        'space-unary-ops': 2,
        // 在括号首尾禁用空格
        'space-in-parens': 2,
        // 在注释后使用空格
        'spaced-comment': [2, 'always']
        // 行注释位置
        // "line-comment-position": 2,
    }
}
