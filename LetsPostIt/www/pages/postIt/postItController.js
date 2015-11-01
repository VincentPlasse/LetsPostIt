app.controller('postItController', function ($scope, $location, $routeParams, postItService) {

    var postItId = $routeParams.postItId;

    var exisitingPostIt;

    if (postItId != undefined) {
        exisitingPostIt = postItService.getPostIt(postItId);
        $scope.text = exisitingPostIt.text;
    }

    $scope.goToMain = function () {
        if (postItId != undefined) {
            exisitingPostIt.text = $scope.text;
            postItService.savePostIt(exisitingPostIt);
        }
        $location.path('/');
    }

    $scope.saveAndGoToMain = function () {
        var postIt;
        if (postItId == undefined) {
            postIt = postItService.getPostItTemplate();
            postIt.id = postItService.getNewId();
            postIt.creationDate = Date.now();
        } else {
            postIt = exisitingPostIt;
        }
        postIt.text = $scope.text;
        postItService.savePostIt(postIt);
        $location.path('/');
    }

});