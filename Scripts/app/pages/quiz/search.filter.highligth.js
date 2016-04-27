(function (angular) {
    angular
        .module("QuizApp")
        .filter('highlight', function ($sce) {
            return function (text, phrase) {
                if (phrase) {
                    text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<span class="highlightedText">$1</span>');
                }

                return $sce.trustAsHtml(text);
            }
        })
})(angular);

// TODO: add ng-bind-html="student.full_name | highlight: search.text" to student full_name and add file with css style highlighedText