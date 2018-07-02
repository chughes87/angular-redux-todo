import { combineReducers } from 'redux';
import estimate from './estimate/estimate';
import explanatoryData from './explanatoryData/explanatoryData';
import errorMessage from './errorMessage/errorMessage';

export default combineReducers({
    estimate,
    explanatoryData,
    errorMessage,
});
