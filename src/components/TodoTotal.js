import React, {Component} from 'react';

class TodoTotal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <todo-total>
                <div className="row align-center mb-3">
                    <div className="col custom-flex-container div-width">
                        <label>Total: {this.props.count}</label>
                    </div>
                </div>
            </todo-total>
        );
    }
}

export default TodoTotal;
