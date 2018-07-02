const estimate = (state = {}, action) => {
    switch (action.type) {
    case 'ESTIMATE_UPDATED':
        return action.estimate;
    case 'ESTIMATE_UPDATING':
        return { isLoading: true };
    default:
        return state;
    }
};

export default estimate;
