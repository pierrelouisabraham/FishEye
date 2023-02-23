//Mettre le code JavaScript lié à la page photographer.html


async function init() {
    var params = (new URL(document.location)).searchParams;
    var id = params.get('id');
    
    const { media }= await getMedia();
    displayDataPhoto(await getPhotographer(id));
}

init();

async function displayDataPhoto(photographer) {
    const photographerSection = document.querySelector(".photograph-header");
    const button = document.querySelector(".contact_button")
    const cardModel = getPhotographSection(photographer);
    photographerSection.insertBefore(cardModel, button);
};

async function getPhotographer(id) {
    const data = await getObjectFromJson('../../data/photographers.json');
    const photographers = data["photographers"];
    const medias = data["media"]
    const photographer = photographers.find(photographer => photographer.id = id)
    photographer["medias"] = [];
    for (let i=0; i< medias.length; i++){
        if(medias[i]["photographerId"] == id) {
            photographer["medias"].push(medias[i])
        }
    }
    console.log(photographer)
    return photographer;
}