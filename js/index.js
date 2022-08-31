

let subject = document.forms["myForm"]["subject"].value;
let email = document.forms["myForm"]["email"].value
let message = document.forms["myForm"]["message"].value;
let nameErrorMsg = document.getElementById('name-error');
let subErrorMsg = document.getElementById('email-error');
let emailErrorMsg = document.getElementById('subject-error');
// let btn_pink = document.getElementById('btn-pink')


function validateForm() {
    let names = document.forms["myForm"]["names"].value; 
    if (names == "") {
    nameErrorMsg.innerHTML = "Please enter a name"
        console.log("we are here")
     return false;
     
    }
    if (email == "") {
        nameErrorMsg.innerHTML = "Please enter a email address"
            console.log("we are here")
         return false;
         
        }
       
        if (subject == "") {
            nameErrorMsg.innerHTML = "Please enter a subject"
                console.log("we are here")
             return false;
             
            }
   
  }
   
//btn_pink.addEventListener("click", validateForm);