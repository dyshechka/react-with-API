const express = require('express');
const bodyParser = require('body-parser');

const todoService = require('./todo-service');

const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send(todoService.getAll());
});

app.post('/', (req, res) => {
    const body = req.body;
    // TODO validate
    const todo = Object.assign({}, body);
    todo.time = todo.time ? new Date(todo.time) : new Date();
    res.send(todoService.create(todo));
});

app.put('/', (req, res) => {
    const body = req.body;
    // TODO validate
    const todo = Object.assign({}, body);
    todo.time = todo.time ? new Date(todo.time) : new Date();
    res.send(todoService.update(todo));
});

app.listen(3000, err => {
    if (err) {
        throw err;
    }
    console.log('Server started on port 3000');
});
