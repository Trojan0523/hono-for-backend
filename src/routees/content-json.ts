/*
 * @Author: BuXiongYu
 * @Date: 2024-04-26 14:39:49
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2024-04-26 19:47:31
 * @Description: 请填写简介
 */
import { Hono } from 'hono'

const contentJson = new Hono()

contentJson.get('api/hello', (c) => {
  return c.json({
    ok: true,
    message: 'Hello, Hono',
  })
})

contentJson.post('api/post', (c) => {
  console.log('context', c)
  return c.json({
    code: 200,
    message: 'Post request',
  })
})

contentJson.get('api/context', (_) => {
  const userAgent = _.req.header('User-Agent')
  console.log('userAgent', userAgent)
  return _.text(`${userAgent}`, 200)
})

export default contentJson
