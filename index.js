const express = require('express')
const router = require('./routes')
const todoController = require('./controller/listController')

const app = express()
app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
    res.json({ message: 'I am alive!' });
});

router.get('/todo', todoController.getTodoList)

router.post('/todo', todoController.createList)

router.delete('/todo', todoController.deleteOneTodo)

app.listen(8080, () => console.log('Server listening on port 8080'))