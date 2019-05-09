var history = require('connect-history-api-fallback');
var express = require('express');

var app = express();
app.use(history({
  index: 'index.html',
  logger: console.log.bind(console)
}));

app.use('/', express.static(process.cwd() + '/dist'))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/dist/index.html')
})

app.listen(process.env.PORT || 5000)