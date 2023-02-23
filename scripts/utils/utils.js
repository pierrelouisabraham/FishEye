async function getObjectFromJson(url) {
   try{
   const response = await fetch(url);
   const data = await response.json();
    return data;
   } catch (e) {
    console.log(e)
   }
}

async function getPhotographers() {
   const data = await getObjectFromJson('../../data/photographers.json');
   const photographers = data["photographers"];
   // et bien retourner le tableau photographers seulement une fois récupéré
   return ({
       photographers: [...photographers]})
}

async function getMedia() {
   const data = await getObjectFromJson('../../data/photographers.json');
   const media = data["media"];
   console.log(media);
   return({media: [...media]})
}