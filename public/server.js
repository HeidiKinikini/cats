const express = require('express')

const app = express()

app.use(express.json())

app.get('/main', (req, res) => {
    res.sendFile(__dirname + '/public/main.js')
})

app.get('/styles', (req, res) => {
    res.sendFile(__dirname + '/public/styles.css')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(4000, () => {
    console.log('Up on 4000')
})      