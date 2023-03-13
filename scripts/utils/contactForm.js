const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const email = document.getElementById("email");
const message = document.getElementById("message");

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    firstNameInput.focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}



document.querySelector("form").addEventListener("submit", evt => {
    let error = false;
    error = checkFirstname() || error;
    error = checkName() || error;
    error = checkEmail() || error;
    error = checkMessage() || error;
    evt.preventDefault();
    if (!error) {
        cleanModal();
        closeModal();
        showSuccessMessage();
    }
    });
    
    function printErrorMessage(el, bool) {
        el.dataset.errorVisible = bool;
        el.closest("div.formData").dataset.errorVisible = bool;
    }
    
    function checkFirstname() {
        if (firstNameInput.value.length < 2) {
            printErrorMessage(firstNameInput, true);
            return true;
        }
    
        printErrorMessage(firstNameInput, false);
        return false;
    }
    
    function checkName() {
        if (lastNameInput.value.length < 2) {
            printErrorMessage(lastNameInput, true);
            return true;
        }
        printErrorMessage(lastNameInput, false);
        return false;
    }
    
    function checkEmail() {
        if (!email.value.match(regex)) {
            printErrorMessage(email, true);
            return true;
        }
        printErrorMessage(email, false);
        return false;
    }

    function checkMessage() {
        if (message.value.trim().length < 10) {
            printErrorMessage(message, true);
            return true;
        }
        printErrorMessage(message, false);
        return false;
    }
    
    function showSuccessMessage() {
        alert("Votre message a bien été pris en compte !");
    }

    function cleanModal() {
        firstNameInput.value = '';
        lastNameInput.value = '';
        email.value = '';
        message.value = '';
    }