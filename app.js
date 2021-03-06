const gblogs = require('./routes/blogs.js')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.use('/blogs', gblogs)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
