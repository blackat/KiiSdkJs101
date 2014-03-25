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
		},
	
		// Called on a failed authentication
		failure: function(theUser, errorString) {
			// Print some info to the log
			console.log("Error authenticating: " + errorString);
		}
	})
}

function resetAlert() {
	document.getElementById('error-div').style.display = 'none';
	document.getElementById('success-div').style.display = 'none';
}