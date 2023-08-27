/**
 * prettier (代码格式化)
 * @external prettier
 * @desc 代码格式化工具
 * @see https://github.com/prettier/prettier
 * @see https://prettier.io/docs/en/options.html
 *
 * @external prettier-standard
 * @desc
 * 目前主要使用的方案是 prettier-standard
 * 这是为了和 eslint 中的 standard 相对应
 * 当前的配置会覆盖 prettier-standard 的默认规则
 * @see https://github.com/sheerun/prettier-standard
 */
module.exports = {
  // 使用单引号
  singleQuote: true,
  // 在句尾添加分号
  semi: false,
  // 结尾处添加逗号
  trailingComma: 'none',
  // 指定一行需要换行的字符数，默认 80
  printWidth: 80,
  // 箭头函数参数始终包含括号
  arrowParens: 'always',
  // 忽略格式化文件类型
  disableLanguages: ['md']
}
