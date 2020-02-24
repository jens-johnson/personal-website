const express = require('express')
const app = express()
const env = process.env.NODE_ENV || 'development'
const config = require('../config.json').environmentSettings[env]

app.use('/', express.static('./dist', {
  index: "index.html"
}))

app.listen(config.PORT, () => console.log(`Example app listening on port ${config.PORT}!`))