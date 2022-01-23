import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { resolve } from 'path'

import { Html } from '..//client/html.js'

const __dirname = process.cwd()

const server = express()
const PORT = process.env.PORT || 8080

const middleware = [
  cors(),
  cookieParser(),
  express.json({ limit: '50kb'})
  express.static(resolve(__dirname, 'dist'))
]

middleware.forEach((it) => server.use(it))

server.get('/', (req, res) => {
  res.send('Express Server')
})

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  res.send(
    Html({
      body: '',
      initialState
    })
  )
})

server.listen(PORT, () => {
  console.log(`serving at https://localhost:${PORT}`)
})