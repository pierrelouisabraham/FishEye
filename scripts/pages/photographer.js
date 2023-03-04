//Mettre le code JavaScript lié à la page photographer.html
var currentMedias = [];
var currentPhoto;

async function init() {
    var params = (new URL(document.location)).searchParams;
    var id = params.get('id');
    
    const { media }= await getMedia();
    displayDataPhoto(await getPhotographer(id));
}

init();

async function displayDataPhoto(photographer) {
    const photographerSection = document.querySelector(".photograph-header");
    const button = document.querySelector(".contact_button");
    const main = document.querySelector("main")
    const contactPhotographer = mediaFactory(photographer);
    const  cardModel = contactPhotographer.getPhotographSection();
    photographerSection.appendChild(cardModel);
    photographerSection.insertBefore(cardModel, button);
    const sortModel = contactPhotographer.sortImageNav();
    main.appendChild(sortModel);

    currentMedias = photographer["medias"];
    const divFlex = document.createElement('div');
    divFlex.setAttribute('class', "flexible")
    main.appendChild(divFlex);

    currentMedias =  sortArrayPopularity(currentMedias);

    const div = document.querySelector(".flexible")
    currentMedias.forEach((currentMedia) => {
        const bookmodel = mediaFactory(currentMedia);
        const bookDom = bookmodel.getBookdom(photographer);
        div.appendChild(bookDom);
    });

    const selector = document.querySelector("#p_sort"); 
    const domToRemove = document.querySelector(".mosaique")

selector.addEventListener("change", (event) => {
    if(selector.value == "Popularité")
    {
            currentMedias =  sortArrayPopularity(currentMedias);
            removeAllChildNodes(div)
            currentMedias.forEach((currentMedia) => {
                const bookmodel = mediaFactory(currentMedia);
                const bookDom = bookmodel.getBookdom(photographer.name);
                div.appendChild(bookDom);
            });
    }
    if(selector.value == "Date")
    {
            currentMedias =  sortArrayDate(currentMedias);
            removeAllChildNodes(div)
            currentMedias.forEach((currentMedia) => {
                const bookmodel = mediaFactory(currentMedia);
                const bookDom = bookmodel.getBookdom(photographer.name);
                div.appendChild(bookDom);
            });
    }
    if(selector.value == "Titre")
    {
            currentMedias =  sortArrayTitle(currentMedias);
            removeAllChildNodes(div)
            currentMedias.forEach((currentMedia) => {
                const bookmodel = mediaFactory(currentMedia);
                const bookDom = bookmodel.getBookdom(photographer.name);
                div.appendChild(bookDom);
            });
    }
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

function openModalLightbox(imageUrl, id, title) {
    document.querySelector("#lightbox_modal").style.display = "block";
    const imgLight = document.getElementById('image_lightbox');
    const video = document.getElementById("video_lightbox");
    const titleHtml = document.getElementById("title_media");
    titleHtml.textContent = title
    if (imageUrl.includes('.mp4')) {
        imgLight.setAttribute("name", id);
        imgLight.style.display = "none";
        video.style.display = "block";
        if(video.hasChildNodes()) {
            video.innerHTML = '';
        }
        
        const src = document.createElement("source");
            src.setAttribute("src", imageUrl)
            src.setAttribute("type", "video/mp4")
            video.appendChild(src)
    } 
    else {
        video.style.display = "none";
        imgLight.style.display = "block";
        imgLight.setAttribute("src", imageUrl);
        imgLight.setAttribute("name", id);
    }
    
    
}

function closeModalLightbox() {
    document.querySelector("#lightbox_modal").style.display = "none";
}

function loadVideo(url) {
    const source = document.getElementById("source_video");
    source.setAttribute("src", url)
    source.setAttribute("type", "video/mp4")
}



// utiliser reduce pour la somme des likes

function nextImage () {
    const currentImage = document.getElementById("image_lightbox")
    const currentImageSrc = currentImage.src.split('/')[5];
    const currentImageName = currentImage.getAttribute("name");
    const compare = (element) => element.id == currentImageName;
    var index = currentMedias.findIndex(compare);
    var nextIndex = index + 1;
    if(nextIndex > currentMedias.length - 1) {
     nextIndex = 0;
    }
    if('video' in currentMedias[nextIndex]) {
        openModalLightbox("assets/Sample Photos/" + currentImageSrc + '/' + (currentMedias[nextIndex].video), currentMedias[nextIndex].id, currentMedias[nextIndex].title); 
    }
    else {
        openModalLightbox("assets/Sample Photos/" + currentImageSrc + '/' + (currentMedias[nextIndex].image), currentMedias[nextIndex].id, currentMedias[nextIndex].title);
    }
}
    
  function previousImage () {
    const currentImage = document.getElementById("image_lightbox")
    const currentImageSrc = currentImage.src.split('/')[5];
    const currentImageName = currentImage.getAttribute("name");
    const compare = (element) => element.id == currentImageName;
    var index = currentMedias.findIndex(compare);
    var previousIndex = index - 1;
    if(previousIndex < 0) {
        previousIndex = currentMedias.length - 1;
    }
    if('video' in currentMedias[previousIndex]) {
        openModalLightbox("assets/Sample Photos/" + currentImageSrc + '/' + (currentMedias[previousIndex].video), currentMedias[previousIndex].id, currentMedias[previousIndex].title); 
    }
    else {
        openModalLightbox("assets/Sample Photos/" + currentImageSrc + '/' + (currentMedias[previousIndex].image), currentMedias[previousIndex].id, currentMedias[previousIndex].title);
    }
    
  }