let names = document.getElementById('names')
let subject = document.getElementById('subject')
let email = document.getElementById('email')
let message = document.getElementById('message')

function validateForm() {
    if (names.value == "") {
      alert("Name must be filled out");
      return false;
    }
     if (subject.value == "") {
      alert("Surname must be filled out");
      return false;
    }
     if (email.value == "" || email.value ==) {
      alert("number must be filled out");
      return false;
    }
    if (message == "") {
      alert("email must be filled out");
      return false;
    }
  }
   