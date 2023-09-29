const db = require('../db/db')

class ListDAO {

    async getTodoList() {
        const list = await db('todo').select('id', 'title').orderBy('created_at', 'desc');
        return list
    }

    async createList(title) {
        const [id] = await db('todo').insert({
            title
        }).returning('id')
        return id;
    }

    async deleteOneTodo(id) {

        const rowExists = await db('todo').where({ id }).first();
        if (rowExists) {
            await db('todo').where({ id }).del();
            return "Resource deleted successfully"
        } else {
            return `Row with ID ${id} does not exist.`
        }
    }
}

module.exports = new ListDAO()