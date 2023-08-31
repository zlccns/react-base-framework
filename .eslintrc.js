/**
 * ESLint (代码检查)
 * @external eslint-plugin-react
 * @desc Vue.js 的官方 ESLint 插件
 * @see https://github.com/jsx-eslint/eslint-plugin-react
 */

module.exports = {
  root: true,
  env: {
    node: true
  },

  /**
   * @summary 规则继承
   * @desc extends 数组中的顺序非常重要，基本上每次向数组添加新配置时，都将覆盖之前的配置
   */
  extends: [
    // 使用官方推荐配置，它只会启动一些受欢迎的规则
    // 下列文档中，标有 " ✓ " 的规则都会被开启
    // @see https://cn.eslint.org/docs/rules
    // @see https://eslint.org/docs/rules
    'eslint:recommended',

    // 防止错误或意外行为的规则
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'react-app/jest',
    'react-app',

    // 「目前主要使用 standard 方案，其他配置皆为附加内容」
    // standard 默认是独立存在的(不允许自定义配置)，如果独立安装的话，会附带代码自动修正功能
    // @see https://github.com/standard/standard/blob/master/docs/README-zhcn.md
    // 官方提供了一个可以通过 eslint 自定义配置的工具，让 eslint 继承 standard 的编码规范
    // 这种方法相较于独立安装，失去了附带的检查和自动修正功能，需要自己去实现
    // @see https://github.com/standard/eslint-config-standard
    // 下方是 standard 代码规范的全文
    // @see https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md
    'standard',

    // 关闭所有不必要或可能与 prettier 冲突的规则
    // @see https://github.com/prettier/eslint-config-prettier
    'plugin:prettier/recommended'
  ],

  /**
   * @summary 解析器选项

   * @see https://cn.eslint.org/docs/user-guide/configuring#specifying-parser-options
   * @see https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options
  */
  parserOptions: {
    // parser 的作用是将我们写的代码转换为 ESTree
    // ESLint 默认的 parser ，只转换 js，默认支持 ES5 的语法
    // 可以通过制定 parserOptions 给 Espree 传递选项

    // 使用最新版本的 ECMAScript 标准
    ecmaVersion: 'latest',
    // 使用 ES Modules 类型的模块系统编写
    sourceType: 'module',
    // 解析 JSX 语法
    ecmaFeatures: {
      jsx: true
    },

    // 允许使用 ESLint 校验所有 babel code
    // @see https://zhuanlan.zhihu.com/p/295291463
    parser: '@babel/eslint-parser'
  },

  /**
   * @summary 配置规则
   * @see https://eslint.org/docs/user-guide/configuring/rules
   * @see https://cn.eslint.org/docs/rules/
   */
  rules: {
    // 开始和结束大括号是否可以在同一行
    // @see https://cn.eslint.org/docs/2.0.0/rules/brace-style#options
    // 直接关闭，不指定括号风格
    'brace-style': 'off',

    // 检查代码中是否存在 console，production ? 警告 : 关闭功能
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 检查代码中是否存在 debugger，production ? 警告 : 关闭功能
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 允许有未定义的变量
    'no-undef': 'off',

    // 不能有声明后未被使用的变量或参数，production ? 关闭功能 : 直接报错
    'no-unused-vars': process.env.VUE_APP_ESLINT === 'local' ? 'off' : 'error',

    // 禁止在结尾处添加逗号
    // @see https://cn.eslint.org/docs/rules/comma-dangle#options
    // 'comma-dangle': 'off',

    // 强制使用一致的缩进
    // 影响范围仅限与 javaScript
    // @see https://cn.eslint.org/docs/rules/indent
    // indent: ['error', 2]

    // eslint-plugin-prettier .01
    // 将 prettier 作为 eslint 的规则来使用
    // 相当于代码不符合 prettier 的标准时，会报一个 eslint 错误
    // 这样项目中的 .prettierrc.js 配置就会自动同步给 eslint，不需要在 eslint 中另行设置
    // @see https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': 'error'
  },

  /**
   * @summary 插件
   * @see https://eslint.org/docs/latest/user-guide/configuring/plugins
   */
  plugins: [
    'react',

    // eslint-plugin-prettier .02
    // @see https://github.com/prettier/eslint-plugin-prettier
    'prettier'
  ]

  /**
   * @summary 共享设置
   * @see https://eslint.org/docs/latest/user-guide/configuring/configuration-files#adding-shared-settings
   */
  // settings: {
  //   // @see https://github.com/import-js/eslint-plugin-import/tree/HEAD/resolvers/webpack
  //   // @see https://stackoverflow.com/questions/47863102/eslint-error-showing-with-webpack-alias
  //   'import/resolver': 'webpack'
  // }
}

/**
 * @desc 参考文献及文档
 * @see https://tech.meituan.com/2019/08/01/eslint-application-practice-in-medium-and-large-teams.html
 * @see https://juejin.cn/post/6979515308143263751
 * @see https://juejin.cn/post/6844903843541549063
 * @see https://juejin.cn/post/6924568874700505102
 */
