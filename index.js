const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.ip)
  res.redirect(301,'https://github.com/epicadidash')
})
app.get('/h', (req, res) => {
    console.log(req.ip)
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`Server started  ${port}`)
})