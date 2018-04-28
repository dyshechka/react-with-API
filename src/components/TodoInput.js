import React, {Component} from 'react';

class TodoInput extends Component {

    constructor(props) {
        super(props);
        this.props.onResetTodo();
        this.handleAdd = this.handleAdd.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleAdd() {
        const text = this.props.todo.text.trim().toLowerCase();
        const validationResult = this.validate(text);
        if (validationResult === true) {
            this.props.onSubmit(text);
            this.props.onResetTodo();
        } else {
            this.props.onValidateTodo(validationResult);
        }
    }

    validate(text) {
        if(!text || !text.trim()) {
            return {emptyValue: true};
        } else if(this.props.todos.find(item => item.text === text)) {
            return {duplicateValue: true};
        }
        return true;
    }

    render() {
        return (
            <todo-input>
                <div className="row align-center mb-3">
                    <div className="col custom-flex-container div-width">
                        <input id='title' type="text"
                               className="input-class form-control"
                               value={this.props.todo.text}
                               onChange={(evt) => this.props.onEditTodo(evt.target.value)}/>
                        <button id='add-todo' type="button" className="button-class btn btn-info"
                                disabled={this.props.todos.length >= 10}
                                onClick={this.handleAdd}>Add</button>
                    </div>
                </div>

                {this.props.todo.emptyValue && <div className="row align-center display-none">
                    <div className="col div-width">
                        <div className="alert alert-warning div-width custom-flex-container">
                            <strong>Warning!</strong> &nbsp; You have to fill the description of task.
                        </div>
                    </div>
                </div>}

                {this.props.todo.duplicateValue && <div className="row align-center display-none">
                    <div className="col div-width">
                        <div className="alert alert-warning div-width custom-flex-container">
                            <strong>Warning!</strong> &nbsp; Similar task is already exists.
                        </div>
                    </div>
                </div>}
            </todo-input>
        );
    }
}

export default TodoInput;
