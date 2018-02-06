module.exports = {
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
        // 在条件表达式禁用赋值运算符
        'no-cond-assign': 2,
        // 禁用 console
        'no-console': 2,
        // 在条件语句禁用常量表达式
        'no-constant-condition': 2,
        // 在正则表达式禁用控制字符
        'no-control-regex': 2,
        // 禁用 debugge
        'no-debugger': 2,
        // 在函数声明禁用重复参数
        'no-dupe-args': 2,
        // 在对象字面量禁用重复 key
        'no-dupe-keys': 2,
        // 在 switch 禁用重复 case
        'no-duplicate-case': 2,
        // 在正则表达式禁用空的字符集
        'no-empty-character-class': 2,
        // 禁用空块
        'no-empty': 2,
        // 在 try 语句禁用重写异常
        'no-ex-assign': 2,
        // 禁用不必要的分号
        'no-extra-semi': 2,
        // 禁用重写函数声明
        'no-func-assign': 2,
        // 在块语句中禁用函数声明
        'no-inner-declarations': 2,
        // 在正则表达式构造函数禁用无效字符串
        'no-invalid-regexp': 2,
        // 禁用不规范的空白
        'no-irregular-whitespace': 2,
        // 禁用以函数形式调用全局 Object 属性
        'no-obj-calls': 2,
        // 在正则表达式字面量禁用连续多个空格
        'no-regex-spaces': 2,
        // 禁用稀疏数组
        'no-sparse-arrays': 2,
        // 禁用混淆多行表达式
        'no-unexpected-multiline': 2,
        // 禁用不能执行的语句
        'no-unreachable': 2,
        // 在 finally 禁用流程控制语句
        'no-unsafe-finally': 2,
        // 在 case/default 中禁用此法声明
        'no-case-declarations': 2,
        // 禁用空解构模式
        'no-empty-pattern': 2,
        // 在 case 语句必须使用 break
        'no-fallthrough': 2,
        // 禁用八进制
        'no-octal': 2,
        // 禁用重新声明
        'no-redeclare': 2,
        // 禁用重写自身声明
        'no-self-assign': 2,
        // 禁用无用的 label
        'no-unused-labels': 2,
        // 禁用对变量 delete
        'no-delete-var': 2,
        // 禁用未声明的变量
        'no-undef': 2,
        // 禁用未使用的标量
        'no-unused-vars': 2,
        // 禁止混合使用 tab 和 space
        'no-mixed-spaces-and-tabs': 2,
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
        ],
        // 在需要判断 NaN 时使用 isNaN()
        'use-isnan': 2,
        // 使用 typeof 比较时必须是有效的字符串
        'valid-typeof': 2,
    }
}
