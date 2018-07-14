import angular from 'angular';

export default angular.module('state.todosReducer', [
    require('./ActionType.js').default.name,
])

    .service('todosReducer', ActionType => (todos = [], action) => {
        switch (action.type) {
        case ActionType.TODO_ADDED:
            return [...todos, action.todo];

        case ActionType.TODO_REMOVED:
            return todos.filter(t => t !== action.todo);

        default:
            return todos;
        }
    });
