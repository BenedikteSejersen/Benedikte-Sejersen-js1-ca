const formContainer = document.querySelector("#contactForm");
formContainer.addEventListener("submit",validateForm);

function validateForm(event){
    event.preventDefault();
    console.log("The form was submitted");

    // name input
    const name = document.querySelector("#name");
    const nameError = document.querySelector("#nameError");
    const nameValue = name.value;

    if(lengthToCheck(nameValue, 0) === true) {
        nameError.style.display ="none";
    } else {
        nameError.style.display ="block";
    }

    // answer input
    const answer = document.querySelector("#answer");
    const answerError = document.querySelector("#answerError");
    const answerValue = answer.value;

    if(lengthToCheck(answerValue, 9) === true) {
        answerError.style.display = "none";
    } else {
        answerError.style.display = "block";
    }

    // email input
    const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");
    const invalidEmailError = document.querySelector("#invalidEmailError");
    const emailValue = email.value;

    if(lengthToCheck, validateEmail(emailValue, 0) === true){
        emailError.style.display ="none";
        invalidEmailError.style.display ="none";
    } else {
        emailError.style.display ="block";
        invalidEmailError.style.display ="block";
    }

    // address input
    const address = document.querySelector("#address");
    const addressError = document.querySelector("#addressError");
    addressValue = address.value;

    if(lengthToCheck(addressValue, 14) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
}

function lengthToCheck(value, checkLength) {
    const valueLength = value.trim();

    if (valueLength.length > checkLength) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
}

formContainer.addEventListener("keyup", checkLengthInput);
function checkLengthInput(event) {
    const inputValue = event.target.value.trim();
    const inputLengthValue = inputValue.length;
    console.log(inputLengthValue);

    
}

