import React, {Component} from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <todo-item>
                <div className={"to-do" + (this.props.todo.attributes.done === 1 ? " change-background" : "")}>
                    <div className="row">
                        <div className="text">{this.props.todo.attributes.text}</div>
                        <div className="text">{this.props.todo.attributes.done}</div>
                        <div className="jackdaw">
                            {!this.props.todo.attributes.done && <span className="clickable" onClick={() => this.props.onComplete(this.props.todo)}>&#10004;</span>}
                            {this.props.todo.attributes.done && <span>{this.props.todo.attributes.estimated}</span>}
                        </div>
                    </div>
                    <div className="time-text">
                        <span>{this.props.todo.attributes.time.toLocaleString()}</span>
                    </div>
                </div>
            </todo-item>
        );
    }
}

export default TodoItem;
