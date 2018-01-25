module.exports = {
    env: {
        es6: true
    },

    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            generators: false,
            objectLiteralDuplicateProperties: false
        }
    },

    rules: {
        // 设置箭头函数体风格，仅需要使用 return
        'arrow-body-style': [2, 'as-needed'],
        // 箭头函数仅在需要时使用 ()
        'arrow-parens': [2, 'as-needed'],
        // 箭头函数在 => 前后需要空格
        'arrow-spacing': 2,
        // 设置生成器 * 风格，仅在 * 后面使用空格
        'generator-star-spacing': [2, 'after'],
        // 禁止多次 import 统一模块
        'no-duplicate-imports': 2,
        // 在对象字面量对不需要计算的属性禁用 []
        'no-useless-computed-key': 2,
        // 禁用不必要的构造函数
        'no-useless-constructor': 2,
        // 建议在回调函数使用箭头函数
        // "prefer-arrow-callback": 2,
        // 优先使用 const 声明
        'prefer-const': 2,
        // 建议使用 `...` 代替 `arguments`
        'prefer-rest-params': 2,
        //  Prefer the use of the spread operator ... to call variadic functions
        'prefer-spread': 2,
        // 优先使用模板字符串
        'prefer-template': 2,
        // 设置模板字符串变量 {} 风格，不适用空格
        'template-curly-spacing': 2,
        // 使用 let 和 const 代替 var
        'no-var': 2
    }
}
