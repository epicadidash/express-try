const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.ip)
  res.send(req.url)
})

app.listen(port, () => {
  console.log(`Server started  ${port}`)
})