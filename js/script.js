'use strict';

var boxApp = angular.module('boxApp', []);

boxApp.controller('boxCtrl', function ($scope) {

    $scope.show = false;
    $scope.items = [{id: "0001", destination: "New York"}, {id: "0002", destination: "Atlanta"}];

    $scope.login = function () {
        console.log("login user having username " + $scope.user.username + " and password " + $scope.user.password);
        $scope.errorMessage = "";
        $scope.messageClass = "";

        // Authenticate the user
        KiiUser.authenticate($scope.user.username, $scope.user.password, {
            // Called on successful registration
            success: function (theUser) {
                // Print some info to the log
                console.log("User " + theUser + " successfully authenticated!");
                $scope.show = true;
                $scope.$apply();
            },

            // Called on a failed authentication
            failure: function (theUser, errorString) {
                console.log("Error authenticating: " + errorString);
                if (errorString.indexOf('invalid_grant') > -1) {
                    $scope.errorMessage = "User or password incorrect"
                    $scope.messageClass = "alert alert-danger";
                    $scope.$apply();
                } else {
                    $scope.errorMessage = errorString;
                    $scope.$apply();
                }
            }
        })
    };

    $scope.register = function () {
        console.log("register a new user having username " + $scope.user.username + " and password " + $scope.user.password);
        $scope.errorMessage = "";
        $scope.messageClass = "";
        $scope.$apply();

        // Create the KiiUser object
        var user = KiiUser.userWithUsername($scope.user.username, $scope.user.password);

        // Register the user, defining callbacks for when the process completes
        user.register({
            // Called on successful registration
            success: function (theUser) {
                // Print some info to the log
                console.log("User " + theUser + " has been successfully registered.");
                console.log(theUser);
            },
            // Called on a failed registration
            failure: function (theUser, errorString) {
                if (errorString.indexOf('USER_ALREADY_EXISTS:') > -1) {
                    $scope.errorMessage = errorString.replace('USER_ALREADY_EXISTS:', '');
                    $scope.messageClass = "alert alert-danger";
                    $scope.$apply();
                } else {
                    $scope.errorMessage = errorString;
                    $scope.$apply();
                }
                console.log("Error registering the user due to " + errorString);
            }
        });
    };

    $scope.back = function() {
        $scope.show = false;
        $scope.user.username = "";
        $scope.user.password = "";
    }
});
