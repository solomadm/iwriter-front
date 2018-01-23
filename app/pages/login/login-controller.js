iwriterApp.controller('loginController',['$scope','$auth', '$state','$rootScope', function($scope, $auth, $state, $rootScope) {

    $scope.login = function() {

        var creds = {
            "username": $scope.username,
            "passw": $scope.passw
        };

        $auth
            .login(creds)
            .then(function() {
                $state.go('dashboard-client');
            });
    }

}]);