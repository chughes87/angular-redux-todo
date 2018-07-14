const angular = require('angular');

angular.module('myApp', [])

    .directive('todo', () => ({
        restrict: 'E',
        scope: {},
        template: `
            <div class="todo-container">
                <div ng-repeat="todo in todos" class="todo">
                    {{ todo }}
                    <button class="delete btn btn-light" ng-click="delete(todo)">X</button>
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

    .controller('AppController', ($scope) => {
        Object.assign($scope, {
            todos: ['nope', 'yep', 'why'],
            addTodo: () => $scope.todos.push($scope.model.text),
            delete: todo => $scope.todos = $scope.todos.filter(t => t !== todo),
        });
    });
