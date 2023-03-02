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
        const pSort = document.createElement('p');
        pSort.setAttribute("id", "p_sort");
        pSort.textContent = "Trier par";
        const navSort = document.createElement("nav");
        const ulSort = document.createElement("ul");
        const liSortPop = document.createElement("li");
        liSortPop.setAttribute("onclick", "sortBy(pop)");
        liSortPop.textContent = "Popularité";
        const liSortDate = document.createElement("li");
        liSortDate.textContent = "Date";
        liSortPop.setAttribute("onclick", "sortBy(date)")
        const liSortTitle = document.createElement("li");
        liSortTitle.textContent = "Titre";
        liSortTitle.setAttribute("onclick", "sortBy(title)");
        article.appendChild(pSort);
        article.appendChild(navSort);
        navSort.appendChild(ulSort);
        ulSort.appendChild(liSortPop);
        ulSort.appendChild(liSortDate);
        ulSort.appendChild(liSortTitle);

        return article;
    }

    function getBookdom(namePhoto) {
        console.log(data);
        
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
            img.setAttribute("onclick", 'loadImage('+images+')');
            article.appendChild(img);

        }
        const divUnderPhoto = document.createElement('div');
        divUnderPhoto.setAttribute('class', 'under_photo');
        article.appendChild(divUnderPhoto);
        const pville = document.createElement('p');
        pville.textContent = title;
        pville.setAttribute('class', "country");
        divUnderPhoto.appendChild(pville)
        const like = document.createElement("span")
        like.setAttribute("class", "like");
        like.textContent = likes;
        divUnderPhoto.appendChild(like);
        const heart = document.createElement('span');
        heart.setAttribute('class','fa-solid fa-heart')
        divUnderPhoto.appendChild(heart)

        return article;
    }

    return {getPhotographSection, sortImageNav, getBookdom}
}
