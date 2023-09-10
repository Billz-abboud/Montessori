var objPeople = [
	{ // Object @ 0 index
		username: "bilal",
		password: "abboud"
	},
	{ // Object @ 1 index
		username: "zainab",
		password: "safawi"
	}
]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			// stop the function if this is found to be true
                        window.location.href = "home";
			return
		}
	}
	console.log("incorrect username or password")
}
/*var usernames = ["smith",  "tron",      "ace",      "ladyj",    "anon"];
var passwords = ["qwerty", "EndOfLine", "year1942", "ladyj123", "PASSWORD"];

var x = prompt("Please enter the username");
var y = prompt("Please enter the password");

var valid = false;

validate(x, y);

function validate(username, password) {

    for (var i=0; i <usernames.length; i++) {
        if ((username == usernames[i]) && (password == passwords[i])) {
            valid = true;
            break;  
        }
    }
}

if(valid) {
  alert("valid credentials");
}
else {
  alert("invalid credentials");
}*/
