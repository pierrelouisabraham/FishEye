//Mettre le code JavaScript lié à la page photographer.html
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const email = document.getElementById("email");

async function init() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    
    const { media }= await getMedia();
    const { photographer } =  getPhotographer(id);
}

init();

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photograph-header");
};

async function getPhotographer(id) {
    const data = await getObjectFromJson('../../data/photographers.json');
    console.log(id)
    const photographers = data["photographers"];
    const photographer = photographers.find(photographer => photographer.id = id)
    console.log(photographer)
}

document.querySelector("form").addEventListener("submit", evt => {
let error = false;
error = checkFirstname() || error;
error = checkName() || error;
error = checkEmail() || error;

if (!error) {
    closeModal();
    openModalSuccess();
}
evt.preventDefault();
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