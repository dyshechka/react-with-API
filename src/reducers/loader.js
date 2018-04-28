const loader = (state = {loader: false}, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return {loader: true};
        case 'END_LOADING':
            return {loader: false};
        default:
            return state;
    }
};

export default loader;
