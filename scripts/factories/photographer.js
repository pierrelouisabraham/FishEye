function photographerFactory(data) {
    const { id, name, portrait, city, country, price, tagline } = data;

    const picture = `assets/Sample Photos/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        var a=document.createElement('a');
        a.href='./photographer.html?id='+id;
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        img.setAttribute("class", "photo");
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const pville = document.createElement('p');
        pville.textContent = city+", "+country;
        pville.setAttribute('class', "country")
        const tag = document.createElement('p');
        tag.textContent = tagline;
        tag.setAttribute("class", "tagline");
        const pricePhoto = document.createElement('p');
        pricePhoto.textContent = price+"€/jour";
        pricePhoto.setAttribute("class", "price");
        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(pville);
        article.appendChild(tag);
        article.appendChild(pricePhoto);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}

