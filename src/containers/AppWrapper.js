import { connect } from 'react-redux'
import App from "../components/App";

const mapStateToProps = (state) => ({
    loading: state.loader
});

const mapDispatchToProps = {};

const AppWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppWrapper;
