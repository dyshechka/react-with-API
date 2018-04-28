import React, {Component} from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <todo-item>
                <div className={"to-do" + (this.props.todo.done === 1 ? " change-background" : "")}>
                    <div className="row">
                        <div className="text">{this.props.todo.text}</div>
                        <div className="jackdaw">
                            {this.props.todo.done === 0 && <span className="clickable" onClick={() => this.props.onComplete(this.props.todo)}>&#10004;</span>}
                            {this.props.todo.done === 1 && <span>{this.props.todo.estimated}</span>}
                        </div>
                    </div>
                    <div className="time-text">
                        <span>{this.props.todo.time.toLocaleString()}</span>
                    </div>
                </div>
            </todo-item>
        );
    }
}

export default TodoItem;
