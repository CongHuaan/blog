const express = require('express')
const app = express()
const port = 3000

app.get('/trangchu', (req, res) => {
    console.log('abcxyz')
    res.send('Hello World! hihi')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})