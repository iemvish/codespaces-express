const express = require('express')
const app = express()
const port = 3000


app.get('/user', (req, res) => {
  res.send('I am user')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
