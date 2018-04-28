let initialState = {
    text: '',
    emptyValue: false,
    duplicateValue: false
};

const editTodo = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TODO':
            return {
                text: action.text,
                emptyValue: false,
                duplicateValue: false
            };
        case 'RESET_TODO':
            return {
                text: '',
                emptyValue: false,
                duplicateValue: false
            };
        case 'VALIDATED':
            return Object.assign({}, state, action.result);
        default:
            return state;
    }
};

export default editTodo;
