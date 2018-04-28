const instance = () => {
    let todos = [{
        id: 0,
        text: 'сходить на работу',
        time: new Date(),
        done: 0
    }, {
        id: 1,
        text: 'заплатить за квартиру',
        time: new Date(),
        done: 0
    }];

    function getAll() {
        return todos;
    }

    function create(todo) {
        var maxId = Math.max.apply(Math, todos.map((o) => o.id));
        todo.id = maxId + 1;
        todos.push(todo);
        return todo;
    }

    function update(todo) {
        const itemToUpdate = todos.find((item) => item.id === todo.id);
        const indexToUpdate = todos.indexOf(itemToUpdate);
        todos[indexToUpdate] = Object.assign({}, itemToUpdate, todo);
        return todos[indexToUpdate];
    }

    return {
        getAll: getAll,
        create: create,
        update: update
    };
};

module.exports = instance();
