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

function insertAfter(referenceNode, newNode) {
   referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function isKeyExists(obj,key){
   if( obj[key] == undefined ){
       return false;
   }else{
       return true;
   }
}

function sortArrayPopularity(data){
   data["likes"].sort((a,b)=>a-b);
   console.log(data)
   return data;
}

function sortArrayDate(data){
   
   return data;
}

function sortArrayTitle(data){
   let title='Title';
   data.sort((a, b) => (a[title] || "").toString().localeCompare((b[title] || "").toString().localeCompare((b[field] || "").toString())));
   console.log(data)
   return data;
}