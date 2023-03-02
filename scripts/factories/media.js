function mediaFactory(data){
    const { id, name, portrait, city, country, price, tagline, likes, image, video, photographerId, title} = data;
    const picture = `assets/Sample Photos/Photographers ID Photos/${portrait}`;
    


    function getPhotographSection() {

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

    function sortImageNav() {
        const article = document.createElement('article');
        article.setAttribute("id", "sort_article");
        const texte = document.createElement('p');
        texte.setAttribute('id', 'text_sort');
        texte.textContent = "Trié par";
        const pSort = document.createElement('select');
        pSort.setAttribute("id", "p_sort");
        const optionPop = document.createElement("option");
        optionPop.setAttribute("value", "Popularité");
        optionPop.textContent = "Popularité";
        const optionDate = document.createElement("option");
        optionDate.setAttribute("value", "Date");
        optionDate.textContent = "Date";
        const optionTitle = document.createElement("option");
        optionTitle.setAttribute("value", "Titre");
        optionTitle.textContent = "Titre";
        article.appendChild(texte)
        article.appendChild(pSort);
        pSort.appendChild(optionPop);
        pSort.appendChild(optionDate);
        pSort.appendChild(optionTitle);

        return article;
    }

    function getBookdom(namePhoto) {
        
        const images = `assets/Sample Photos/${namePhoto}/${image}`;
        const videos = `assets/Sample Photos/${namePhoto}/${video}`;

        
        const article = document.createElement('article');
        article.setAttribute("class", "mosaique");
        if(isKeyExists(data,"video")) {
            const vid = document.createElement('video');
            vid.setAttribute("class", "img_video");
            vid.setAttribute('controls', '')
            article.appendChild(vid);
            const src = document.createElement("source");
            src.setAttribute("src", videos)
            src.setAttribute("type", "video/mp4")
            vid.appendChild(src)
        }
        else {
            const img = document.createElement('img');
            img.setAttribute("src", images);
            img.setAttribute("alt", title);
            img.setAttribute("class", "photo");
            img.setAttribute("onclick", `openModalLightbox(${images})`);
            article.appendChild(img);

        }
        const divUnderPhoto = document.createElement('div');
        divUnderPhoto.setAttribute('class', 'under_photo');
        article.appendChild(divUnderPhoto);
        const pville = document.createElement('p');
        pville.textContent = title;
        pville.setAttribute('class', "country");
        divUnderPhoto.appendChild(pville)
        const divLike = document.createElement("div");
        divLike.setAttribute("class", "div_like")
        divUnderPhoto.appendChild(divLike)
        const like = document.createElement("span")
        like.setAttribute("class", "like");
        like.textContent = likes;
        divLike.appendChild(like);
        const heart = document.createElement('span');
        heart.setAttribute('class','fa-solid fa-heart')
        divLike.appendChild(heart)

        return article;
    }

    return {getPhotographSection, sortImageNav, getBookdom}
}
