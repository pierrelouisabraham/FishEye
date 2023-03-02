//Mettre le code JavaScript lié à la page photographer.html
var currentMedias = [];


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
        const bookDom = bookmodel.getBookdom(photographer.name);
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

function openModalLightbox(imageUrl) {
    document.querySelector("#lightbox_modal").style.display = "block";
    const currentIndex = photographer["medias"].indexOf(imageUrl);
    const imgLight = document.getElementById('img_lightbox');
    imgLight.setAttribute("src", imageUrl);

}

function closeModalLightbox() {
    document.querySelector("#lightbox_modal").style.display = "none";
}








  function loadImage (url) {
    this.url = null
    const image = new Image()
    const container = this.element.querySelector('.lightbox__container')
    const loader = document.createElement('div')
    loader.classList.add('lightbox__loader')
    container.innerHTML = ''
    container.appendChild(loader)
    image.onload = () => {
      container.removeChild(loader)
      container.appendChild(image)
      this.url = url
    }
    image.src = url
  }

    /**
   * @param {MouseEvent|KeyboardEvent} e 
   */
    function next (e) {
        e.preventDefault()
        let i = currentMedias.findIndex(image => image === this.url)
        if (i === currentMedias.length - 1) {
          i = -1
        }
        this.loadImage(currentMedias[i + 1])
      }
    
      /**
       * @param {MouseEvent|KeyboardEvent} e 
       */
      function prev (e) {
        e.preventDefault()
        let i = currentMedias.findIndex(image => image === this.url)
        if (i === 0) {
          i = currentMedias.length
        }
        this.loadImage(currentMedias[i - 1])
      }