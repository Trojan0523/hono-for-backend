/*
 * @Author: BuXiongYu
 * @Date: 2024-04-26 15:39:01
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2024-04-26 16:05:20
 * @Description: 请填写简介
 */
import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  typescript: true,
  react: true,
  rules: {
    'no-console': 'off',
  },
})
