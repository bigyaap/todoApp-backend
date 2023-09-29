const express = require('express')
const todoController = require('../controller/listController')

const router = express.Router()
require('dotenv').config()

router.get('/', todoController.home)

router.get('/todo', todoController.getTodoList)

router.post('/todo', todoController.createList)

router.delete('/todo', todoController.deleteOneTodo)

module.exports = router