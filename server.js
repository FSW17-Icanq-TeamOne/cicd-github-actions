const express = require('express')
const app = express()
const {greeting} = require('./user')

app.get('/', (req,res) => res.send('This App is running properly!'))
app.get('/ping', (req,res) => res.send('Pong!'))
app.get('/youtube', (req,res) => res.send('Hello, youtube indonesia!'))
app.get('/jere', (req,res) => res.send('jere!'))
app.get('/miah', (req,res) => res.send('miah!'))
app.get('/adam', (req,res) => res.send('adam!'))
app.get('/wisnu', (req,res) => res.send('wisnu!'))
app.get('/hello/:name', (req,res) => {
    res.json({message:greeting(req.params.name)})
})
module.exports = app
