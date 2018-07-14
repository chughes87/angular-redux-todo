import angular from 'angular';

export default angular.module('state.ActionType', [])

    .constant('ActionType', {
        TODO_ADDED: 'TODO_ADDED',
        TODO_REMOVED: 'TODO_REMOVED',
    });
