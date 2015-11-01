var logToFile;

var app = angular.module("letsPostIt", ['ngRoute']);

app.config(function ($routeProvider, $sceDelegateProvider, $compileProvider) {
    var whitelist = /^\s*(https?|ms-appx|ms-appx-web|ms-appdata):|data:image\//;
    $compileProvider.imgSrcSanitizationWhitelist(whitelist);
    $compileProvider.aHrefSanitizationWhitelist(whitelist);

    $routeProvider
        .when('/', {
            templateUrl: 'pages/start/start.html',
            controller: 'startController'
        })
        .when('/postIt', {
            templateUrl: 'pages/postIt/postIt.html',
            controller: 'postItController'
        })
        .when('/postIt/:postItId', {
            templateUrl: 'pages/postIt/postIt.html',
            controller: 'postItController'
        })
        .otherwise({ redirectTo: '/' });

    $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    '*'
    ]);

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        //log file init
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (dir) {
            var entry = dir.root;
            entry.getFile("log.txt", { create: true }, function (file) {
                logOb = file;
            });
        });
    }
});
