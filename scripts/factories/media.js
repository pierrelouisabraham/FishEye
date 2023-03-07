function mediaFactory(data){
    const { id, name, portrait, city, country, price, tagline, likes, image, video, photographerId, title} = data;
    const picture = `assets/Sample Photos/Photographers ID Photos/${portrait}`;
    


    function getPhotographSection() {

        const article = document.createElement('article');
        article.setAttribute("id", "name_card");
        const h1 = document.createElement( 'h1' );
        h1.textContent = name;
        h1.setAttribute("role","Header (h1)")
        const pville = document.createElement('p');
        pville.textContent = city+", "+country;
        pville.setAttribute('class', "country");
        pville.setAttribute("role", "texte statique");
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        img.setAttribute("class", "photo");
        const tag = document.createElement('p');
        tag.textContent = tagline;
        tag.setAttribute("class", "tagline");
        article.appendChild(h1);
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
        texte.setAttribute("role", "input label");
        const pSort = document.createElement('select');
        pSort.setAttribute("id", "p_sort");
        pSort.setAttribute("tabindex", "2");
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

    function getBookdom(photographer) {
        
        const namePhoto = photographer.name;
        const images = `assets/Sample Photos/${namePhoto}/${image}`;
        const videos = `assets/Sample Photos/${namePhoto}/${video}`;
        const article = document.createElement('article');
        article.setAttribute("class", "mosaique");
        article.setAttribute("role", title);
        article.setAttribute("tabindex","2")
        const name = document.createElement('p');
        if(isKeyExists(data,"video")) {
            const vid = document.createElement('video');
            vid.setAttribute("class", "img_video");
            vid.setAttribute("onclick", `openModalLightbox('${videos}','${id}', '${title}')`);
            article.appendChild(vid);
            const src = document.createElement("source");
            src.setAttribute("src", videos);
            src.setAttribute("type", "video/mp4");
            vid.appendChild(src);
            vid.style.cursor = "pointer";
            vid.setAttribute("role", "Video link");
        }
        else {
            const img = document.createElement('img');
            img.setAttribute("src", images);
            img.setAttribute("role", "Link");
            img.setAttribute("alt", title);
            img.setAttribute("class", "photo");
            img.setAttribute("onclick", `openModalLightbox('${images}','${id}','${title}')`);
            article.appendChild(img);
            img.style.cursor = "pointer";
            img.setAttribute("role", "Image link");
        }
        const divUnderPhoto = document.createElement('div');
        divUnderPhoto.setAttribute('class', 'under_photo');
        article.appendChild(divUnderPhoto);
        name.textContent = title; 
        name.setAttribute('class', "img_title");
        name.setAttribute("role", "Text");
        divUnderPhoto.appendChild(name);
        const divLike = document.createElement("div");
        divLike.setAttribute("class", "div_like")
        divUnderPhoto.appendChild(divLike);
        const like = document.createElement("span");
        like.setAttribute("class", "like");
        like.setAttribute("id", title)
        like.setAttribute("isliked", "false");
        like.setAttribute("tabindex","2")
        like.setAttribute("onclick", `increaseLike('${likes}','${title}')`);
        like.textContent = likes;
        divLike.appendChild(like);
        const heart = document.createElement('span');
        heart.setAttribute('class','fa-solid fa-heart');
        heart.setAttribute("aria-label", "likes");
        heart.setAttribute("onclick", `increaseLike('${likes}','${title}')`);
        divLike.appendChild(heart);

        return article;
    }

    function priceAndLikes() {
        const articleLikesAndPrice = document.createElement('article');
        articleLikesAndPrice.setAttribute('id', "flex_price");
        const divLikes = document.createElement('div');
        divLikes.setAttribute('id', 'sum_likes_icon');
        articleLikesAndPrice.appendChild(divLikes);
        const sumLikes = document.createElement('p');
        sumLikes.setAttribute('id', 'sum_likes');
        sumLikes.textContent = sumOfLikes();
        sumLikes.setAttribute("role", "Text");
        divLikes.appendChild(sumLikes);
        const heart = document.createElement('span');
        heart.setAttribute('class','fa-solid fa-heart');
        divLikes.appendChild(heart);
        const priceDiv = document.createElement('div');
        priceDiv.setAttribute('id', 'price');
        priceDiv.textContent = price+'€/jour'
        articleLikesAndPrice.appendChild(priceDiv); 
        
        return articleLikesAndPrice;
    }

    return {getPhotographSection, sortImageNav, getBookdom, priceAndLikes}
}
