
function getPhotographSection(data) {
    const { id, name, portrait, city, country, price, tagline } = data;
    const picture = `assets/Sample Photos/Photographers ID Photos/${portrait}`;
    const article = document.createElement('article');
    article.setAttribute("id", "name_card");
    const h2 = document.createElement( 'h2' );
    h2.textContent = name;
    const pville = document.createElement('p');
    pville.textContent = city+", "+country;
    pville.setAttribute('class', "country");
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    img.setAttribute("class", "photo");
    const tag = document.createElement('p');
    tag.textContent = tagline;
    tag.setAttribute("class", "tagline");
    article.appendChild(h2);
    article.appendChild(pville);
    article.appendChild(tag);
    insertAfter(document.querySelector(".contact_button"), img);
    return (article);
}

async function contactPhotographer(data) {
    const { id, name, portrait, city, country, price, tagline } = data;
    console.log(data)
    
    var photoSection = getPhotographSection(data)

    return {name, portrait, photoSection }
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
