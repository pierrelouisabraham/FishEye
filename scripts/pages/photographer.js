//Mettre le code JavaScript lié à la page photographer.html


async function init() {
    var params = (new URL(document.location)).searchParams;
    var id = params.get('id');
    
    const { media }= await getMedia();
    displayDataPhoto(await getPhotographer(id));
}

init();

async function displayDataPhoto(photographer) {
    console.log(photographer)
    const photographerSection = document.querySelector(".photograph-header");
    const button = document.querySelector(".contact_button");
    const main = document.querySelector("main")
    const contactPhotographer = mediaFactory(photographer);
    const  cardModel = contactPhotographer.getPhotographSection();
    photographerSection.appendChild(cardModel);
    photographerSection.insertBefore(cardModel, button);
    const sortModel = contactPhotographer.sortImageNav();
    main.appendChild(sortModel);
    var medias = photographer["medias"];
    const divFlex = document.createElement('div');
    divFlex.setAttribute('class', "flexible")
    main.appendChild(divFlex);
    const div = document.querySelector(".flexible")
    medias.forEach((media) => {
        const bookmodel = mediaFactory(media);
        const bookDom = bookmodel.getBookdom(photographer.name);
        div.appendChild(bookDom);
    });
    
}

async function getPhotographer(id) {
    const data = await getObjectFromJson('../../data/photographers.json');
    const photographers = data["photographers"];
    const medias = data["media"]
    const photographer = photographers.find(photographer => photographer.id == id)
    photographer["medias"] = [];
    photographer["medias"] = medias.filter(media => media["photographerId"] == id)
    
    
    return photographer;
}

function openModalLightbox(imageUrl) {
    document.querySelector("#lightbox_modal").style.display = "block";
    const currentIndex = photographer["medias"].indexOf(imageUrl);
    const imgLight = document.getElementById('img_lightbox');
    imgLight.setAttribute("src", imageUrl);

}

function closeModalLightbox() {
    document.querySelector("#lightbox_modal").style.display = "none";
}

/* document.querySelectorAll(".photo").add */