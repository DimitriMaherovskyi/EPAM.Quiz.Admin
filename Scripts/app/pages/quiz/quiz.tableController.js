angular.module('QuizApp').controller('TableController', ['$scope', function($scope){
  $scope.toggleSearch = false;   
  $scope.headers = [
    {
      name:'Student',
      field:'student'
    },{
      name: 'User group', 
      field: 'userGroup'
    },{
      name:'Quizzes', 
      field: 'quizzes'
    }
  ];
  
  $scope.content = [
    {
      student: 'Eugene Shtefaniuk', 
      userGroup: 'User',
      quizzes: 'dotNet, HTML'
    },{
      student: 'Dmytro Maherovsky', 
      userGroup: 'Admin',
      quizzes: 'dotNet, Angular'
    },{
      student: 'Galyna Posivnych', 
      userGroup: 'Admin',
      quizzes: 'dotNet'
    },{
      student: 'Lev-Ivan Bulyk', 
      userGroup: 'User',
      quizzes: 'ASP.NET MVC'
    },{
      student: 'Ostap Gereley', 
      userGroup: 'Moderator',
      quizzes: 'ASP.NET MVC'
    }
  ];
  
  $scope.custom = {student: 'bold', userGroup: 'grey', quizzes: 'grey'};
  $scope.sortable = ['student', 'userGroup', 'quizzes'];
  $scope.count = 5;
}]);

angular.module('QuizApp').directive('mdTable', function () {
  return {
    restrict: 'E',
    scope: { 
      headers: '=', 
      content: '=', 
      sortable: '=', 
      filters: '=',
      customClass: '=customClass',
      count: '=' 
    },
    controller: function ($scope, $filter, $window) {
      var orderBy = $filter('orderBy');
      console.log($scope);
      $scope.tablePage = 0;
      $scope.nbOfPages = function () {
        return Math.ceil($scope.content.length / $scope.count);
      },
      $scope.handleSort = function (field) {
          if ($scope.sortable.indexOf(field) > -1) { return true; } else { return false; }
      };
      $scope.order = function(predicate, reverse) {
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
      console.log(angular.element(document.querySelector('#md-table-template')).html());
    },
    template: angular.element(document.querySelector('#md-table-template')).html()
  }
});

angular.module('QuizApp').filter('startFrom',function (){
  return function (input,start) {
    start = +start;
    return input.slice(start);
  }
});