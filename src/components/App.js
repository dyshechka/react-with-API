import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import FontAwesome from 'react-fontawesome';

import Header from "./Header";
import TodoFormWrapper from "../containers/TodoFormWrapper";
import AddTodoFormWrapper from "../containers/AddTodoFormWrapper";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div className="container">
                    {this.props.loading.loader && <div className="cdk-overlay-container" aria-hidden="true">
                        <div className="cdk-overlay-pane app-global-overlay">
                            <FontAwesome
                                className="spinner"
                                name="spinner"
                                spin
                            />
                        </div>
                    </div>}
                    <Header/>
                    <Route exact path="/" component={TodoFormWrapper}/>
                    <Route path="/add" component={AddTodoFormWrapper}/>
                </div>
            </Router>
        );
    }
}

export default App;
