const mongoose = require('mongoose') // 載入 mongoose
const Todo = require('../todo')

mongoose.connect('mongodb://localhost/todo-list') // 設定連線到 mongoDB

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.on('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < 10; i++) {
    Todo.create({ name: 'name' + i })
  }
  console.log('done')
})

