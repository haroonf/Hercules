const express = require('express')

const app = express()
const port = 11000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/meal', (req, res) => res.send('Sending meal\n'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
