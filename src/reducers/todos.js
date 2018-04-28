const todos = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_TODO':
            return action.list.map(data => {
                data.time = new Date(data.time);
                return data;
            });
        case 'ADD_TODO':
            const todo = action.todo;
            todo.time = new Date(todo.time);
            return [
                ...state,
                todo
            ];
        case 'UPDATE_TODO':
            return state.map(todo => {
                if (todo.text === action.todo.text) {
                    return Object.assign({}, action.todo);
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

export default todos;
