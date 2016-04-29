(function (angular) {
    angular
        .module("QuizApp")
        .filter('highlight', function ($sce) {
            return function (text, phrase) {
                if (phrase) {
                    text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<span class="highlightText">$1</span>');
                }

                return $sce.trustAsHtml(text);
            }
        })
})(angular);