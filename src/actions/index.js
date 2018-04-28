export const loadTodo = (list) => ({
   type: 'LOAD_TODO',
   list
});

export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    todo
});

export const updateTodo = (todo) => ({
    type: 'UPDATE_TODO',
    todo
});

export const editTodo = (text) => ({
    type: 'CHANGE_TODO',
    text
});

export const resetTodo = (text) => ({
    type: 'RESET_TODO',
    text
});

export const validateTodo = (result) => ({
    type: 'VALIDATED',
    result
});

export const startLoading = () => ({
    type: 'START_LOADING'
});

export const endLoading = () => ({
    type: 'END_LOADING'
});
