import { connect } from 'react-redux'
import { updateTodo, loadTodo, startLoading, endLoading } from '../actions'
import TodoForm from "../components/TodoForm";

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = {
    onUpdateTodo: updateTodo,
    onLoadTodo: loadTodo,
    startLoading: startLoading,
    endLoading: endLoading
};

const TodoFormWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoForm);

export default TodoFormWrapper
