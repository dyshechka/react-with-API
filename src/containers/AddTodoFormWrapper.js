import { connect } from 'react-redux'
import { addTodo, startLoading, endLoading } from '../actions'
import AddTodoForm from "../components/AddTodoForm";

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = {
    onAddTodo: addTodo,
    startLoading: startLoading,
    endLoading: endLoading
};

const AddTodoFormWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoForm);

export default AddTodoFormWrapper
