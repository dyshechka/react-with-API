import { connect } from 'react-redux'
import { editTodo, resetTodo, validateTodo, startLoading, endLoading } from '../actions'
import TodoInput from "../components/TodoInput";

const mapStateToProps = (state) => ({
    todo: state.editTodo,
    todos: state.todos
});

const mapDispatchToProps = {
    onEditTodo: editTodo,
    onResetTodo: resetTodo,
    onValidateTodo: validateTodo
};

const TodoInputWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoInput);

export default TodoInputWrapper
