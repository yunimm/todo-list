const express = require('express')
const mongoose = require('mongoose')

const port = 3000

const exphbs = require('express-handlebars')

const Todo = require('./models/todo')
const e = require('express')

const app = express()

mongoose.connect('mongodb://localhost/todo-list')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.on('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  // 拿到Todo的資料
  Todo.find()
  .lean()
  .then(todos => res.render('index', { todos }))
  .catch(error => console.error(error))
})


app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})