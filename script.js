const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if(firstNameValue === ""){
    setError(firstName, "First Name cannot be empty")
  } else {
    noError(firstName, "First Name cannot be empty")
  }
  if(lastNameValue === ""){
    setError(lastName, "Last Name cannot be empty")
  } else {
    noError(lastName, "Last Name cannot be empty")
  }
  if(emailValue === ""){
    setError(email, "Looks like this is not an email")
  } 
  else {
    noError(email, "Looks like this is not an email")
  }
  if(passwordValue === ""){
    setError(password, "Password cannot be empty")
  } else {
    noError(password, "Password cannot be empty")
  }
}

function setError(input, message){
  const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	const icon = formControl.querySelector('i');
	input.classList.add("error");
  small.classList.add("visible")
  icon.classList.add("visible")
	small.innerText = message;
}

function noError(input, message){
  const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	const icon = formControl.querySelector('i');
	input.classList.remove("error");
  small.classList.remove("visible")
  icon.classList.remove("visible")
	small.innerText = message;
}