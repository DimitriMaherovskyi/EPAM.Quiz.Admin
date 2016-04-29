angular.module('QuizApp').controller('TableController', ['$scope', function ($scope) {
    $scope.toggleSearch = false;
    $scope.search = '';
    $scope.headers = [
      {
          name: 'Student',
          field: 'student',
          predicateIndex: 1
      }, {
          name: 'User group',
          field: 'userGroup',
          predicateIndex: 0
      }, {
          name: 'Quizzes',
          field: 'quizzes',
          predicateIndex: 2
      }
    ];

    $scope.content = [
      {
          student: 'Eugene Shtefaniuk',
          userGroup: 'User',
          quizzes: 'dotNet, HTML'
      }, {
          student: 'Dmytro Maherovsky',
          userGroup: 'Admin',
          quizzes: 'dotNet, Angular'
      }, {
          student: 'Galyna Posivnych',
          userGroup: 'Admin',
          quizzes: 'dotNet'
      }, {
          student: 'Lev-Ivan Bulyk',
          userGroup: 'User',
          quizzes: 'ASP.NET MVC'
      }, {
          student: 'Ostap Gereley',
          userGroup: 'Moderator',
          quizzes: 'ASP.NET MVC'
      }
    ];

    $scope.custom = { student: 'bold', userGroup: 'grey', quizzes: 'grey' };
    $scope.sortable = ['student', 'userGroup', 'quizzes'];
    $scope.count = 5;
    $scope.pagesCount = [10, 25, 50, 100];    
}]);

angular.module('QuizApp').directive('mdTable', function () {
    return {
        restrict: 'E',
        scope: {
            headers: '=',
            content: '=',
            sortable: '=',
            customClass: '=customClass',
            count: '=',
            filters: '=',
            pagesCount: '='
        },
        controller: function ($scope, $filter, $window) {
            var orderBy = $filter('orderBy');

            $scope.myPredicate = null;

            function generatePredicate() {
                $scope.myPredicate = [null, null, null];
            }

            $scope.refreshPredicate = function (index) {
                if ($scope.myPredicate === null) {
                    generatePredicate();
                }
                if ($scope.myPredicate[index] === null) {
                    var item = null;
                    switch (index) {
                        case 0:
                            item = '+userGroup';
                            break;
                        case 1:
                            item = '+student';
                            break;
                        case 2:
                            item = '+quizzes';
                            break;
                    }
                    $scope.myPredicate[index] = item;
                }
                else if ($scope.myPredicate[index][0] === '+') {
                    $scope.myPredicate[index] = '-' + $scope.myPredicate[index].slice(1);
                }
                else if ($scope.myPredicate[index][0] === '-') {
                    $scope.myPredicate[index] = null;
                }
            };

            $scope.direction = function (index) {
                if ($scope.myPredicate) {
                    if ($scope.myPredicate[index] === null) {
                        return null;
                    };
                    if ($scope.myPredicate[index][0] === '+') {
                        return true;
                    };
                    return false;
                };
                return null;
            };

            $scope.tablePage = 0;

            $scope.nbOfPages = function () {
                return Math.ceil($scope.content.length / $scope.count);
            },

            $scope.order = function (predicate, reverse) {
                $scope.content = orderBy($scope.content, predicate, reverse);
                $scope.predicate = predicate;
            };

            $scope.order($scope.sortable[0], false);

            $scope.getNumber = function (num) {
                return new Array(num);
            };

            $scope.goToPage = function (page) {
                $scope.tablePage = page;
            };
        },
        template: angular.element(document.querySelector('#md-table-template')).html()
    }
});

angular.module('QuizApp').filter('startFrom', function () {
    return function (input, start) {
        if (!input || !input.length) { return; }
        start = +start;
        return input.slice(start);
    }
});