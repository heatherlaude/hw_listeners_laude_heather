var formSubmit = document.getElementsByTagName("form");

var firstName = document.getElementById( "firstname" );
var lastName = document.getElementById( "lastname" );
var email = document.getElementById( "email_address" );
var message = document.getElementById( "meassage" );

formSubmit[0].addEventListener( "submit", function() {
        console.log("The firstName is: " + firstName.value);
        console.log("The lastName is: " + lastName.value);
        console.log("The email is: " + email.value);
        console.log("The message is: " + message.value);
});