import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import TodoItem from "./TodoItem";
import TodoTotal from "./TodoTotal";
import todoService from '../services/todoService';

class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.completeTodo = this.completeTodo.bind(this);
        this.reloadTodos = this.reloadTodos.bind(this);

        this.reloadTodos();
    }

    reloadTodos() {
        this.props.startLoading();
        todoService.getAll().then(result => {
            this.props.onLoadTodo(result.data.data);
            this.props.endLoading();
        });
    }

    completeTodo(todo) {
        this.props.startLoading();
        const beginTime= new Date(todo.attributes.time);
        const endTime = new Date().getTime();
        const result = (endTime - beginTime) / 1000;
        let data = {
          id: todo.id,
          estimated: `${result} sec`
        }
        todoService.update(data).then(result => {
            this.props.onUpdateTodo(result.data.data);
            this.props.endLoading();
        });
    }

    render() {
        return (
            <todo-form>
                <div className="row align-center mb-3">
                    <div className="col custom-flex-container div-width">
                        <Link to="/add" className="btn btn-info full-width-btn">Add</Link>
                    </div>
                </div>
                <TodoTotal
                    count={this.props.todos.length}
                ></TodoTotal>
                <div className="row align-center">
                    <div className="col div-width">
                        {this.props.todos.map( todo =>
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onComplete={(todo) => this.completeTodo(todo)}
                            />
                        )}
                    </div>
                </div>
            </todo-form>
        );
    }
}

export default TodoForm;
