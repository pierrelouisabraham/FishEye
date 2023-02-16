//Mettre le code JavaScript lié à la page photographer.html
async function init() {
    getPhotographer();
}

init();

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
};

async function getPhotographer() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
}