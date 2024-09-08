document.getElementById("Login-form").addEventListener("submit",function(event){
event.preventDefault();/*this prevents the form from submition*/

let name=document.getElementById("name");
let email=document.getElementById("email");
let password=document.getElementById("password");
let errorMessagesDiv=document.getElementById("errorMessages");

errorMessagesDiv.innerHTML='';
let errorMessages=[];

//validating name
if(name===''){
    errorMessages.push("name is required");
}
//validating email with regex
let emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if(email===''){
    errorMessages.push("email is required");
}
else if(!emailPattern.test(email)){
    errorMessages.push("Please enter a valid address");
}
if(password===''){
    errorMessages.push("password is required");
}
else if(password.length <6){
    errorMessages.push("password must be 6 characters long");
}
//display errorMessages or submit the form
if(errorMessages.length>0){
    errorMessagesDiv.innerHTML=errorMessages.join("<br>");
}
else{
    errorMessagesDiv.innerHTML="Login successful";
}


});