const history = require('connect-history-api-fallback')
const express = require('express')

const app = express()

app.use(history({
  index: '/',
  verbose: true
}))

app.use('/static', express.static(process.cwd() + '/dist/static'))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/dist/index.html')
})

app.listen(process.env.PORT || 5000)
