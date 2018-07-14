import angular from 'angular';

angular.module('myApp', [
    require('./state/actions.js').default.name,
    require('./state/selectors.js').default.name,
])

    .directive('todo', () => ({
        restrict: 'E',
        scope: {},
        template: `
            <div class="todo-container">
                <div ng-repeat="todo in selectors.getTodos()" class="todo">
                    {{ todo }}
                    <button class="delete btn btn-light" ng-click="actions.todoRemoved(todo)">X</button>
                </div>
                <div class="input-group user-form">
                    <input class="todo-text-input form-control"
                           type="text"
                           ng-model="model.text">
                    </input>
                    <button class="add-button btn btn-primary input-group-btn"
                            ng-click="addTodo()">
                        add
                    </button>
                </div>
            </div>
        `,
        controller: 'AppController'
    }))

    .controller('AppController', ($scope, actions, selectors) => {
        Object.assign($scope, {
            actions,
            selectors,
            model: { text: '' },
            addTodo,
        });

        function addTodo() {
            actions.todoAdded($scope.model.text);
            $scope.model.text = '';
        }
    });
