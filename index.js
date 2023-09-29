const express = require('express')
const router = require('./routes')

const app = express()
app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
    res.json({ message: 'I am alive!' });
});

app.listen(8080, () => console.log('Server listening on port 8080'))