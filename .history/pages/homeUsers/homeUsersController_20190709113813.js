angular.module("myApp")
    .controller("homeUsersController", function ($scope, $http, $window, $location) {
        var token = $window.sessionStorage.getItem('vacation-token');
        $http({
            method: "POST",
            url: "http://localhost:3000/users/getRecommendation",
            headers: {
                'x-auth-token': token
            }
        }).then(function (response) {
            console.log("here");
            ans = response.data;
            $scope.recommend_1 = ans[0];
            $scope.recommend_2 = ans[5];
        },
            function (response) { console.error('Error occurred:', response.status, response.data); });

        $scope.setSaved = function () {
            existing = $window.localStorage.getItem('vacation-favorites-'+userName)
            existing = existing ? existing.split(',') : [];
            console.log(existing);
            $scope.saved_1 = existing[0];
            $scope.saved_2 = existing[1];
        }
    });