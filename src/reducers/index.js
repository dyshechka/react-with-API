import { combineReducers } from 'redux';
import todos from './todos';
import loader from './loader';
import editTodo from './editTodo';

const reducersApp = combineReducers({
    todos,
    editTodo,
    loader
});

export default reducersApp;
