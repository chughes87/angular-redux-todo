import angular from 'angular';
import { bindActionCreators } from 'redux';

export default angular.module('state.actions', [
    require('./store.js').default.name,
    require('./ActionType.js').default.name,
])

    .service('actions', (ActionType, store) => {
        return bindActionCreators({
            todoAdded,
            todoRemoved
        }, store.dispatch.bind(store));

        function todoAdded(todo) {
            return {
                type: ActionType.TODO_ADDED,
                todo,
            };
        }

        function todoRemoved(todo) {
            return {
                type: ActionType.TODO_REMOVED,
                todo,
            };
        }
    });
