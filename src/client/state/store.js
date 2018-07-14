import angular from 'angular';
import { createStore } from 'redux';

export default angular.module('state.store', [
    require('./todosReducer.js').default.name,
])

    .service('store', todosReducer => createStore(todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
