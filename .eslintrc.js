module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multiple-empty-lines': 'off', // 禁止多行空格 关闭
    'no-trailing-spaces': 'off', // 禁止行尾空格 关闭
    'padded-blocks': 'off' // 块级区域内部不能空行 关闭
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
