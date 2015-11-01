app.controller('startController', function ($scope, $location, postItService) {

    $scope.postItList = postItService.getAllPostIts();

    $scope.goToNewPostIt = function () {
        $location.path('/postIt');
    }

    $scope.goToExisitingPostIt = function (postIt) {
        $location.path('/postIt/' + postIt.id);
    }

    $scope.formatDate = function (date) {
        return moment(date).format('DD/MM - HH:mm');
    }

    $scope.deletePostIt = function (postIt) {
        postItService.deletePostIt(postIt.id);
        $scope.postItList = postItService.getAllPostIts();
    }
});