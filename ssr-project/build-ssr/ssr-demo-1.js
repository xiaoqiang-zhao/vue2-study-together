const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('../index-demo-1.html', 'utf-8')
})

server.get('*', (req, res) => {
  // 一个 vue 组件
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>Hello world.</div>`
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    // 向页面输出
    res.end(html)
  })
})
server.listen(8080)

console.log('service start: localhost:8080//')
