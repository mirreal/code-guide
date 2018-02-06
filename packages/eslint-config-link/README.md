# eslint-config-link

JavaScript 编码规范指南

[![npm version](https://img.shields.io/npm/v/eslint-config-link.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-link)
[![npm downloads](https://img.shields.io/npm/dm/eslint-config-link.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-link)

## 使用指南

适用于 React + ES6 应用的 ESLint 配置，依赖于 `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, 在不使用 React 的时候可以直接使用 [eslint-config-link-base](https://www.npmjs.com/package/eslint-config-link-base)。

### 安装

npm

```sh
npm install eslint-config-link --save-dev
```

### 安装依赖

使用 `yarn`

运行以下命令，查找其依赖

```sh
npm info "eslint-config-link@latest" peerDependencies
```

然后运行，`yarn add --dev <dependency>@<version>` 安装对应依赖

### 配置 eslintrc

.eslintrc.js

```js
module.exports = {
    // ...
    globals: {
        // ...
    },
    extends: [
        'link'
    ],
    rules: {
        // ...
    }
}
```
