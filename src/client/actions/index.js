const estimateUpdating = () => ({
    type: 'ESTIMATE_UPDATING',
});

const estimateUpdated = estimate => ({
    type: 'ESTIMATE_UPDATED',
    estimate,
});

const explanatoryDataUpdating = () => ({
    type: 'EXPLANATORY_DATA_UPDATING',
});

const explanatoryDataUpdated = explanatoryData => ({
    type: 'EXPLANATORY_DATA_UPDATED',
    explanatoryData,
});

const errorTriggered = errorMsg => ({
    type: 'ERROR_TRIGGERED',
    errorMsg,
});

const actions = {
    errorTriggered,
    estimateUpdated,
    estimateUpdating,
    explanatoryDataUpdated,
    explanatoryDataUpdating
};

export default actions;
