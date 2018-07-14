import angular from 'angular';

export default angular.module('state.selectors', [
    require('./store.js').default.name,
])

    .service('selectors', (store) => {
        return {
            getTodos,
        };

        function getTodos() {
            return store.getState();
        }
    });
