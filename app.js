// Include express from node_modules and define server related variables
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose') // 載入 mongoose

mongoose.connect('mongodb://localhost/todo-list') // 設定連線到 mongoDB

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.on('open', () => {
  console.log('mongodb connected!')
})

// setting the route and corresponding response
app.get('/', (req, res) => {
  res.send(`This is my Web App`)
})

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})