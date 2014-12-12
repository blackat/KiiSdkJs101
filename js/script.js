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
                // Print some info to the log
                console.log("Error authenticating: " + errorString);
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


/*
 var username;
 var passoword;

 function signup() {

 resetAlert();

 username = document.getElementById('inputUsername').value;
 password = document.getElementById('inputPassword').value;

 console.log("username: " + username);
 console.log("password: " + password);

 // Create the KiiUser object
 var user = KiiUser.userWithUsername(username, password);

 // Register the user, defining callbacks for when the process completes
 user.register({
 // Called on successful registration
 success: function(theUser) {
 // Print some info to the log
 console.log("User registered!");
 console.log(theUser);
 document.getElementById('success').innerText = 'User ' + theUser._username + ' succesfully registered.';
 document.getElementById('success-div').style.display = 'block';
 },
 // Called on a failed registration
 failure: function(theUser, errorString) {
 // Print some info to the log
 console.log("Error registering: " + errorString);
 document.getElementById('error').innerText = errorString;
 document.getElementById('error-div').style.display = 'block';
 }
 });
 }

 function signin() {

 resetAlert();

 username = document.getElementById('inputUsername').value;
 password = document.getElementById('inputPassword').value;

 console.log("username: " + username);
 console.log("password: " + password);

 // Authenticate the user
 KiiUser.authenticate(username, password, {
 // Called on successful registration
 success: function(theUser) {
 // Print some info to the log
 console.log("User authenticated!");
 console.log(theUser);

 hideSignForm();
 },

 // Called on a failed authentication
 failure: function(theUser, errorString) {
 // Print some info to the log
 console.log("Error authenticating: " + errorString);
 if (errorString === 'invalid_grant') {
 document.getElementById('error').innerText = 'Invalid username or password';
 } else {
 document.getElementById('error').innerText = errorString;
 }
 document.getElementById('error-div').style.display = 'block';
 }
 })
 }

 function resetAlert() {
 document.getElementById('error-div').style.display = 'none';
 document.getElementById('success-div').style.display = 'none';
 }

 function hideSignForm() {
 document.getElementById('sign-form').style.display = 'none';
 document.getElementById('authenticated').style.display = 'block';
 }
 */
