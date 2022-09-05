let nameErrorMsg = document.getElementById('name-error');
let emailErrorMsg = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let requiredFields = document.querySelectorAll(".requiredField")



function validateForm() {

    const { names,email,message } = document.forms["myForm"]

    if (names.value === "") {
        nameErrorMsg.innerHTML = "Please enter a name"
        console.log("we are here")
        return false;
    }
    if (email.value === "") {
        emailErrorMsg.innerHTML = "Please enter a email address"
        // console.log("we are here")
        return false;

    }
    if(message.value === ""){
        messageError.innerHTML = "Please enter a email address"

        return false;
    }


}
function clearErrorMsg(){
    nameErrorMsg.innerHTML=""
    messageError.innerHTML=""
    emailErrorMsg.innerHTML=""
}


requiredFields.forEach(requiredField => {
    requiredField.addEventListener('focus', clearErrorMsg)   
});