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
   data.sort((a,b)=>a.likes-b.likes);
   console.log(data)
   return data;
}


   function sortArrayDate(data){  
      data = data.sort(function (a, b) {
         var dateA = new Date(a.date).getTime();
         var dateB = new Date(b.date).getTime();
         return dateA > dateB ? 1 : -1;
       });

       return data;
  }

function sortArrayTitle(data){
   let title='Title';
   const sortedList = data.sort((a, b) =>
    a.title.localeCompare(b.title));
   console.log(sortedList)
   return sortedList;
}