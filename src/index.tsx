/*
 * @Author: BuXiongYu
 * @Date: 2024-03-28 06:37:55
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2024-04-26 19:33:41
 * @Description: 请填写简介
 */
import { type HttpBindings, serve } from '@hono/node-server'
import { Hono } from 'hono'
import contentJson from './routees/content-json'

type Bindings = HttpBindings & { /** */ }

const app = new Hono<{ Bindings: Bindings }>({ strict: false })

app.get('/', (c) => {
  return c.json({
    remoteAddress: c.env.incoming.socket.remoteAddress,
  })
})

app.get('/entry/:date/:id', (c) => {
  const date = c.req.param('date')
  const id = c.req.param('id')
  console.log('id', id)
  return c.text(`Entry date: ${date}`)
})

app.route('/', contentJson)

app.onError((err, c) => {
  console.error(`${err}`)
  return c.text('Internal server error', 500)
})

app.notFound((c) => {
  c.text('custom 404 message', 404)
  return c.render(<div>sorry, 404</div>)
})

console.log(`Server is running on port: 3000`)

serve({
  fetch: app.fetch,
  port: 3000,
})
