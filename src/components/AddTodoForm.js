import React, {Component} from 'react';
import TodoInputWrapper from "../containers/TodoInputWrapper";
import {Link} from "react-router-dom";
import todoService from '../services/todoService';

class AddTodoForm extends Component {

    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(text) {
        this.props.startLoading();
        const todo = {
            text: text,
            time: new Date(),
            done: 0
        };
        todoService.create(todo).then(result => {
            this.props.onAddTodo(result.data);
            this.props.endLoading();
        });
    }

    render() {
        return (
            <add-add-todo-form>
                <TodoInputWrapper onSubmit={(text) => this.addTodo(text)}/>
                <div className="row align-center mb-3">
                    <div className="col custom-flex-container div-width">
                        <Link to="/">Go back to list</Link>
                    </div>
                </div>
            </add-add-todo-form>
        );
    }
}

export default AddTodoForm;
