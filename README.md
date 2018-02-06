# JavaScript Code Guide

[![npm version](https://img.shields.io/npm/v/eslint-config-link.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-link)
[![npm downloads](https://img.shields.io/npm/dm/eslint-config-link.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-link)

## 如何使用

参考：[eslint-config-link](./packages/eslint-config-link/README.md)

#### 安装

```sh
npm install eslint-config-link --save-dev
```

#### 配置

.eslintrc.js

```js
module.exports = {
    extends: [
        'link'
    ]
}
```

## .editorconfig

```
# editorconfig.org
root = true

[*]
indent_style = space
indent_size = 4
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

## ESLint 详细规范

最终规范以 [eslint-config-link](https://www.npmjs.com/package/eslint-config-link) 为准

```js
module.exports = {
    "rules": {
        // 使用 4 个空格缩进
        "indent": [2, 4],
        // 使用驼峰命名或者 UPPERCASE_WITH_UNDERSCORES
        "camelcase": [2, {"properties": "never"}],
        // 使用单引号
        "quotes": [2, "single", {"allowTemplateLiterals": true}],
        // 使用分号
        "semi": [2, "always"],
        // 使用 === 和 !==
        "eqeqeq": [2, "always"],
        // 单行可省略{}，其他情况不允许省略
        "curly": [2, "multi-line"],

        // 在条件表达式禁用赋值运算符
        "no-cond-assign": 2,
        // 禁用 console
        "no-console": 2,
        // 在条件语句禁用常量表达式
        "no-constant-condition": 2,
        // 在正则表达式禁用控制字符
        "no-control-regex": 2,
        // 禁用 debugge
        "no-debugger": 2,
        // 在函数声明禁用重复参数
        "no-dupe-args": 2,
        // 在对象字面量禁用重复 key
        "no-dupe-keys": 2,
        // 在 switch 禁用重复 case
        "no-duplicate-case": 2,
        // 在正则表达式禁用空的字符集
        "no-empty-character-class": 2,
        // 禁用空块
        "no-empty": 2,
        // 在 try 语句禁用重写异常
        "no-ex-assign": 2,
        // 禁用不必要的分号
        "no-extra-semi": 2,
        // 禁用重写函数声明
        "no-func-assign": 2,
        // 在块语句中禁用函数声明
        "no-inner-declarations": 2,
        // 在正则表达式构造函数禁用无效字符串
        "no-invalid-regexp": 2,
        // 禁用不规范的空白
        "no-irregular-whitespace": 2,
        // 禁用以函数形式调用全局 Object 属性
        "no-obj-calls": 2,
        // 在正则表达式字面量禁用连续多个空格
        "no-regex-spaces": 2,
        // 禁用稀疏数组
        "no-sparse-arrays": 2,
        // 禁用混淆多行表达式
        "no-unexpected-multiline": 2,
        // 禁用不能执行的语句
        "no-unreachable": 2,
        // 在 finally 禁用流程控制语句
        "no-unsafe-finally": 2,
        // 在需要判断 NaN 时使用 isNaN()
        "use-isnan": 2,
        // 使用 typeof 比较时必须是有效的字符串
        "valid-typeof": 2,
        // 在 case/default 中禁用此法声明
        "no-case-declarations": 2,
        // 禁用空解构模式
        "no-empty-pattern": 2,
        // 在 case 语句必须使用 break
        "no-fallthrough": 2,
        // 禁用八进制
        "no-octal": 2,
        // 禁用重新声明
        "no-redeclare": 2,
        // 禁用重写自身声明
        "no-self-assign": 2,
        // 禁用无用的 label
        "no-unused-labels": 2,
        // 禁用对变量 delete
        "no-delete-var": 2,
        // 禁用未声明的变量
        "no-undef": 2,
        // 禁用未使用的标量
        "no-unused-vars": 2,
        // 禁止混合使用 tab 和 space
        "no-mixed-spaces-and-tabs": 2,

        // ECMAScript 6
        // 验证是否需要调用 super()
        "constructor-super": 2,
        // 禁止对类重新赋值
        "no-class-assign": 2,
        // 禁止对使用 const 声明的变量重新赋值
        "no-const-assign": 2,
        // 禁止类中存在相同名字的成员
        "no-dupe-class-members": 2,
        // 禁止使用 Symbol 构造函数
        "no-new-symbol": 2,
        // 禁止在 super() 前使用 this/super
        "no-this-before-super": 2,
        // 在生成器函数中需要 yield
        "require-yield": 2

        // code style
        // 数组中起始位置是否需要空格
        "array-bracket-spacing": [2, "never"],
        // 设置{}风格
        "brace-style": [2, "1tbs", { "allowSingleLine": true }],
        // 不允许在数组或对象最后一项使用逗号
        "comma-dangle": [2, "never"],
        // 在分号前不适用空格，分号后使用空格
        "comma-spacing": 2,
        // 分号风格，默认放在行尾
        "comma-style": 2,
        // 在变量属性中禁用空格
        "computed-property-spacing": 2,
        // 设置对 this 的引用
        "consistent-this": [2, "that"],
        // 文件以新行结尾
        "eol-last": 2,
        // 在函数标识和 () 之间禁用空格
        "func-call-spacing": 2,
        // JSX 使用双引号
        "jsx-quotes": [2, "prefer-double"],
        // 在 key 和 value 之间的空格一个空格
        "key-spacing": 2,
        // 在关键字前后使用空格
        "keyword-spacing": 2,
        // 行注释位置（上面 ？后面）
        // "line-comment-position": 2,
        // 最深嵌套 4 层
        "max-depth": [2, { "max": 4 }],
        // 最大行长
        "max-len": [2, {
            "code": 120,
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true
        }],
        // 文件最大行数
        "max-lines": [2, 600],
        // 函数最多参数
        "max-params": [2, { "max": 8 }],
        // 每行最大语句条数为 2
        "max-statements-per-line": [2, { "max": 2 }],
        // 函数最大语句条数
        "max-statements": [1, { "max": 16 }],
        // 使用 new 实例化对象，类名大写字母开头
        "new-cap": 2,
        // 不使用 Array 构造函数
        "no-array-constructor": 2,
        "no-lonely-if": 2,
        // "no-mixed-operators": 0,
        "no-mixed-spaces-and-tabs": 2, // eslint:recommended
        // 最大两行空白
        "no-multiple-empty-lines": [2, {"max": 2}],
        // 禁用多个空格
        "no-multi-spaces": 2,
        // 禁用 Object 构造函数
        "no-new-object": 2,
        // 禁用 tabs
        "no-tabs": 2,
        // 禁用行末额外的空白
        "no-trailing-spaces": 2,
        // 禁用不需要的三元表达式
        "no-unneeded-ternary": 2,
        // 属性前没有空白
        "no-whitespace-before-property": 2,
        // 在对象 {} 中使用空格
        "object-curly-spacing": [2, "always"],
        // 单独使用声明
        "one-var": [2, {
            "var": "never",
            "let": "never",
            "const": "never",
        }],
        // 在块中禁用大量空白填充
        "padded-blocks": [2, "never"],
        // 在需要使用引号时该对象所有属性都使用引号
        "quote-props": [2, "consistent"],
        // 需要使用 JSDoc
        "require-jsdoc": [2, {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": false,
                "ClassDeclaration": false,
            },
        }],
        // 配置 JSDoc 规则
        "valid-jsdoc": [2, {
            "requireParamDescription": false,
            "requireReturnDescription": false,
            "requireReturn": false,
            "prefer": {"returns": "return"},
        }],
        "semi-spacing": [2, {
            "before": false,
            "after": true
        }],
        // 在块语句前使用空格
        "space-before-blocks": 2,
        // 在函数声明后禁用空格
        "space-before-function-paren": [2, "never"],
        // 在中缀操作符之间需要空格
        "space-infix-ops": [2, {"int32Hint": false}],
        // 在一元运算符前后禁用空格
        "space-unary-ops": 2,
        // 在括号首尾禁用空格
        "space-in-parens": 2,
        // 在注释后使用空格
        "spaced-comment": [2, "always"],

        // ES6
        // 设置箭头函数体风格，仅需要使用 return
        "arrow-body-style": [2, "as-needed"],
        // 箭头函数仅在需要时使用 ()
        "arrow-parens": [2, "as-needed"],
        // 箭头函数在 => 前后需要空格
        "arrow-spacing": 2,
        // 设置生成器 * 风格，仅在 * 后面使用空格
        "generator-star-spacing": [2, "after"],
        // 禁止多次 import 统一模块
        "no-duplicate-imports": 2,
        // 在对象字面量对不需要计算的属性禁用 []
        "no-useless-computed-key": 2,
        // 禁用不必要的构造函数
        "no-useless-constructor": 2,
        // 建议在回调函数使用箭头函数
        // "prefer-arrow-callback": 2,
        // 优先使用 const 声明
        "prefer-const": 2,
        // 建议使用 `...` 代替 `arguments`
        "prefer-rest-params": 2,
        //  Prefer the use of the spread operator ... to call variadic functions
        "prefer-spread": 2,
        // 优先使用模板字符串
        // "prefer-template": 2,
        // 设置模板字符串变量 {} 风格，不适用空格
        "template-curly-spacing": 2,
        // 使用 let 和 const 代替 var
        // "no-var": 2,

        // react
        // 禁用不必要的布尔转换
        "no-extra-boolean-cast": 2,
        // 组件需要展示名字
        "react/display-name": 2,
        // 禁用重复属性
        "react/jsx-no-duplicate-props": 2,
        // 禁用未声明的组件变量
        "react/jsx-no-undef": 2,
        // Prevent React to be incorrectly marked as unused
        "react/jsx-uses-react": 2,
        // Prevent variables used in JSX to be incorrectly marked as unused
        "react/jsx-uses-vars": 2,
        // 禁用废弃的方法
        "react/no-deprecated": 2,
        // 禁止直接使用 this.state 更改状态
        "react/no-direct-mutation-state": 2,
        // 禁用 findDOMNode()
        "react/no-find-dom-node": 2,
        // 禁用 isMounted()
        "react/no-is-mounted": 2,
        // 禁用未知的 DOM 属性
        "react/no-unknown-property": 2,
        // 禁用 React.render 的返回值
        "react/no-render-return-value": 2,
        // Prevent missing React when using JSX
        "react/react-in-jsx-scope": 2,
        // 在 render() 中总是需要 return
        "react/require-render-return": 2
        // 这里关掉属性类型校验
        "react/prop-types": 0,
        // 优先使用 class extends React.Component
        // "react/prefer-es6-class": 2,
        // 没有状态的组件建议使用普通函数代替类
        "react/prefer-stateless-function": 2,
        // 使用帕斯卡命名方式对组件命名
        "react/jsx-pascal-case": 2,
        // 设置 jsx 的语法对齐和缩进
        "react/jsx-closing-bracket-location": 2,
        // 总是在自动关闭的标签前加一个空格，正常情况下也不需要换行
        "react/jsx-space-before-closing": 2,
        // 不要在JSX {} 引用括号里两边加空格
        "react/jsx-curly-spacing": 2,
        // 如果属性值为 true, 可以直接省略
        // "react/jsx-boolean-value": 2,
        // 将多行的JSX标签写在 ()
        "react/jsx-wrap-multilines": 2,
        // 对于没有子元素的标签来说总是自己关闭标签
        // "react/self-closing-comp": 2,
        // No .bind() or Arrow Functions in JSX Props
        "react/jsx-no-bind": 2,
        // 设置组件方法顺序
        "react/sort-comp": 2
    }
};
```
