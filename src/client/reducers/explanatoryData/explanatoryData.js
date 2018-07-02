const explanatoryData = (state = {}, action) => {
    switch (action.type) {
    case 'EXPLANATORY_DATA_UPDATED':
        return {
            isLoading: false,
            data: action.explanatoryData,
        };
    case 'EXPLANATORY_DATA_UPDATING':
        return { isLoading: true };
    default:
        return state;
    }
};

export default explanatoryData;
