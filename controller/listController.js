const todoService = require('../service/todo')

class ListController {

    home(req, res) {
        try {
            res.status(200).json({ message: 'I am alive' })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error })
        }
    }

    async getTodoList(req, res) {
        try {
            const id = await todoService.getTodoList()
            res.status(200).json(id)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error })
        }
    }

    async createList(req, res) {
        try {
            const { title } = req.body
            if (!title || title.trim() === '') {
                return res.status(400).json({ error: "Title is empty" })
            }
            const id = await todoService.createList(req.body)
            res.status(201).json(id)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error })
        }
    }

    async deleteOneTodo(req, res) {
        try {
            const { id } = req.body
            if (!id)
                return res.status(400).json({ error: "Id is undefined" })
            const message = await todoService.deleteOneTodo(req.body)
            setTimeout(() => {

                res.status(200).json({ message })
            }, 3000);
        } catch (error) {
            console.log(error)
            res.status(500).json({ error })
        }
    }
}

module.exports = new ListController()