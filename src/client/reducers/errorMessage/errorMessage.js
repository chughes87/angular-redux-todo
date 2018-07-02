const errorMessage = (state = null, action) => {
    switch (action.type) {
    case 'ERROR_TRIGGERED':
        return action.errorMsg;
    case 'ESTIMATE_UPDATING':
        return null;
    default:
        return state;
    }
};

export default errorMessage;
