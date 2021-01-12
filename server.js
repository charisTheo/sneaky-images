const { createServer } = require('http')
const { join } = require('path')
const { parse } = require('url')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl
    const staticFilesRegExpArr =  ['service-worker.js', 'precache-manifest', 'offline.html', '(^\/static)', 'build-manifest.json']
    const regExp = new RegExp(`(${staticFilesRegExpArr.join('|')})`)

    // if (pathname.match(/\.(?:jpeg)/)) {
    //   res.setHeader("content-type", "image/webp")
    //   handle(req, res, parsedUrl)
      
    // }
    if (pathname.match(regExp)) {
      // ! need to redirect the request to the statically hosted files
      const filePath = join(__dirname, '.next', pathname)
      app.serveStatic(req, res, filePath)

    } else {
      handle(req, res, parsedUrl)

    }

  }).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)

  })
})
