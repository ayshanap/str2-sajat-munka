let nameInput = document.querySelector("input[name=nameOf]");
let emailInput = document.querySelector("input[name=email]");
let messageInput = document.querySelector("input[name=message]");


if (nameInput.length < 5 ) {
    alert ("A név megfelelő!");
}

if (messageInput.length < 20) {
    alert ("Kérjük, írjon be üzenetet!");
}

function ValidateEmail(emailInput)
{
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if(emailInput.value.match(mailformat))
{
return true;
}
else
{
alert("Az email cím nem megfelelő!");
return false;
}
}

