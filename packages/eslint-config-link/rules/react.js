module.exports = {
    plugins: ['react'],

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },

    rules: {
        // 组件需要展示名字
        'react/display-name': 2,
        // 禁用重复属性
        'react/jsx-no-duplicate-props': 2,
        // 禁用未声明的组件变量
        'react/jsx-no-undef': 2,
        // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-react': 2,
        // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars': 2,
        // 禁用废弃的方法
        'react/no-deprecated': 2,
        // 禁止直接使用 this.state 更改状态
        'react/no-direct-mutation-state': 2,
        // 禁用 findDOMNode()
        'react/no-find-dom-node': 2,
        // 禁用 isMounted()
        'react/no-is-mounted': 2,
        // 禁用未知的 DOM 属性
        'react/no-unknown-property': 2,
        // 禁用 React.render 的返回值
        'react/no-render-return-value': 2,
        // Prevent missing React when using JSX
        'react/react-in-jsx-scope': 2,
        // 在 render() 中总是需要 return
        'react/require-render-return': 2,
        // 这里关掉属性类型校验
        'react/prop-types': 0,
        // 优先使用 class extends React.Component
        // "react/prefer-es6-class": 2,
        // 没有状态的组件建议使用普通函数代替类
        'react/prefer-stateless-function': 2,
        // 使用帕斯卡命名方式对组件命名
        'react/jsx-pascal-case': 2,
        // 设置 jsx 的语法对齐和缩进
        'react/jsx-closing-bracket-location': 2,
        // 总是在自动关闭的标签前加一个空格，正常情况下也不需要换行
        'react/jsx-tag-spacing': [
            2,
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never'
            }
        ],
        // 不要在JSX {} 引用括号里两边加空格
        'react/jsx-curly-spacing': 2,
        // 如果属性值为 true, 可以直接省略
        'react/jsx-boolean-value': 2,
        // 将多行的JSX标签写在 ()
        'react/jsx-wrap-multilines': 2,
        // 对于没有子元素的标签来说总是自己关闭标签
        // "react/self-closing-comp": 2,
        // No .bind() or Arrow Functions in JSX Props
        'react/jsx-no-bind': 2,
        // 设置组件方法顺序
        'react/sort-comp': 2
    }
}
