angular.module("myApp")
.controller("homeUsersController", function ($scope,$http,$window,$location) {
    token = $window.sessionStorage.getItem('vacation-token');
        $http({
            method: "POST",
            url: "http://localhost:3000/users/getRecommendation",
            headers: {
                'x-auth-token': token
            }
        }).then(function (response) {
            ans = response.data;
            $scope.recommend_1 = ans[0];
            $scope.recommend_2 = ans[1];
         },
        function (response) { console.error('Error occurred:', response.status, response.data);   });
});