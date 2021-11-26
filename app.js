// Include express from node_modules and define server related variables
const express = require('express')

const port = 3000
const mongoose = require('mongoose') // 載入 mongoose

const exphbs = require('express-handlebars')
const app = express()

mongoose.connect('mongodb://localhost/todo-list') // 設定連線到 mongoDB

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.on('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))

app.set('view engine', 'hbs')

// setting the route and corresponding response
app.get('/', (req, res) => {
  res.render('index')
})

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})