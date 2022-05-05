const express = require('express')
const app = express()
const {templatePath} = require('./helpers/templatePath')
const log = console.log
const port  = 3000


app.listen(port, () => log(`Server running on port ${port}`))

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(templatePath('index.html'))
})

app.get('/babbage', (req, res) => {
    res.sendFile(templatePath('babbage.html'))
})

app.get('/berners-lee', (req, res) => {
    res.sendFile(templatePath('berners-lee.html'))
})

app.get('/clarke', (req, res) => {
    res.sendFile(templatePath('clarke.html'))
})

app.get('/hamilton', (req, res) => {
    res.sendFile(templatePath('hamilton.html'))
})

app.get('/hopper', (req, res) => {
    res.sendFile(templatePath('hopper.html'))
})

app.get('/lovelace', (req, res) => {
    res.sendFile(templatePath('lovelace.html'))
})

app.get('/turing', (req, res) => {
    res.sendFile(templatePath('turing.html'))
})