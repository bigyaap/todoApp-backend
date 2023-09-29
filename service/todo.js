const TodoDAO = require('../dao/todo')

class TodoService {
    getTodoList() {
        return TodoDAO.getTodoList()
    }
    createList(todoDto) {
        const { title } = todoDto
        return TodoDAO.createList(title)
    }
    deleteOneTodo(todoDto) {
        const { id } = todoDto
        return TodoDAO.deleteOneTodo(id)
    }
}

module.exports = new TodoService()